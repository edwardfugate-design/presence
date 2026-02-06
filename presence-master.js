/**
 * Presence Master Logic - Combined Brain
 * Handles: Content Management, Practice Monitoring, and Hub Integration
 */

// --- 1. MONITORING & STATS ---
const PresenceMonitoring = {
    getStats: () => {
        return {
            totalMinutes: parseInt(localStorage.getItem('totalPracticeMinutes') || '0'),
            enabled: localStorage.getItem('monitoringEnabled') !== 'false'
        };
    },
    addMinutes: (mins) => {
        const stats = PresenceMonitoring.getStats();
        localStorage.setItem('totalPracticeMinutes', stats.totalMinutes + mins);
        console.log(`Presence: Added ${mins}m. Total: ${stats.totalMinutes + mins}m`);
    }
};

// Global helper for the Hub
window.isMonitoringEnabled = () => PresenceMonitoring.getStats().enabled;

// --- 2. HUB INTEGRATION (Aura & Signals) ---
const PresenceIntegrator = {
    getSignals: () => {
        const defaults = { still: false, flow: false, ritual: false };
        return JSON.parse(localStorage.getItem('presence_signals') || JSON.stringify(defaults));
    },
    setSignal: (key, value) => {
        const signals = PresenceIntegrator.getSignals();
        signals[key] = value;
        localStorage.setItem('presence_signals', JSON.stringify(signals));
    }
};

// --- 3. CONTENT MANAGER (App Initialization) ---
// This part helps the Meditation/Breathwork pages load their lists
window.initPresenceApp = (config) => {
    console.log("Presence: Initializing App...");
    const stats = PresenceMonitoring.getStats();
    
    // Update local UI if elements exist
    const totalHoursEl = document.getElementById('totalHours');
    if (totalHoursEl) {
        totalHoursEl.textContent = (stats.totalMinutes / 60).toFixed(1);
    }

    // Auto-setup for Meditation Library
    if (typeof MEDITATION_LIBRARY !== 'undefined' && config.type === 'meditation') {
        const container = document.getElementById('techniqueGrid');
        if (container) {
            Object.values(MEDITATION_LIBRARY).forEach(item => {
                const card = document.createElement('div');
                card.className = "p-6 rounded-2xl bg-white/50 border border-white/20 cursor-pointer hover:bg-white/80 transition-all";
                card.innerHTML = `<h3 class="text-lg font-medium">${item.name}</h3><p class="text-sm text-gray-500">${item.duration/60} mins • ${item.difficulty}</p>`;
                card.onclick = () => window.startPractice ? window.startPractice(item.id) : alert("App starting...");
                container.appendChild(card);
            });
        }
    }
};

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    const bodyId = document.body.id;
    // Basic setup for all pages
    console.log("Presence Brain Online.");
});