<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presence Vault | Library</title>
    <style>
        :root { --primary: #2c3e50; --bg: #f4f7f6; --accent: #34495e; }
        body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: var(--primary); margin: 0; padding: 20px; }
        .container { max-width: 1000px; margin: auto; }
        
        /* Search & Filter UI */
        .controls { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 30px; }
        #searchBar { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 15px; box-sizing: border-box; font-size: 16px; }
        .filter-btns { display: flex; flex-wrap: wrap; gap: 8px; }
        .filter-btn { padding: 8px 16px; border-radius: 20px; border: 1px solid var(--primary); background: transparent; cursor: pointer; transition: 0.3s; }
        .filter-btn.active { background: var(--primary); color: white; }

        /* Grid */
        .pose-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .pose-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: transform 0.2s; border-top: 4px solid var(--primary); }
        .pose-card:hover { transform: translateY(-5px); }
        .pose-card h3 { margin: 0 0 5px 0; font-size: 18px; }
        .pose-card .sanskrit { font-style: italic; color: var(--accent); display: block; margin-bottom: 10px; }
        .tag { display: inline-block; background: #eee; padding: 3px 8px; border-radius: 4px; font-size: 11px; margin-right: 5px; text-transform: uppercase; }
        
        .no-results { text-align: center; padding: 40px; color: #95a5a6; grid-column: 1 / -1; }
    </style>
</head>
<body>

<div class="container">
    <div class="controls">
        <input type="text" id="searchBar" placeholder="Search by name, muscle (e.g. core), or benefit...">
        <div class="filter-btns">
            <button class="filter-btn active" onclick="filterCategory('all', this)">All</button>
            <button class="filter-btn" onclick="filterCategory('standing', this)">Standing</button>
            <button class="filter-btn" onclick="filterCategory('seated', this)">Seated</button>
            <button class="filter-btn" onclick="filterCategory('backbends', this)">Backbends</button>
            <button class="filter-btn" onclick="filterCategory('inversions', this)">Inversions</button>
            <button class="filter-btn" onclick="filterCategory('restorative', this)">Restorative</button>
        </div>
    </div>

    <div class="pose-grid" id="poseGrid">
        </div>
</div>

<script src="presence-vault.js"></script>

<script>
    let currentFilter = 'all';

    function renderVault() {
        const grid = document.getElementById('poseGrid');
        const searchTerm = document.getElementById('searchBar').value.toLowerCase();
        
        grid.innerHTML = '';

        // Filter the ALL_POSES array
        const filtered = ALL_POSES.filter(pose => {
            const matchesSearch = pose.name.toLowerCase().includes(searchTerm) || 
                                 pose.muscles.some(m => m.toLowerCase().includes(searchTerm)) ||
                                 pose.sanskrit.toLowerCase().includes(searchTerm);
            
            const matchesCategory = currentFilter === 'all' || pose.category === currentFilter;
            
            return matchesSearch && matchesCategory;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div class="no-results">No poses found matching "${searchTerm}"</div>`;
            return;
        }

        filtered.forEach(pose => {
            const card = document.createElement('div');
            card.className = 'pose-card';
            card.innerHTML = `
                <h3>${pose.name}</h3>
                <span class="sanskrit">${pose.sanskrit}</span>
                <div>
                    <span class="tag">${pose.level}</span>
                    <span class="tag">${pose.category}</span>
                </div>
                <p style="font-size: 13px; color: #666; margin-top: 10px;">
                    <strong>Muscles:</strong> ${pose.muscles.join(', ')}
                </p>
            `;
            grid.appendChild(card);
        });
    }

    function filterCategory(cat, btn) {
        currentFilter = cat;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderVault();
    }

    // Listen for typing
    document.getElementById('searchBar').addEventListener('input', renderVault);

    // Initial Load
    window.onload = () => {
        if (typeof ALL_POSES !== 'undefined') {
            renderVault();
        } else {
            document.getElementById('poseGrid').innerHTML = "<p style='color:red;'>Error: Master database (presence-vault.js) not found.</p>";
        }
    };
</script>

</body>
</html>
