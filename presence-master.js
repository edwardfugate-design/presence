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

});// --- PREMIER VOICE ENGINE ---
const PresenceVoice = {
    getNaturalVoice: () => {
        const voices = window.speechSynthesis.getVoices();
        
        // Priority list of "human-sounding" voices
        const premiumVoices = [
            'Samantha', 'Daniel', 'Karen', 'Moira', 
            'Google US English', 'Apple Color'
        ];

        // Find the first match from our premium list
        for (let name of premiumVoices) {
            const found = voices.find(v => v.name.includes(name));
            if (found) return found;
        }
        return voices[0]; // Fallback to default if no premium found
    },

    speak: (text) => {
        // Cancel any current talking so it doesn't overlap
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = PresenceVoice.getNaturalVoice();
        utterance.pitch = 0.9; // Slightly lower pitch for a "grounded" feel
        utterance.rate = 0.85; // Slightly slower for meditative pacing
        
        window.speechSynthesis.speak(utterance);
    }
};

// Make it global so your apps can use it
window.PresenceVoice = PresenceVoice;

// Essential: Voices load asynchronously, so we "prime" them here
window.speechSynthesis.onvoiceschanged = () => PresenceVoice.getNaturalVoice();
// --- AMBIENT SOUND ENGINE ---
const PresenceSound = {
    audio: null,
    
    play: (type) => {
        if (PresenceSound.audio) PresenceSound.audio.pause();
        
        // Using high-quality public domain sound links
        const sounds = {
            'rain': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder: Replace with a clean loop
            'brown_noise': 'https://actions.google.com/sounds/v1/weather/rain_on_roof.ogg',
            'singing_bowl': 'https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg' // Placeholder
        };

        PresenceSound.audio = new Audio(sounds[type]);
        PresenceSound.audio.loop = true;
        PresenceSound.audio.volume = 0.2; // Keep it subtle
        PresenceSound.audio.play();
    },

    stop: () => {
        if (PresenceSound.audio) PresenceSound.audio.pause();
    }
};

window.PresenceSound = PresenceSound;

