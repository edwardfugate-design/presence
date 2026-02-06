/**
 * Presence Suite - Monitoring Utility
 * Shared functions for practice tracking across all modules
 */

const PresenceMonitoring = {
    MONITORING_KEY: 'presence_monitoring_enabled',
    PRACTICE_MINUTES_KEY: 'totalPracticeMinutes',
    
    /**
     * Check if monitoring is enabled
     * @returns {boolean} - True if monitoring is enabled (default: true)
     */
    isEnabled: function() {
        const enabled = localStorage.getItem(this.MONITORING_KEY);
        return enabled === null || enabled === 'true';
    },
    
    /**
     * Toggle monitoring on/off
     * @returns {boolean} - New state
     */
    toggle: function() {
        const newState = !this.isEnabled();
        localStorage.setItem(this.MONITORING_KEY, newState);
        return newState;
    },
    
    /**
     * Record practice time (only if monitoring is enabled)
     * @param {number} minutes - Minutes to add to total
     * @returns {number} - New total minutes (or current total if monitoring disabled)
     */
    recordPractice: function(minutes) {
        if (!this.isEnabled()) {
            console.log('Practice tracking disabled - not recording');
            return this.getTotalMinutes();
        }
        
        const current = this.getTotalMinutes();
        const newTotal = current + minutes;
        localStorage.setItem(this.PRACTICE_MINUTES_KEY, newTotal);
        console.log(`Recorded ${minutes} minutes. Total: ${newTotal.toFixed(1)} minutes`);
        return newTotal;
    },
    
    /**
     * Get total practice minutes
     * @returns {number} - Total minutes practiced
     */
    getTotalMinutes: function() {
        return parseFloat(localStorage.getItem(this.PRACTICE_MINUTES_KEY) || '0');
    },
    
    /**
     * Get total practice hours
     * @returns {number} - Total hours practiced
     */
    getTotalHours: function() {
        return this.getTotalMinutes() / 60;
    },
    
    /**
     * Record a session entry (only if monitoring is enabled)
     * @param {string} module - Module name (e.g., 'meditation', 'yoga')
     * @param {number} minutes - Session duration in minutes
     * @param {object} metadata - Additional session data
     */
    recordSession: function(module, minutes, metadata = {}) {
        if (!this.isEnabled()) {
            console.log('Practice tracking disabled - not recording session');
            return;
        }
        
        const sessions = JSON.parse(localStorage.getItem('presence_sessions') || '[]');
        sessions.push({
            module,
            minutes,
            timestamp: new Date().toISOString(),
            ...metadata
        });
        
        // Keep only last 1000 sessions to prevent storage bloat
        if (sessions.length > 1000) {
            sessions.splice(0, sessions.length - 1000);
        }
        
        localStorage.setItem('presence_sessions', JSON.stringify(sessions));
        this.recordPractice(minutes);
    },
    
    /**
     * Get user's monitoring preference status message
     * @returns {string} - Status message for display
     */
    getStatusMessage: function() {
        return this.isEnabled() 
            ? 'Practice tracking enabled' 
            : 'Practice tracking disabled';
    },
    
    /**
     * Show a notification about monitoring status (for first-time users)
     */
    showMonitoringInfo: function() {
        const hasSeenInfo = localStorage.getItem('presence_monitoring_info_seen');
        if (!hasSeenInfo) {
            console.log('💡 Practice tracking is enabled by default. You can disable it on the home page.');
            localStorage.setItem('presence_monitoring_info_seen', 'true');
        }
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.PresenceMonitoring = PresenceMonitoring;
}
