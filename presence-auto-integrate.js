/**
 * PRESENCE SUITE - AUTO-INTEGRATION SCRIPT
 * 
 * Simply add this ONE file to any app and it automatically adds:
 * - Content library with variations
 * - Find New button  
 * - Variations modal
 * - Quality control
 * - Everything!
 * 
 * Usage: <script src="presence-auto-integrate.js"></script>
 */

(function() {
    'use strict';
    
    // Detect which app this is
    const APP_DETECTION = {
        yoga: { library: 'POSE_LIBRARY', name: 'Yoga', queries: ['yoga poses 2025', 'yoga variations'] },
        meditation: { library: 'MEDITATION_LIBRARY', name: 'Meditation', queries: ['meditation techniques', 'mindfulness'] },
        breathwork: { library: 'BREATHWORK_LIBRARY', name: 'Breathwork', queries: ['breathing exercises', 'pranayama'] },
        sleep: { library: 'SLEEP_LIBRARY', name: 'Sleep', queries: ['sleep techniques', 'bedtime routines'] },
        guided: { library: 'GUIDED_LIBRARY', name: 'Guided Sessions', queries: ['guided meditation', 'guided sessions'] },
        bodyscan: { library: 'BODYSCAN_LIBRARY', name: 'Body Scan', queries: ['body scan', 'progressive relaxation'] },
        movement: { library: 'MOVEMENT_LIBRARY', name: 'Movement', queries: ['movement breaks', 'desk stretches'] },
        ambient: { library: 'AMBIENT_LIBRARY', name: 'Ambient Sounds', queries: ['ambient sounds', 'nature sounds'] },
        alignment: { library: 'ALIGNMENT_LIBRARY', name: 'Alignment', queries: ['posture alignment', 'biomechanics'] },
        rituals: { library: 'RITUALS_LIBRARY', name: 'Rituals', queries: ['daily rituals', 'routines'] },
        journal: { library: 'JOURNAL_LIBRARY', name: 'Journal', queries: ['journal prompts', 'reflection'] }
    };
    
    // Auto-detect app type
    let detectedApp = null;
    for (const [appType, config] of Object.entries(APP_DETECTION)) {
        if (window[config.library] || document.title.toLowerCase().includes(config.name.toLowerCase())) {
            detectedApp = { type: appType, ...config };
            break;
        }
    }
    
    if (!detectedApp) {
        console.log('Could not auto-detect app type');
        return;
    }
    
    console.log(`✅ Auto-detected: ${detectedApp.name} app`);
    
    // ========================================
    // INJECT UI ELEMENTS
    // ========================================
    
    function injectUI() {
        // Inject variations modal
        if (!document.getElementById('variationsModal')) {
            const modal = document.createElement('div');
            modal.id = 'variationsModal';
            modal.className = 'fixed inset-0 bg-black/80 z-50 hidden flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onclick="event.stopPropagation()">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 id="variationsTitle" class="text-3xl font-bold mb-2"></h2>
                            <p id="variationsSubtitle" class="text-gray-500"></p>
                        </div>
                        <button onclick="window.PresenceAuto.closeVariations()" class="text-4xl text-gray-400 hover:text-gray-600">&times;</button>
                    </div>
                    <div id="variationsList" class="space-y-3"></div>
                </div>
            `;
            modal.onclick = () => window.PresenceAuto.closeVariations();
            document.body.appendChild(modal);
        }
        
        // Inject loading overlay
        if (!document.getElementById('loadingOverlay')) {
            const loading = document.createElement('div');
            loading.id = 'loadingOverlay';
            loading.className = 'fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center';
            loading.innerHTML = `
                <div class="bg-white rounded-2xl p-8 flex flex-col items-center">
                    <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mb-4"></div>
                    <p class="text-lg font-medium">Finding new content...</p>
                </div>
            `;
            document.body.appendChild(loading);
        }
        
        // Inject Find New button (try to add to header/toolbar)
        if (!document.getElementById('findNewBtn')) {
            const headerEl = document.querySelector('header') || document.querySelector('nav') || document.body.firstElementChild;
            if (headerEl) {
                const btn = document.createElement('button');
                btn.id = 'findNewBtn';
                btn.className = 'px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all fixed top-4 right-4 z-40';
                btn.textContent = '🔍 Find New';
                btn.onclick = () => window.PresenceAuto.findNewContent();
                document.body.appendChild(btn);
            }
        }
        
        console.log('✅ UI elements injected');
    }
    
    // ========================================
    // CORE FUNCTIONALITY
    // ========================================
    
    const PresenceAuto = {
        library: {},
        contentManager: null,
        
        async init() {
            // Get library
            const libraryObj = window[detectedApp.library];
            if (libraryObj) {
                this.library = libraryObj;
                console.log(`✅ Loaded ${Object.keys(this.library).length} items from ${detectedApp.library}`);
            }
            
            // Initialize content manager
            if (window.PresenceContentManager) {
                this.contentManager = new PresenceContentManager(detectedApp.type);
                await this.contentManager.loadLibrary();
                
                // Merge libraries
                this.library = { ...this.library, ...this.contentManager.library };
                console.log(`✅ Total library size: ${Object.keys(this.library).length} items`);
            }
            
            // Inject UI
            injectUI();
            
            // Make globally available
            window.showVariations = this.showVariations.bind(this);
            window.findNewContent = this.findNewContent.bind(this);
        },
        
        showVariations(itemId) {
            const item = this.library[itemId];
            if (!item || !item.variations || item.variations.length === 0) {
                console.log('No variations for', itemId);
                return;
            }
            
            const modal = document.getElementById('variationsModal');
            const title = document.getElementById('variationsTitle');
            const subtitle = document.getElementById('variationsSubtitle');
            const list = document.getElementById('variationsList');
            
            title.textContent = `${item.name} Variations`;
            subtitle.textContent = `${item.variations.length} variations available`;
            
            list.innerHTML = item.variations.map(variation => `
                <div class="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer" onclick="console.log('Selected:', '${variation.id}')">
                    <h4 class="font-semibold mb-1">${variation.name}</h4>
                    ${variation.sanskrit ? `<p class="text-xs text-gray-500 italic mb-2">${variation.sanskrit}</p>` : ''}
                    ${variation.instructions ? `<p class="text-sm text-gray-600">${variation.instructions}</p>` : ''}
                    <div class="flex gap-2 mt-2 text-xs text-gray-500">
                        ${variation.duration ? `<span>⏱ ${Math.floor(variation.duration / 60)}min</span>` : ''}
                        ${variation.intensity ? `<span>📊 Level ${variation.intensity}</span>` : ''}
                        ${variation.difficulty ? `<span>📊 ${variation.difficulty}</span>` : ''}
                    </div>
                </div>
            `).join('');
            
            modal.classList.remove('hidden');
        },
        
        closeVariations() {
            document.getElementById('variationsModal').classList.add('hidden');
        },
        
        async findNewContent() {
            if (!this.contentManager) {
                alert('Content manager not loaded. Please ensure presence-content-manager.js is included.');
                return;
            }
            
            const loading = document.getElementById('loadingOverlay');
            loading.classList.remove('hidden');
            
            try {
                const newItems = [];
                
                for (const query of detectedApp.queries) {
                    const results = await this.contentManager.findNewContent(query, 5);
                    newItems.push(...results);
                }
                
                if (newItems.length > 0) {
                    newItems.forEach(item => {
                        const id = this.contentManager.generateId(item);
                        this.library[id] = item;
                    });
                    
                    this.contentManager.library = this.library;
                    this.contentManager.saveLibrary();
                    
                    this.showNotification(`✨ Found ${newItems.length} new items!`, 'success');
                } else {
                    this.showNotification('No new content found. Try again later.', 'info');
                }
            } catch (error) {
                console.error('Error finding content:', error);
                this.showNotification('Error finding new content.', 'error');
            } finally {
                loading.classList.add('hidden');
            }
        },
        
        showNotification(message, type = 'info') {
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
        },
        
        // Helper to add variations button to any element
        addVariationsButton(itemId, targetElement) {
            const item = this.library[itemId];
            if (!item || !item.variations || item.variations.length === 0) return;
            
            const btn = document.createElement('button');
            btn.className = 'text-[10px] bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-full hover:bg-emerald-500/20 transition-all font-semibold ml-2';
            btn.textContent = `${item.variations.length} Variations`;
            btn.onclick = (e) => {
                e.stopPropagation();
                this.showVariations(itemId);
            };
            
            targetElement.appendChild(btn);
        }
    };
    
    // Make globally available
    window.PresenceAuto = PresenceAuto;
    
    // Auto-initialize when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => PresenceAuto.init());
    } else {
        PresenceAuto.init();
    }
    
    console.log('✅ Presence Auto-Integration loaded');
    
})();
