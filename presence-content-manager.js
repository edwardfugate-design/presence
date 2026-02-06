/**
 * Presence Suite - Universal Content Management System
 * 
 * Features:
 * - Massive content libraries for all apps
 * - Variations support for each item
 * - Web search API integration
 * - RAG (Retrieval-Augmented Generation)
 * - Quality control ("gotcha" detection)
 * - Fresh content discovery
 * - Sub-categories and filtering
 */

class PresenceContentManager {
    constructor(appType) {
        this.appType = appType;
        this.library = {};
        this.cache = new Map();
        this.lastFetch = null;
        this.qualityThreshold = 0.7; // Minimum quality score
    }

    // ===== CORE LIBRARY MANAGEMENT =====
    
    /**
     * Load content library from localStorage or default
     */
    async loadLibrary() {
        const cached = localStorage.getItem(`presence_${this.appType}_library`);
        if (cached) {
            this.library = JSON.parse(cached);
            this.lastFetch = new Date(localStorage.getItem(`presence_${this.appType}_library_date`) || Date.now());
        } else {
            this.library = this.getDefaultLibrary();
            this.saveLibrary();
        }
        return this.library;
    }

    /**
     * Save library to localStorage
     */
    saveLibrary() {
        localStorage.setItem(`presence_${this.appType}_library`, JSON.stringify(this.library));
        localStorage.setItem(`presence_${this.appType}_library_date`, new Date().toISOString());
    }

    /**
     * Get default library based on app type
     */
    getDefaultLibrary() {
        // Each app will have its own default library
        // This is overridden by specific app implementations
        return {};
    }

    // ===== WEB SEARCH INTEGRATION =====
    
    /**
     * Find new content via web search
     * @param {string} query - Search query
     * @param {number} limit - Max results
     */
    async findNewContent(query, limit = 10) {
        try {
            // This would integrate with your web_search tool
            console.log(`🔍 Searching for: ${query}`);
            
            // Placeholder for web search results
            // In production, this would call the actual web_search API
            const results = await this.mockWebSearch(query, limit);
            
            // Process results through RAG
            const processedContent = await this.processWithRAG(results);
            
            // Apply quality control
            const qualityContent = this.applyQualityControl(processedContent);
            
            return qualityContent;
            
        } catch (error) {
            console.error('Error finding new content:', error);
            return [];
        }
    }

    /**
     * Mock web search (replace with actual API call)
     */
    async mockWebSearch(query, limit) {
        // This is a placeholder - replace with actual web_search tool
        return [
            { title: `${query} Example 1`, content: 'Sample content...', source: 'example.com' },
            { title: `${query} Example 2`, content: 'Sample content...', source: 'example.org' }
        ];
    }

    // ===== RAG (RETRIEVAL-AUGMENTED GENERATION) =====
    
    /**
     * Process search results with RAG to extract structured data
     */
    async processWithRAG(results) {
        const processed = [];
        
        for (const result of results) {
            try {
                // Extract key information using pattern matching and NLP
                const structured = this.extractStructuredData(result);
                
                // Enhance with related content
                const enhanced = await this.enhanceWithContext(structured);
                
                processed.push(enhanced);
            } catch (error) {
                console.warn('Failed to process result:', error);
            }
        }
        
        return processed;
    }

    /**
     * Extract structured data from raw search result
     */
    extractStructuredData(result) {
        // App-specific extraction logic
        // Override in subclasses
        return {
            name: result.title,
            description: result.content,
            source: result.source,
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Enhance content with contextual information
     */
    async enhanceWithContext(data) {
        // Add related items, variations, metadata
        return {
            ...data,
            variations: this.findVariations(data),
            tags: this.extractTags(data),
            difficulty: this.assessDifficulty(data),
            duration: this.estimateDuration(data)
        };
    }

    // ===== QUALITY CONTROL =====
    
    /**
     * Apply quality control checks to content
     * Filters out low-quality or inappropriate content
     */
    applyQualityControl(content) {
        return content.filter(item => {
            const qualityScore = this.calculateQualityScore(item);
            const passesGotchaChecks = this.runGotchaChecks(item);
            
            return qualityScore >= this.qualityThreshold && passesGotchaChecks;
        });
    }

    /**
     * Calculate quality score (0-1)
     */
    calculateQualityScore(item) {
        let score = 0;
        
        // Check completeness
        if (item.name && item.name.length > 3) score += 0.2;
        if (item.description && item.description.length > 20) score += 0.2;
        if (item.source && item.source.length > 0) score += 0.1;
        
        // Check for required fields (app-specific)
        if (this.hasRequiredFields(item)) score += 0.3;
        
        // Check content quality
        if (!this.containsSpam(item)) score += 0.2;
        
        return score;
    }

    /**
     * "Gotcha" checks - detect problematic content
     */
    runGotchaChecks(item) {
        // Check for spam indicators
        if (this.containsSpam(item)) return false;
        
        // Check for duplicate content
        if (this.isDuplicate(item)) return false;
        
        // Check for inappropriate content
        if (this.isInappropriate(item)) return false;
        
        // Check for missing essential fields
        if (!this.hasRequiredFields(item)) return false;
        
        return true;
    }

    /**
     * Detect spam content
     */
    containsSpam(item) {
        const spamKeywords = ['click here', 'buy now', 'limited offer', 'act now'];
        const text = JSON.stringify(item).toLowerCase();
        return spamKeywords.some(keyword => text.includes(keyword));
    }

    /**
     * Check for duplicate content
     */
    isDuplicate(item) {
        const existing = Object.values(this.library);
        return existing.some(existingItem => 
            this.similarity(existingItem.name, item.name) > 0.9
        );
    }

    /**
     * Calculate text similarity (simple version)
     */
    similarity(str1, str2) {
        if (!str1 || !str2) return 0;
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        if (longer.length === 0) return 1.0;
        const editDistance = this.levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }

    /**
     * Levenshtein distance for similarity check
     */
    levenshteinDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[str2.length][str1.length];
    }

    /**
     * Check for inappropriate content
     */
    isInappropriate(item) {
        // Basic content filtering
        // In production, use more sophisticated filtering
        return false;
    }

    /**
     * Check if item has required fields
     */
    hasRequiredFields(item) {
        // Override in subclasses for app-specific requirements
        return item.name && item.name.length > 0;
    }

    // ===== VARIATIONS SUPPORT =====
    
    /**
     * Find variations for an item
     */
    findVariations(item) {
        // Auto-detect variations based on naming patterns
        const variations = [];
        const baseName = item.name;
        
        // Search for common variation patterns
        const patterns = [
            `${baseName} (Beginner)`,
            `${baseName} (Advanced)`,
            `Modified ${baseName}`,
            `${baseName} Variation`,
            `Extended ${baseName}`
        ];
        
        // This would search the library or web for matches
        return variations;
    }

    /**
     * Extract tags from content
     */
    extractTags(item) {
        // Simple tag extraction from description
        const tags = [];
        const text = (item.description || '').toLowerCase();
        
        // Common tags based on keywords
        const tagMap = {
            'beginner': 'beginner-friendly',
            'advanced': 'advanced',
            'strength': 'strength',
            'flexibility': 'flexibility',
            'balance': 'balance',
            'relaxation': 'relaxation',
            'energy': 'energizing'
        };
        
        Object.entries(tagMap).forEach(([keyword, tag]) => {
            if (text.includes(keyword)) tags.push(tag);
        });
        
        return tags;
    }

    /**
     * Assess difficulty level
     */
    assessDifficulty(item) {
        const text = JSON.stringify(item).toLowerCase();
        
        if (text.includes('beginner') || text.includes('easy') || text.includes('gentle')) {
            return 'Beginner';
        } else if (text.includes('advanced') || text.includes('challenging') || text.includes('difficult')) {
            return 'Advanced';
        } else {
            return 'Intermediate';
        }
    }

    /**
     * Estimate duration
     */
    estimateDuration(item) {
        // Default durations based on type
        // Override in subclasses
        return 30; // seconds
    }

    // ===== FRESHNESS & UPDATES =====
    
    /**
     * Check if library needs refresh
     */
    needsRefresh() {
        if (!this.lastFetch) return true;
        
        const daysSinceUpdate = (Date.now() - this.lastFetch) / (1000 * 60 * 60 * 24);
        return daysSinceUpdate > 7; // Refresh weekly
    }

    /**
     * Refresh library with new content
     */
    async refreshLibrary() {
        console.log('🔄 Refreshing content library...');
        
        const searches = this.getRefreshQueries();
        const newContent = [];
        
        for (const query of searches) {
            const results = await this.findNewContent(query, 5);
            newContent.push(...results);
        }
        
        // Merge new content with existing
        this.mergeContent(newContent);
        this.saveLibrary();
        
        console.log(`✅ Library refreshed with ${newContent.length} new items`);
    }

    /**
     * Get search queries for refresh
     */
    getRefreshQueries() {
        // Override in subclasses
        return [];
    }

    /**
     * Merge new content into library
     */
    mergeContent(newContent) {
        newContent.forEach(item => {
            const id = this.generateId(item);
            if (!this.library[id]) {
                this.library[id] = item;
            }
        });
    }

    /**
     * Generate unique ID for content
     */
    generateId(item) {
        return item.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_|_$/g, '');
    }

    // ===== SEARCH & FILTER =====
    
    /**
     * Search library
     */
    search(query, filters = {}) {
        const items = Object.values(this.library);
        let results = items;
        
        // Text search
        if (query) {
            const lowerQuery = query.toLowerCase();
            results = results.filter(item => 
                item.name?.toLowerCase().includes(lowerQuery) ||
                item.description?.toLowerCase().includes(lowerQuery) ||
                item.tags?.some(tag => tag.includes(lowerQuery))
            );
        }
        
        // Apply filters
        if (filters.difficulty) {
            results = results.filter(item => item.difficulty === filters.difficulty);
        }
        
        if (filters.category) {
            results = results.filter(item => item.category === filters.category);
        }
        
        if (filters.tags) {
            results = results.filter(item => 
                filters.tags.some(tag => item.tags?.includes(tag))
            );
        }
        
        return results;
    }

    /**
     * Get categories
     */
    getCategories() {
        const categories = new Set();
        Object.values(this.library).forEach(item => {
            if (item.category) categories.add(item.category);
        });
        return Array.from(categories);
    }

    /**
     * Get tags
     */
    getAllTags() {
        const tags = new Set();
        Object.values(this.library).forEach(item => {
            if (item.tags) item.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }
}

// Make available globally
if (typeof window !== 'undefined') {
    window.PresenceContentManager = PresenceContentManager;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PresenceContentManager;
}
