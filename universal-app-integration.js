/**
 * UNIVERSAL APP INTEGRATION TEMPLATE
 * Copy this code into ANY presence app to add:
 * - Content library with variations
 * - Find New button
 * - Lazy loading
 * - Quality control
 * - Auto-refresh
 */

// ========================================
// STEP 1: Add these scripts to <head>
// ========================================
/*
<script src="presence-content-manager.js"></script>
<script src="{app}-library.js"></script>  <!-- e.g., meditation-library.js -->
<script src="presence-monitoring.js"></script>
*/

// ========================================
// STEP 2: Add this HTML to your app
// ========================================
/*
<!-- Find New Content Button (add to header) -->
<button 
    onclick="findNewContent()" 
    class="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all"
>
    🔍 Find New Content
</button>

<!-- Variations Button Template (add to each item card) -->
{item.variations && item.variations.length > 0 && (
    <button 
        onclick="showVariations('{item.id}')"
        class="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded hover:bg-emerald-500/20 transition-all"
    >
        {item.variations.length} Variations
    </button>
)}

<!-- Variations Modal (add before closing </body>) -->
<div id="variationsModal" class="fixed inset-0 bg-black/80 z-50 hidden flex items-center justify-center p-4" onclick="closeVariations()">
    <div class="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onclick="event.stopPropagation()">
        <div class="flex justify-between items-start mb-6">
            <div>
                <h2 id="variationsTitle" class="text-3xl font-bold mb-2"></h2>
                <p id="variationsSubtitle" class="text-gray-500"></p>
            </div>
            <button onclick="closeVariations()" class="text-4xl text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <div id="variationsList" class="space-y-3"></div>
    </div>
</div>

<!-- Loading Overlay (add before closing </body>) -->
<div id="loadingOverlay" class="fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center">
    <div class="bg-white rounded-2xl p-8 flex flex-col items-center">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mb-4"></div>
        <p class="text-lg font-medium">Finding new content...</p>
    </div>
</div>
*/

// ========================================
// STEP 3: Initialize Content Manager
// ========================================

// Configuration
const APP_CONFIG = {
    // CHANGE THESE FOR EACH APP:
    appType: 'meditation',  // yoga, meditation, breathwork, sleep, etc.
    library: MEDITATION_LIBRARY,  // Your app's library constant
    displayName: 'Meditation Techniques',
    
    // Search queries for "Find New" button
    searchQueries: [
        'new meditation techniques 2025',
        'guided meditation variations',
        'mindfulness practices',
        'meditation for beginners'
    ],
    
    // Categories for filtering
    categories: ['Mindfulness', 'Buddhist', 'Vedic', 'Zen', 'Modern'],
    
    // Required fields for quality control
    requiredFields: ['name', 'duration', 'instructions']
};

// Initialize manager
let contentManager;
let currentLibrary = {};
let displayedItems = [];
let currentPage = 0;
const ITEMS_PER_PAGE = 30;

async function initializeApp() {
    // Create content manager
    contentManager = new PresenceContentManager(APP_CONFIG.appType);
    
    // Load library
    await contentManager.loadLibrary();
    
    // Merge default library
    currentLibrary = { ...APP_CONFIG.library, ...contentManager.library };
    
    // Check if refresh needed
    if (contentManager.needsRefresh()) {
        // Show option to refresh
        showRefreshOption();
    }
    
    // Render initial content
    renderLibrary();
}

// ========================================
// STEP 4: Render Functions
// ========================================

function renderLibrary(filter = {}) {
    const items = Object.values(currentLibrary);
    let filtered = items;
    
    // Apply filters
    if (filter.category) {
        filtered = filtered.filter(item => item.category === filter.category);
    }
    
    if (filter.difficulty) {
        filtered = filtered.filter(item => item.difficulty === filter.difficulty);
    }
    
    if (filter.search) {
        const query = filter.search.toLowerCase();
        filtered = filtered.filter(item =>
            item.name?.toLowerCase().includes(query) ||
            item.instructions?.toLowerCase().includes(query)
        );
    }
    
    // Render first page
    displayedItems = filtered.slice(0, ITEMS_PER_PAGE);
    renderItems(displayedItems);
    
    // Update load more button
    updateLoadMoreButton(ITEMS_PER_PAGE, filtered.length);
}

function renderItems(items) {
    // YOUR CUSTOM RENDERING CODE HERE
    // This will be different for each app
    // See example below
}

function renderItem(item) {
    // Create item card with variations button
    return `
        <div class="item-card p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
            <div class="flex justify-between items-start mb-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold mb-1">${item.name}</h3>
                    ${item.sanskrit ? `<p class="text-sm text-gray-500 italic">${item.sanskrit}</p>` : ''}
                    ${item.category ? `<span class="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full mt-2">${item.category}</span>` : ''}
                </div>
                
                ${item.variations && item.variations.length > 0 ? `
                    <button 
                        onclick="showVariations('${item.id}')"
                        class="text-[10px] bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-full hover:bg-emerald-500/20 transition-all font-semibold"
                    >
                        ${item.variations.length} Variations
                    </button>
                ` : ''}
            </div>
            
            <p class="text-sm text-gray-600 mb-4">${item.instructions || item.description || ''}</p>
            
            <div class="flex flex-wrap gap-2 text-xs">
                ${item.duration ? `<span class="text-gray-500">⏱ ${Math.floor(item.duration / 60)}min</span>` : ''}
                ${item.difficulty ? `<span class="text-gray-500">📊 ${item.difficulty}</span>` : ''}
                ${item.benefits ? item.benefits.slice(0, 3).map(b => `<span class="px-2 py-1 bg-gray-100 rounded-full">${b}</span>`).join('') : ''}
            </div>
            
            <button onclick="selectItem('${item.id}')" class="mt-4 w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg transition-all">
                Select
            </button>
        </div>
    `;
}

// ========================================
// STEP 5: Variations Modal
// ========================================

function showVariations(itemId) {
    const item = currentLibrary[itemId];
    if (!item || !item.variations) return;
    
    const modal = document.getElementById('variationsModal');
    const title = document.getElementById('variationsTitle');
    const subtitle = document.getElementById('variationsSubtitle');
    const list = document.getElementById('variationsList');
    
    title.textContent = `${item.name} Variations`;
    subtitle.textContent = `${item.variations.length} variations available`;
    
    list.innerHTML = item.variations.map(variation => `
        <div class="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer" onclick="selectVariation('${itemId}', '${variation.id}')">
            <h4 class="font-semibold mb-1">${variation.name}</h4>
            ${variation.sanskrit ? `<p class="text-xs text-gray-500 italic mb-2">${variation.sanskrit}</p>` : ''}
            ${variation.instructions ? `<p class="text-sm text-gray-600">${variation.instructions}</p>` : ''}
            <div class="flex gap-2 mt-2 text-xs text-gray-500">
                ${variation.duration ? `<span>⏱ ${Math.floor(variation.duration / 60)}min</span>` : ''}
                ${variation.intensity ? `<span>📊 Level ${variation.intensity}</span>` : ''}
            </div>
        </div>
    `).join('');
    
    modal.classList.remove('hidden');
}

function closeVariations() {
    document.getElementById('variationsModal').classList.add('hidden');
}

function selectVariation(parentId, variationId) {
    const parent = currentLibrary[parentId];
    const variation = parent.variations.find(v => v.id === variationId);
    
    // Use the variation (implement based on your app)
    console.log('Selected variation:', variation);
    selectItem(parentId, variation);
    closeVariations();
}

// ========================================
// STEP 6: Find New Content
// ========================================

async function findNewContent() {
    showLoading(true);
    
    try {
        const newItems = [];
        
        // Search for each query
        for (const query of APP_CONFIG.searchQueries) {
            const results = await contentManager.findNewContent(query, 5);
            newItems.push(...results);
        }
        
        if (newItems.length > 0) {
            // Merge into library
            newItems.forEach(item => {
                const id = contentManager.generateId(item);
                currentLibrary[id] = item;
            });
            
            // Save updated library
            contentManager.library = currentLibrary;
            contentManager.saveLibrary();
            
            // Re-render
            renderLibrary();
            
            // Show success
            showNotification(`✨ Found ${newItems.length} new items!`, 'success');
        } else {
            showNotification('No new content found. Try again later.', 'info');
        }
    } catch (error) {
        console.error('Error finding content:', error);
        showNotification('Error finding new content. Please try again.', 'error');
    } finally {
        showLoading(false);
    }
}

// ========================================
// STEP 7: UI Helpers
// ========================================

function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (show) {
        overlay.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
    }
}

function showNotification(message, type = 'info') {
    // Simple notification
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 transition-all`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function showRefreshOption() {
    const shouldRefresh = confirm('Your content library is outdated. Refresh with new content?');
    if (shouldRefresh) {
        refreshLibrary();
    }
}

async function refreshLibrary() {
    showLoading(true);
    try {
        await contentManager.refreshLibrary();
        currentLibrary = { ...APP_CONFIG.library, ...contentManager.library };
        renderLibrary();
        showNotification('✨ Library refreshed with new content!', 'success');
    } catch (error) {
        console.error('Refresh error:', error);
        showNotification('Error refreshing library', 'error');
    } finally {
        showLoading(false);
    }
}

function updateLoadMoreButton(displayed, total) {
    const btn = document.getElementById('loadMoreBtn');
    if (!btn) return;
    
    if (displayed >= total) {
        btn.disabled = true;
        btn.textContent = 'All Items Loaded';
    } else {
        btn.disabled = false;
        btn.textContent = `Load More (${total - displayed} remaining)`;
    }
}

function loadMore() {
    // Implement based on your rendering logic
}

// ========================================
// STEP 8: Item Selection (Customize per app)
// ========================================

function selectItem(itemId, variation = null) {
    const item = currentLibrary[itemId];
    const selected = variation || item;
    
    // YOUR APP-SPECIFIC LOGIC HERE
    // Examples:
    // - Add to practice sequence
    // - Start meditation timer
    // - Begin breathwork pattern
    // - Play guided session
    
    console.log('Selected:', selected);
    
    // Example: Add to session
    if (typeof addToSession === 'function') {
        addToSession(selected);
    }
}

// ========================================
// STEP 9: Initialize on load
// ========================================

window.addEventListener('DOMContentLoaded', initializeApp);

// ========================================
// USAGE EXAMPLES
// ========================================

/*
// YOGA APP:
const APP_CONFIG = {
    appType: 'yoga',
    library: POSE_LIBRARY,
    displayName: 'Yoga Poses',
    searchQueries: ['new yoga poses 2025', 'yoga variations', 'advanced yoga'],
    categories: ['Standing', 'Seated', 'Backbends', 'Inversions'],
    requiredFields: ['name', 'family', 'duration']
};

// MEDITATION APP:
const APP_CONFIG = {
    appType: 'meditation',
    library: MEDITATION_LIBRARY,
    displayName: 'Meditation Techniques',
    searchQueries: ['meditation techniques', 'mindfulness practices'],
    categories: ['Mindfulness', 'Buddhist', 'Vedic'],
    requiredFields: ['name', 'tradition', 'duration']
};

// BREATHWORK APP:
const APP_CONFIG = {
    appType: 'breathwork',
    library: BREATHWORK_LIBRARY,
    displayName: 'Breath Patterns',
    searchQueries: ['breathing exercises', 'pranayama techniques'],
    categories: ['Calming', 'Energizing', 'Balancing'],
    requiredFields: ['name', 'pattern', 'duration']
};
*/
