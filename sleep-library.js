/**
 * Presence Sleep - Complete Sleep Routines Library with Variations
 */

const SLEEP_LIBRARY = {
  // ===== BEDTIME ROUTINES =====
  classic_bedtime: {
    id: 'classic_bedtime',
    name: 'Classic Bedtime Routine',
    category: 'Routines',
    difficulty: 'Beginner',
    duration: 1200,
    phases: ['wind-down', 'relaxation', 'drift'],
    soundscape: 'rain',
    benefits: ['Better Sleep', 'Relaxation', 'Consistency'],
    instructions: '20-minute routine to prepare body and mind for sleep. Progressive relaxation followed by guided imagery.',
    variations: [
      { id: 'quick_sleep', name: 'Quick Sleep (5 min)', duration: 300, phases: ['rapid-wind-down', 'drift'] },
      { id: 'deep_sleep', name: 'Deep Sleep Protocol (30 min)', duration: 1800, phases: ['extended-wind-down', 'deep-relaxation', 'drift'] },
      { id: 'insomnia_protocol', name: 'Insomnia Protocol', duration: 1800, phases: ['anxiety-release', 'body-scan', 'drift'] },
      { id: 'weekend_routine', name: 'Weekend Routine', duration: 2400, phases: ['bath', 'meditation', 'drift'] }
    ]
  },

  power_nap: {
    id: 'power_nap',
    name: 'Power Nap',
    category: 'Naps',
    difficulty: 'Beginner',
    duration: 1200,
    phases: ['quick-relax', 'light-sleep'],
    benefits: ['Energy Boost', 'Mental Clarity', 'Refreshment'],
    instructions: '20-minute power nap. Quick relaxation followed by light sleep cycle.',
    variations: [
      { id: 'coffee_nap', name: 'Coffee Nap', duration: 1200, instructions: 'Drink coffee then nap for 20 min' },
      { id: 'micro_nap', name: 'Micro Nap (5 min)', duration: 300, phases: ['immediate-relax'] },
      { id: 'nasa_nap', name: 'NASA Nap (26 min)', duration: 1560, phases: ['extended-light-sleep'] },
      { id: 'meditation_nap', name: 'Meditation Nap', duration: 900, phases: ['meditation', 'light-sleep'] }
    ]
  },

  // ===== SLEEP STORIES =====
  forest_journey: {
    id: 'forest_journey',
    name: 'Forest Journey',
    category: 'Sleep Stories',
    difficulty: 'Beginner',
    duration: 1800,
    narrator: 'calm',
    setting: 'forest',
    benefits: ['Deep Sleep', 'Escapism', 'Imagination'],
    instructions: 'Guided story through peaceful forest. Detailed sensory descriptions to occupy conscious mind.',
    variations: [
      { id: 'mountain_forest', name: 'Mountain Forest Walk', duration: 1800, setting: 'mountain-forest' },
      { id: 'enchanted_forest', name: 'Enchanted Forest', duration: 2400, setting: 'magical-forest' },
      { id: 'autumn_forest', name: 'Autumn Forest', duration: 1800, setting: 'autumn-forest' },
      { id: 'forest_stream', name: 'Forest Stream Journey', duration: 2100, setting: 'forest-stream' }
    ]
  },

  ocean_voyage: {
    id: 'ocean_voyage',
    name: 'Ocean Voyage',
    category: 'Sleep Stories',
    difficulty: 'Beginner',
    duration: 2100,
    narrator: 'soothing',
    setting: 'ocean',
    benefits: ['Deep Sleep', 'Peace', 'Calm'],
    instructions: 'Sail across calm ocean. Waves, stars, and gentle rocking motion described in detail.',
    variations: [
      { id: 'beach_walk', name: 'Beach Walk at Sunset', duration: 1800, setting: 'beach' },
      { id: 'underwater_garden', name: 'Underwater Garden', duration: 2400, setting: 'underwater' },
      { id: 'island_paradise', name: 'Island Paradise', duration: 2100, setting: 'tropical-island' },
      { id: 'lighthouse_keeper', name: 'The Lighthouse Keeper', duration: 2700, setting: 'lighthouse' }
    ]
  },

  // ===== SOUNDSCAPES =====
  rain_sounds: {
    id: 'rain_sounds',
    name: 'Rain Sounds',
    category: 'Soundscapes',
    difficulty: 'Beginner',
    duration: 3600,
    soundType: 'nature',
    benefits: ['White Noise', 'Masking', 'Relaxation'],
    instructions: 'Gentle rain sounds to mask environmental noise and promote sleep.',
    variations: [
      { id: 'light_rain', name: 'Light Rain', duration: 3600, intensity: 'light' },
      { id: 'heavy_rain', name: 'Heavy Rain', duration: 3600, intensity: 'heavy' },
      { id: 'rain_on_tent', name: 'Rain on Tent', duration: 3600, setting: 'camping' },
      { id: 'thunderstorm', name: 'Distant Thunderstorm', duration: 3600, elements: ['rain', 'thunder'] },
      { id: 'rain_forest', name: 'Rainforest', duration: 3600, setting: 'tropical' }
    ]
  },

  ocean_waves: {
    id: 'ocean_waves',
    name: 'Ocean Waves',
    category: 'Soundscapes',
    difficulty: 'Beginner',
    duration: 3600,
    soundType: 'nature',
    benefits: ['Rhythmic', 'Calming', 'Natural'],
    instructions: 'Gentle ocean waves. Natural rhythm promotes relaxation and sleep.',
    variations: [
      { id: 'gentle_waves', name: 'Gentle Waves', duration: 3600, intensity: 'calm' },
      { id: 'beach_ambience', name: 'Beach Ambience', duration: 3600, elements: ['waves', 'seagulls', 'wind'] },
      { id: 'ocean_storm', name: 'Ocean Storm (distant)', duration: 3600, intensity: 'moderate' },
      { id: 'underwater_sounds', name: 'Underwater Sounds', duration: 3600, perspective: 'underwater' }
    ]
  },

  white_noise: {
    id: 'white_noise',
    name: 'White Noise',
    category: 'Soundscapes',
    difficulty: 'Beginner',
    duration: 3600,
    soundType: 'synthetic',
    benefits: ['Masking', 'Consistent', 'Effective'],
    instructions: 'Pure white noise. Masks disruptive sounds effectively.',
    variations: [
      { id: 'pink_noise', name: 'Pink Noise', duration: 3600, type: 'pink' },
      { id: 'brown_noise', name: 'Brown Noise', duration: 3600, type: 'brown' },
      { id: 'fan_sounds', name: 'Fan Sounds', duration: 3600, type: 'fan' },
      { id: 'air_conditioner', name: 'Air Conditioner', duration: 3600, type: 'ac' }
    ]
  },

  // ===== BODY SCAN FOR SLEEP =====
  progressive_relaxation_sleep: {
    id: 'progressive_relaxation_sleep',
    name: 'Progressive Muscle Relaxation',
    category: 'Body Techniques',
    difficulty: 'Beginner',
    duration: 900,
    technique: 'progressive-relaxation',
    benefits: ['Physical Relaxation', 'Tension Release', 'Sleep Prep'],
    instructions: 'Tense and release each muscle group. Promotes deep physical relaxation.',
    variations: [
      { id: 'quick_pmr', name: 'Quick PMR (5 min)', duration: 300, groups: 'major' },
      { id: 'detailed_pmr', name: 'Detailed PMR (20 min)', duration: 1200, groups: 'all' },
      { id: 'passive_relaxation', name: 'Passive Relaxation', duration: 900, technique: 'passive' },
      { id: 'autogenic_training', name: 'Autogenic Training', duration: 1200, technique: 'autogenic' }
    ]
  },

  sleep_body_scan: {
    id: 'sleep_body_scan',
    name: 'Sleep Body Scan',
    category: 'Body Techniques',
    difficulty: 'Beginner',
    duration: 1200,
    technique: 'body-scan',
    benefits: ['Awareness', 'Relaxation', 'Mind Quieting'],
    instructions: 'Systematic attention through body. Releases tension and quiets mind.',
    variations: [
      { id: 'brief_body_scan', name: 'Brief Body Scan (5 min)', duration: 300 },
      { id: 'detailed_body_scan', name: 'Detailed Body Scan (30 min)', duration: 1800 },
      { id: 'body_scan_with_breath', name: 'Body Scan with Breath', duration: 1500 },
      { id: 'healing_body_scan', name: 'Healing Body Scan', duration: 1800 }
    ]
  },

  // ===== BREATHING FOR SLEEP =====
  sleep_breathing: {
    id: 'sleep_breathing',
    name: '4-7-8 Sleep Breathing',
    category: 'Breathing',
    difficulty: 'Beginner',
    duration: 300,
    pattern: [4, 7, 8, 0],
    benefits: ['Calming', 'Nervous System', 'Fast Acting'],
    instructions: 'Breathe in 4, hold 7, out 8. Repeat 4-8 cycles. Calms nervous system rapidly.',
    variations: [
      { id: 'extended_478', name: 'Extended 4-7-8', duration: 600, cycles: 16 },
      { id: 'box_breathing_sleep', name: 'Box Breathing for Sleep', duration: 300, pattern: [4,4,4,4] },
      { id: 'coherent_breathing_sleep', name: 'Coherent Breathing', duration: 600, pattern: [5,0,5,0] },
      { id: 'alternate_nostril_sleep', name: 'Alternate Nostril', duration: 480 }
    ]
  },

  // ===== MEDITATION FOR SLEEP =====
  sleep_meditation: {
    id: 'sleep_meditation',
    name: 'Sleep Meditation',
    category: 'Meditation',
    difficulty: 'Beginner',
    duration: 1200,
    technique: 'guided',
    benefits: ['Mental Quieting', 'Letting Go', 'Peace'],
    instructions: 'Guided meditation designed to transition into sleep. Focus on releasing the day.',
    variations: [
      { id: 'gratitude_sleep', name: 'Gratitude for Sleep', duration: 900 },
      { id: 'letting_go', name: 'Letting Go Meditation', duration: 1200 },
      { id: 'body_of_light', name: 'Body of Light', duration: 1500 },
      { id: 'yoga_nidra_sleep', name: 'Yoga Nidra for Sleep', duration: 1800 }
    ]
  },

  // ===== INSOMNIA PROTOCOLS =====
  cognitive_shuffle: {
    id: 'cognitive_shuffle',
    name: 'Cognitive Shuffle',
    category: 'Insomnia Help',
    difficulty: 'Beginner',
    duration: 900,
    technique: 'cognitive',
    benefits: ['Mind Occupation', 'Thought Interruption', 'Sleep Onset'],
    instructions: 'Visualize random, non-threatening objects. Occupies mind without engagement.',
    variations: [
      { id: 'alphabet_game', name: 'Alphabet Visualization', duration: 600 },
      { id: 'counting_objects', name: 'Counting Objects', duration: 900 },
      { id: 'scene_building', name: 'Scene Building', duration: 1200 },
      { id: 'story_generation', name: 'Random Story Generation', duration: 900 }
    ]
  },

  paradoxical_intention: {
    id: 'paradoxical_intention',
    name: 'Paradoxical Intention',
    category: 'Insomnia Help',
    difficulty: 'Intermediate',
    duration: 600,
    technique: 'psychological',
    benefits: ['Anxiety Reduction', 'Reverse Psychology', 'Control'],
    instructions: 'Try to stay awake. Reduces performance anxiety around sleep.',
    variations: [
      { id: 'gentle_paradox', name: 'Gentle Paradoxical Intention', duration: 600 },
      { id: 'mindful_wakefulness', name: 'Mindful Wakefulness', duration: 900 },
      { id: 'acceptance_practice', name: 'Acceptance of Wakefulness', duration: 600 }
    ]
  },

  // ===== VISUALIZATION FOR SLEEP =====
  peaceful_place: {
    id: 'peaceful_place',
    name: 'Peaceful Place Visualization',
    category: 'Visualization',
    difficulty: 'Beginner',
    duration: 900,
    technique: 'guided-imagery',
    benefits: ['Mental Escape', 'Relaxation', 'Positive Focus'],
    instructions: 'Visualize your perfect peaceful place. Engage all senses in detail.',
    variations: [
      { id: 'beach_visualization', name: 'Beach Sanctuary', duration: 900 },
      { id: 'mountain_retreat', name: 'Mountain Retreat', duration: 1200 },
      { id: 'forest_clearing', name: 'Forest Clearing', duration: 900 },
      { id: 'cozy_cabin', name: 'Cozy Cabin', duration: 1200 }
    ]
  },

  countdown_visualization: {
    id: 'countdown_visualization',
    name: 'Countdown Visualization',
    category: 'Visualization',
    difficulty: 'Beginner',
    duration: 600,
    technique: 'counting',
    benefits: ['Mind Occupation', 'Relaxation', 'Hypnotic'],
    instructions: 'Count down from 100. With each number, visualize descending stairs into deeper relaxation.',
    variations: [
      { id: 'staircase_descent', name: 'Staircase Descent', duration: 600 },
      { id: 'elevator_down', name: 'Elevator Descent', duration: 480 },
      { id: 'cloud_floating', name: 'Floating Down on Cloud', duration: 720 },
      { id: 'number_melting', name: 'Numbers Melting Away', duration: 600 }
    ]
  },

  // ===== HYPNOTIC TECHNIQUES =====
  sleep_hypnosis: {
    id: 'sleep_hypnosis',
    name: 'Sleep Hypnosis',
    category: 'Hypnotic',
    difficulty: 'Intermediate',
    duration: 1800,
    technique: 'hypnotic-induction',
    benefits: ['Deep Relaxation', 'Suggestibility', 'Rapid Sleep'],
    instructions: 'Hypnotic induction specifically for sleep. Progressive relaxation with sleep suggestions.',
    variations: [
      { id: 'progressive_hypnosis', name: 'Progressive Hypnotic Induction', duration: 2100 },
      { id: 'rapid_hypnosis', name: 'Rapid Sleep Hypnosis', duration: 1200 },
      { id: 'ericksonian_hypnosis', name: 'Ericksonian Sleep Hypnosis', duration: 2400 },
      { id: 'self_hypnosis', name: 'Self-Hypnosis for Sleep', duration: 1500 }
    ]
  },

  // ===== MUSIC & FREQUENCIES =====
  delta_waves: {
    id: 'delta_waves',
    name: 'Delta Wave Music',
    category: 'Frequencies',
    difficulty: 'Beginner',
    duration: 3600,
    frequency: '0.5-4 Hz',
    benefits: ['Deep Sleep', 'Brain Entrainment', 'Restorative'],
    instructions: 'Music embedded with delta frequencies. Encourages deep sleep brainwave state.',
    variations: [
      { id: 'pure_delta', name: 'Pure Delta Tones', duration: 3600 },
      { id: 'delta_with_rain', name: 'Delta Waves + Rain', duration: 3600 },
      { id: 'delta_music', name: 'Delta Wave Music', duration: 3600 },
      { id: 'delta_binaural', name: 'Delta Binaural Beats', duration: 3600 }
    ]
  },

  sleep_music: {
    id: 'sleep_music',
    name: 'Sleep Music',
    category: 'Music',
    difficulty: 'Beginner',
    duration: 3600,
    style: 'ambient',
    benefits: ['Relaxation', 'Atmosphere', 'Comfort'],
    instructions: 'Specially composed music for sleep. Slow tempo, minimal variation, soothing tones.',
    variations: [
      { id: 'piano_sleep', name: 'Piano Sleep Music', duration: 3600, instrument: 'piano' },
      { id: 'strings_sleep', name: 'Strings Sleep Music', duration: 3600, instrument: 'strings' },
      { id: 'nature_music', name: 'Nature + Music', duration: 3600, style: 'nature-blend' },
      { id: 'classical_sleep', name: 'Classical for Sleep', duration: 3600, style: 'classical' }
    ]
  }
};

// Helper functions
function getAllSleepRoutines() {
  const allRoutines = [];
  Object.values(SLEEP_LIBRARY).forEach(routine => {
    allRoutines.push(routine);
    if (routine.variations) {
      routine.variations.forEach(variation => {
        allRoutines.push({
          ...variation,
          parentRoutine: routine.id,
          category: routine.category,
          isVariation: true
        });
      });
    }
  });
  return allRoutines;
}

function getRoutinesByCategory(category) {
  return Object.values(SLEEP_LIBRARY).filter(r => r.category === category);
}

function getRoutinesByDuration(minDuration, maxDuration) {
  return Object.values(SLEEP_LIBRARY).filter(r => 
    r.duration >= minDuration && r.duration <= maxDuration
  );
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    SLEEP_LIBRARY, 
    getAllSleepRoutines,
    getRoutinesByCategory,
    getRoutinesByDuration
  };
}
