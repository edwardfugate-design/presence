<script>
    // ===== STATE MANAGEMENT =====
    // This pulls from the window.ALL_POSES we just set up in pose-database.js
    const DATA = window.ALL_POSES || [];
    
    let currentCategory = 'all';
    let currentLevel = 'all';
    let searchQuery = '';
    let selectedPoses = new Set();
    let displayedCount = 30; // Number of poses to show initially

    // ===== FILTERING ENGINE =====
    function getFilteredData() {
        return DATA.filter(pose => {
            const matchesCategory = currentCategory === 'all' || pose.category === currentCategory;
            const matchesLevel = currentLevel === 'all' || pose.level === currentLevel;
            
            const query = searchQuery.toLowerCase();
            const matchesSearch = !searchQuery || 
                pose.name.toLowerCase().includes(query) || 
                pose.sanskrit.toLowerCase().includes(query) ||
                pose.muscles.some(m => m.toLowerCase().includes(query));

            return matchesCategory && matchesLevel && matchesSearch;
        });
    }

    // ===== UI RENDERING =====
    function renderGrid() {
        const grid = document.getElementById('poseGrid');
        const filtered = getFilteredData();
        const toShow = filtered.slice(0, displayedCount);
        
        // Clear and rebuild
        grid.innerHTML = toShow.map((pose, index) => `
            <div class="pose-card p-5 bg-white rounded-2xl border border-indigo-50 cursor-pointer transition-all hover:shadow-md ${selectedPoses.has(pose.id) ? 'ring-2 ring-indigo-500 bg-indigo-50/30' : ''}" 
                 onclick="togglePose(${pose.id})">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h3 class="font-serif text-lg font-medium text-indigo-900">${pose.name}</h3>
                        <p class="text-xs text-gray-400 italic">${pose.sanskrit}</p>
                    </div>
                    <div class="w-5 h-5 rounded-full border border-indigo-200 flex items-center justify-center ${selectedPoses.has(pose.id) ? 'bg-indigo-500' : ''}">
                        ${selectedPoses.has(pose.id) ? '<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>' : ''}
                    </div>
                </div>
                <div class="flex gap-2 mb-3">
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-indigo-50 text-indigo-600">${pose.level}</span>
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-gray-100 text-gray-600">${pose.category}</span>
                </div>
                <div class="text-xs text-gray-500 line-clamp-2">
                    <strong>Muscles:</strong> ${pose.muscles.join(', ')}
                </div>
            </div>
        `).join('');

        // Update Stats
        document.getElementById('totalCount').textContent = DATA.length;
        document.getElementById('filteredCount').textContent = filtered.length;
        
        // Toggle "Load More" button visibility
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = displayedCount >= filtered.length ? 'none' : 'block';
        }
    }

    // ===== EVENT HANDLERS =====
    function handleSearch(e) {
        searchQuery = e.target.value;
        displayedCount = 30; // Reset scroll on search
        renderGrid();
    }

    function filterByCategory(cat) {
        currentCategory = cat;
        displayedCount = 30;
        
        // UI tab styling
        document.querySelectorAll('.category-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === cat);
        });
        
        renderGrid();
    }

    function togglePose(id) {
        if (selectedPoses.has(id)) selectedPoses.delete(id);
        else selectedPoses.add(id);
        
        document.getElementById('selectedCount').textContent = selectedPoses.size;
        renderGrid();
    }

    function loadMore() {
        displayedCount += 30;
        renderGrid();
    }

    // Initialize on load
    window.addEventListener('DOMContentLoaded', () => {
        // Double check if data is loaded
        if (DATA.length === 0) {
            console.warn("Database empty - checking window.allPoses...");
            if (window.allPoses) location.reload(); // Quick fix for race conditions
        }
        renderGrid();
    });
</script>
