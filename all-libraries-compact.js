/**
 * All Remaining Libraries - Compact Format
 * Expand these following the same pattern as meditation/sleep libraries
 */

// GUIDED SESSIONS LIBRARY
const GUIDED_LIBRARY = {
  morning_energy: { id: 'morning_energy', name: 'Morning Energy Boost', category: 'Morning', duration: 600, script: 'Wake up energized...', variations: [
    { id: 'quick_morning', name: '5-Min Morning', duration: 300 },
    { id: 'extended_morning', name: '15-Min Morning Ritual', duration: 900 }
  ]},
  stress_relief: { id: 'stress_relief', name: 'Stress Relief', category: 'Stress', duration: 900, variations: [
    { id: 'quick_stress', name: 'Quick Stress Relief', duration: 300 },
    { id: 'deep_stress', name: 'Deep Stress Release', duration: 1800 }
  ]},
  // Add 50+ more guided sessions
};

// BODY SCAN LIBRARY
const BODYSCAN_LIBRARY = {
  progressive_scan: { id: 'progressive_scan', name: 'Progressive Body Scan', duration: 900, bodyParts: ['feet', 'legs', 'torso', 'arms', 'head'], variations: [
    { id: 'quick_scan', name: 'Quick 5-Min Scan', duration: 300 },
    { id: 'deep_scan', name: 'Deep 30-Min Scan', duration: 1800 }
  ]},
  // Add 30+ more scans
};

// MOVEMENT LIBRARY
const MOVEMENT_LIBRARY = {
  desk_stretch: { id: 'desk_stretch', name: '5-Minute Desk Stretch', category: 'Office', duration: 300, movements: ['neck-rolls', 'shoulder-shrugs', 'spinal-twists'], variations: [
    { id: 'standing_desk', name: 'Standing Desk Version', duration: 300 },
    { id: 'chair_only', name: 'Seated Only', duration: 300 }
  ]},
  morning_flow: { id: 'morning_flow', name: 'Morning Movement Flow', category: 'Morning', duration: 600, variations: [
    { id: 'gentle_morning', name: 'Gentle Morning', duration: 300 },
    { id: 'energizing_morning', name: 'Energizing Morning', duration: 900 }
  ]},
  // Add 100+ more movements
};

// AMBIENT SOUNDS LIBRARY
const AMBIENT_LIBRARY = {
  ocean_waves: { id: 'ocean_waves', name: 'Ocean Waves', category: 'Nature', loops: true, layers: ['waves', 'seagulls'], variations: [
    { id: 'gentle_waves', name: 'Gentle Waves', intensity: 'low' },
    { id: 'storm_ocean', name: 'Ocean Storm', intensity: 'high' }
  ]},
  rain: { id: 'rain', name: 'Rain Sounds', category: 'Nature', variations: [
    { id: 'light_rain', name: 'Light Rain' },
    { id: 'heavy_rain', name: 'Heavy Rain' },
    { id: 'rain_on_tin', name: 'Rain on Tin Roof' }
  ]},
  // Add 200+ more soundscapes
};

// ALIGNMENT LIBRARY
const ALIGNMENT_LIBRARY = {
  posture_check: { id: 'posture_check', name: 'Standing Posture Check', bodyPart: 'Full Body', checkpoints: ['feet', 'knees', 'hips', 'spine', 'shoulders', 'head'], variations: [
    { id: 'sitting_posture', name: 'Sitting Posture' },
    { id: 'walking_posture', name: 'Walking Posture' }
  ]},
  // Add 50+ more alignment guides
};

// RITUALS LIBRARY
const RITUALS_LIBRARY = {
  morning_ritual: { id: 'morning_ritual', name: 'Energizing Morning Ritual', steps: ['wake', 'hydrate', 'stretch', 'breathe', 'meditate'], duration: 1200, variations: [
    { id: 'quick_morning', name: '5-Min Morning', duration: 300 },
    { id: 'full_morning', name: 'Full Morning Ritual', duration: 2400 }
  ]},
  // Add 30+ more rituals
};

// JOURNAL PROMPTS LIBRARY
const JOURNAL_LIBRARY = {
  gratitude: { id: 'gratitude', name: 'Daily Gratitude', category: 'Gratitude', prompt: 'What are three things you\'re grateful for today?', variations: [
    { id: 'morning_gratitude', name: 'Morning Gratitude' },
    { id: 'evening_gratitude', name: 'Evening Gratitude' }
  ]},
  reflection: { id: 'reflection', name: 'Daily Reflection', category: 'Reflection', prompt: 'What did you learn today?', variations: [
    { id: 'deep_reflection', name: 'Deep Reflection' },
    { id: 'quick_reflection', name: 'Quick Check-in' }
  ]},
  // Add 100+ more prompts
};

// Export all
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    GUIDED_LIBRARY,
    BODYSCAN_LIBRARY,
    MOVEMENT_LIBRARY,
    AMBIENT_LIBRARY,
    ALIGNMENT_LIBRARY,
    RITUALS_LIBRARY,
    JOURNAL_LIBRARY
  };
}
