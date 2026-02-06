/**
 * Presence Meditation - Complete Techniques Library with Variations
 */

const MEDITATION_LIBRARY = {
  // ===== MINDFULNESS MEDITATION =====
  breath_awareness: {
    id: 'breath_awareness',
    name: 'Breath Awareness',
    tradition: 'Mindfulness',
    difficulty: 'Beginner',
    duration: 300,
    focus: 'Breath',
    benefits: ['Calm', 'Focus', 'Present Moment Awareness'],
    instructions: 'Sit comfortably. Close eyes. Focus attention on natural breath. Notice sensations of breathing. When mind wanders, gently return to breath.',
    variations: [
      { id: 'counted_breath', name: 'Counted Breath', duration: 300, instructions: 'Count each breath cycle 1-10, then repeat' },
      { id: 'nostril_awareness', name: 'Nostril Awareness', duration: 300, instructions: 'Focus on sensation of air in nostrils' },
      { id: 'belly_breathing', name: 'Belly Breathing', duration: 300, instructions: 'Focus on rise and fall of belly' },
      { id: 'breath_labeling', name: 'Breath Labeling', duration: 300, instructions: 'Mentally note "in" and "out" with each breath' },
      { id: 'anchor_breath', name: 'Anchor Breath', duration: 600, instructions: 'Use breath as anchor when mind wanders' }
    ]
  },

  body_scan_meditation: {
    id: 'body_scan_meditation',
    name: 'Body Scan',
    tradition: 'Mindfulness',
    difficulty: 'Beginner',
    duration: 900,
    focus: 'Body Awareness',
    benefits: ['Relaxation', 'Body Awareness', 'Stress Release'],
    instructions: 'Lie down or sit. Systematically move attention through body parts from toes to head. Notice sensations without judgment.',
    variations: [
      { id: 'quick_body_scan', name: 'Quick Body Scan', duration: 300, instructions: '5-minute scan of major body parts' },
      { id: 'detailed_body_scan', name: 'Detailed Body Scan', duration: 1800, instructions: '30-minute detailed exploration' },
      { id: 'progressive_relaxation', name: 'Progressive Relaxation', duration: 900, instructions: 'Tense and release each muscle group' },
      { id: 'healing_body_scan', name: 'Healing Body Scan', duration: 1200, instructions: 'Send healing energy to each part' },
      { id: 'sensation_noting', name: 'Sensation Noting', duration: 900, instructions: 'Label sensations: warmth, tingling, pressure' }
    ]
  },

  mindful_listening: {
    id: 'mindful_listening',
    name: 'Mindful Listening',
    tradition: 'Mindfulness',
    difficulty: 'Beginner',
    duration: 600,
    focus: 'Sound',
    benefits: ['Sensory Awareness', 'Present Moment', 'Calm'],
    instructions: 'Sit quietly. Listen to sounds around you. Notice sounds arising and passing. Don\'t label or judge, just listen.',
    variations: [
      { id: 'sound_layers', name: 'Sound Layers', duration: 600, instructions: 'Notice near, middle, and far sounds' },
      { id: 'silence_meditation', name: 'Silence Between Sounds', duration: 600, instructions: 'Focus on silence between sounds' },
      { id: 'one_sound', name: 'Single Sound Focus', duration: 300, instructions: 'Focus on one sound (bell, chime, etc.)' },
      { id: 'sound_bath', name: 'Sound Bath Meditation', duration: 1200, instructions: 'Immerse in healing sounds' }
    ]
  },

  open_awareness: {
    id: 'open_awareness',
    name: 'Open Awareness',
    tradition: 'Mindfulness',
    difficulty: 'Intermediate',
    duration: 600,
    focus: 'Present Moment',
    benefits: ['Clarity', 'Acceptance', 'Non-Attachment'],
    instructions: 'Sit with open awareness. Notice whatever arises - thoughts, sensations, sounds. Don\'t focus on anything specific. Be present with what is.',
    variations: [
      { id: 'choiceless_awareness', name: 'Choiceless Awareness', duration: 900, instructions: 'No preference for what arises' },
      { id: 'sky_mind', name: 'Sky Mind', duration: 600, instructions: 'Mind like sky, thoughts like clouds' },
      { id: 'witness_meditation', name: 'Witness Meditation', duration: 600, instructions: 'Observe experience from witness perspective' },
      { id: 'pure_presence', name: 'Pure Presence', duration: 1200, instructions: 'Rest in pure awareness itself' }
    ]
  },

  // ===== LOVING-KINDNESS (METTA) =====
  loving_kindness: {
    id: 'loving_kindness',
    name: 'Loving-Kindness Meditation',
    tradition: 'Buddhist',
    difficulty: 'Beginner',
    duration: 900,
    focus: 'Compassion',
    benefits: ['Compassion', 'Connection', 'Emotional Well-being'],
    instructions: 'Generate feelings of loving-kindness. Start with yourself, then loved ones, neutral people, difficult people, all beings. Repeat phrases: "May I/you be happy, healthy, safe, at ease."',
    variations: [
      { id: 'self_compassion', name: 'Self-Compassion', duration: 600, instructions: 'Focus entirely on sending loving-kindness to yourself' },
      { id: 'gratitude_metta', name: 'Gratitude Metta', duration: 600, instructions: 'Combine gratitude with loving-kindness' },
      { id: 'forgiveness_metta', name: 'Forgiveness Practice', duration: 900, instructions: 'Include forgiveness phrases' },
      { id: 'global_metta', name: 'Global Loving-Kindness', duration: 1200, instructions: 'Send to all beings everywhere' },
      { id: 'difficult_person', name: 'Difficult Person Practice', duration: 600, instructions: 'Focus on challenging relationships' }
    ]
  },

  compassion_meditation: {
    id: 'compassion_meditation',
    name: 'Compassion Meditation',
    tradition: 'Buddhist',
    difficulty: 'Intermediate',
    duration: 900,
    focus: 'Compassion',
    benefits: ['Empathy', 'Connection', 'Kindness'],
    instructions: 'Visualize someone suffering. Generate genuine wish for their suffering to end. Extend to all beings. Phrases: "May you be free from suffering."',
    variations: [
      { id: 'tonglen', name: 'Tonglen (Sending/Receiving)', duration: 900, instructions: 'Breathe in suffering, breathe out relief' },
      { id: 'self_other_exchange', name: 'Self-Other Exchange', duration: 600, instructions: 'Exchange your happiness for others\' pain' },
      { id: 'compassion_focus', name: 'Focused Compassion', duration: 600, instructions: 'Focus on one person in need' },
      { id: 'universal_compassion', name: 'Universal Compassion', duration: 1200, instructions: 'Extend to all sentient beings' }
    ]
  },

  // ===== TRANSCENDENTAL MEDITATION =====
  mantra_meditation: {
    id: 'mantra_meditation',
    name: 'Mantra Meditation',
    tradition: 'Vedic',
    difficulty: 'Beginner',
    duration: 1200,
    focus: 'Mantra',
    benefits: ['Deep Rest', 'Transcendence', 'Calm'],
    instructions: 'Sit comfortably. Silently repeat your mantra. When mind wanders, gently return to mantra. Don\'t force, let it be effortless.',
    variations: [
      { id: 'om_meditation', name: 'Om Meditation', duration: 1200, instructions: 'Repeat "Om" silently or aloud' },
      { id: 'so_hum', name: 'So Hum', duration: 1200, instructions: 'Inhale "So", exhale "Hum"' },
      { id: 'bija_mantra', name: 'Bija Mantra', duration: 1200, instructions: 'Use seed syllable mantras' },
      { id: 'mala_meditation', name: 'Mala Bead Meditation', duration: 1800, instructions: 'Use 108 beads for repetitions' },
      { id: 'kirtan', name: 'Kirtan (Chanting)', duration: 1800, instructions: 'Devotional call-and-response chanting' }
    ]
  },

  // ===== ZEN MEDITATION =====
  zazen: {
    id: 'zazen',
    name: 'Zazen (Zen Sitting)',
    tradition: 'Zen',
    difficulty: 'Intermediate',
    duration: 1800,
    focus: 'Just Sitting',
    benefits: ['Clarity', 'Presence', 'Insight'],
    instructions: 'Sit in formal posture. Eyes half-open, gaze down. Just sit. Don\'t try to do anything. When thoughts arise, let them pass.',
    variations: [
      { id: 'shikantaza', name: 'Shikantaza (Just Sitting)', duration: 1800, instructions: 'Pure awareness, no technique' },
      { id: 'breath_counting_zen', name: 'Breath Counting', duration: 1200, instructions: 'Count breaths 1-10, traditional Zen' },
      { id: 'koan_meditation', name: 'Koan Contemplation', duration: 1800, instructions: 'Contemplate paradoxical question' },
      { id: 'kinhin', name: 'Kinhin (Walking Zen)', duration: 600, instructions: 'Slow walking meditation' }
    ]
  },

  // ===== VISUALIZATION =====
  guided_imagery: {
    id: 'guided_imagery',
    name: 'Guided Imagery',
    tradition: 'Modern',
    difficulty: 'Beginner',
    duration: 900,
    focus: 'Visualization',
    benefits: ['Relaxation', 'Creativity', 'Healing'],
    instructions: 'Close eyes. Visualize peaceful scene in detail. Engage all senses. Fully immerse in the experience.',
    variations: [
      { id: 'beach_visualization', name: 'Beach Scene', duration: 900, instructions: 'Visualize peaceful beach' },
      { id: 'forest_walk', name: 'Forest Walk', duration: 900, instructions: 'Walk through peaceful forest' },
      { id: 'mountain_top', name: 'Mountain Top', duration: 900, instructions: 'Stand on peaceful mountain peak' },
      { id: 'garden_sanctuary', name: 'Garden Sanctuary', duration: 900, instructions: 'Create your perfect garden' },
      { id: 'healing_light', name: 'Healing Light', duration: 600, instructions: 'Visualize healing light through body' }
    ]
  },

  inner_light: {
    id: 'inner_light',
    name: 'Inner Light Meditation',
    tradition: 'Yogic',
    difficulty: 'Intermediate',
    duration: 900,
    focus: 'Third Eye',
    benefits: ['Clarity', 'Insight', 'Energy'],
    instructions: 'Focus on point between eyebrows. Visualize light or energy. Rest attention there gently.',
    variations: [
      { id: 'trataka', name: 'Trataka (Candle Gazing)', duration: 600, instructions: 'Gaze at candle flame, then visualize internally' },
      { id: 'chakra_visualization', name: 'Chakra Light', duration: 1200, instructions: 'Visualize light at each chakra' },
      { id: 'star_meditation', name: 'Star Meditation', duration: 600, instructions: 'Visualize star of light in heart' },
      { id: 'energy_circulation', name: 'Energy Circulation', duration: 900, instructions: 'Circulate light through body' }
    ]
  },

  // ===== MOVEMENT MEDITATION =====
  walking_meditation: {
    id: 'walking_meditation',
    name: 'Walking Meditation',
    tradition: 'Buddhist',
    difficulty: 'Beginner',
    duration: 600,
    focus: 'Movement',
    benefits: ['Grounding', 'Body Awareness', 'Present Moment'],
    instructions: 'Walk slowly. Notice each step. Feel feet touching ground. Coordinate with breath if desired.',
    variations: [
      { id: 'slow_walking', name: 'Slow Walking', duration: 900, instructions: 'Very slow, mindful steps' },
      { id: 'nature_walk', name: 'Nature Walking', duration: 1200, instructions: 'Mindful walk in nature' },
      { id: 'labyrinth_walk', name: 'Labyrinth Walking', duration: 900, instructions: 'Walk meditative labyrinth path' },
      { id: 'walking_gratitude', name: 'Gratitude Walk', duration: 600, instructions: 'Notice things to appreciate' },
      { id: 'sensory_walk', name: 'Sensory Walking', duration: 600, instructions: 'Focus on all five senses' }
    ]
  },

  tai_chi_meditation: {
    id: 'tai_chi_meditation',
    name: 'Tai Chi Meditation',
    tradition: 'Taoist',
    difficulty: 'Intermediate',
    duration: 1200,
    focus: 'Movement & Energy',
    benefits: ['Balance', 'Energy Flow', 'Calm'],
    instructions: 'Slow, flowing movements. Coordinate with breath. Feel energy moving. Stay present with motion.',
    variations: [
      { id: 'qigong', name: 'Qigong', duration: 1200, instructions: 'Energy cultivation movements' },
      { id: 'standing_meditation', name: 'Standing Meditation', duration: 900, instructions: 'Stand in specific postures' },
      { id: 'moving_mindfulness', name: 'Moving Mindfulness', duration: 600, instructions: 'Any slow mindful movement' }
    ]
  },

  // ===== SOUND MEDITATION =====
  sound_healing: {
    id: 'sound_healing',
    name: 'Sound Healing',
    tradition: 'Modern',
    difficulty: 'Beginner',
    duration: 1200,
    focus: 'Sound Vibration',
    benefits: ['Deep Relaxation', 'Healing', 'Energy Balance'],
    instructions: 'Listen to healing sounds. Let vibrations wash over you. Feel resonance in body.',
    variations: [
      { id: 'singing_bowl', name: 'Singing Bowl', duration: 900, instructions: 'Tibetan or crystal singing bowls' },
      { id: 'gong_bath', name: 'Gong Bath', duration: 1800, instructions: 'Immersive gong experience' },
      { id: 'tuning_forks', name: 'Tuning Forks', duration: 600, instructions: 'Specific frequency healing' },
      { id: 'binaural_beats', name: 'Binaural Beats', duration: 1200, instructions: 'Brainwave entrainment' },
      { id: 'nature_sounds', name: 'Nature Sounds', duration: 1200, instructions: 'Ocean, rain, forest sounds' }
    ]
  },

  // ===== CHAKRA MEDITATION =====
  chakra_meditation: {
    id: 'chakra_meditation',
    name: 'Chakra Meditation',
    tradition: 'Yogic',
    difficulty: 'Intermediate',
    duration: 1200,
    focus: 'Energy Centers',
    benefits: ['Energy Balance', 'Alignment', 'Vitality'],
    instructions: 'Focus on each chakra from root to crown. Visualize color, chant seed sound, feel energy.',
    variations: [
      { id: 'root_chakra', name: 'Root Chakra Focus', duration: 600, instructions: 'Focus on Muladhara' },
      { id: 'heart_chakra', name: 'Heart Chakra Opening', duration: 600, instructions: 'Open Anahata' },
      { id: 'third_eye', name: 'Third Eye Activation', duration: 600, instructions: 'Activate Ajna' },
      { id: 'chakra_balancing', name: 'Full Chakra Balancing', duration: 1800, instructions: 'Balance all seven' },
      { id: 'chakra_clearing', name: 'Chakra Clearing', duration: 900, instructions: 'Clear blockages' }
    ]
  },

  // ===== MODERN TECHNIQUES =====
  box_breathing_meditation: {
    id: 'box_breathing_meditation',
    name: 'Box Breathing Meditation',
    tradition: 'Modern',
    difficulty: 'Beginner',
    duration: 300,
    focus: 'Breath Pattern',
    benefits: ['Calm', 'Focus', 'Balance'],
    instructions: 'Breathe in 4 counts, hold 4, out 4, hold 4. Repeat. Stay present with the pattern.',
    variations: [
      { id: 'box_478', name: '4-7-8 Breathing', duration: 300, instructions: 'In 4, hold 7, out 8' },
      { id: 'box_extended', name: 'Extended Box (6-6-6-6)', duration: 600, instructions: 'Longer holds' },
      { id: 'triangle_breath', name: 'Triangle Breath', duration: 300, instructions: 'In 4, out 4, pause 4' },
      { id: 'coherent_breathing', name: 'Coherent Breathing', duration: 600, instructions: '5-5 rhythm for coherence' }
    ]
  },

  gratitude_meditation: {
    id: 'gratitude_meditation',
    name: 'Gratitude Meditation',
    tradition: 'Modern',
    difficulty: 'Beginner',
    duration: 600,
    focus: 'Gratitude',
    benefits: ['Happiness', 'Perspective', 'Positivity'],
    instructions: 'Sit quietly. Reflect on things you\'re grateful for. Feel genuine appreciation. Let it fill you.',
    variations: [
      { id: 'morning_gratitude', name: 'Morning Gratitude', duration: 300, instructions: 'Start day with thanks' },
      { id: 'evening_gratitude', name: 'Evening Gratitude', duration: 300, instructions: 'Review day with gratitude' },
      { id: 'gratitude_journal', name: 'Gratitude Journaling', duration: 600, instructions: 'Write then meditate on gratitude' },
      { id: 'gratitude_walk', name: 'Gratitude Walking', duration: 900, instructions: 'Walk noticing blessings' }
    ]
  },

  // ===== ADVANCED TECHNIQUES =====
  vipassana: {
    id: 'vipassana',
    name: 'Vipassana (Insight)',
    tradition: 'Buddhist',
    difficulty: 'Advanced',
    duration: 1800,
    focus: 'Insight',
    benefits: ['Insight', 'Liberation', 'Clarity'],
    instructions: 'Observe sensations throughout body with equanimity. Note impermanence. Don\'t react to pleasant or unpleasant.',
    variations: [
      { id: 'noting_practice', name: 'Noting Practice', duration: 1800, instructions: 'Label experiences: "seeing", "hearing", "thinking"' },
      { id: 'anicca_meditation', name: 'Impermanence Focus', duration: 1200, instructions: 'Observe changing nature of all phenomena' },
      { id: 'equanimity_practice', name: 'Equanimity Practice', duration: 1200, instructions: 'Remain balanced with all experience' }
    ]
  },

  non_dual_awareness: {
    id: 'non_dual_awareness',
    name: 'Non-Dual Awareness',
    tradition: 'Advaita',
    difficulty: 'Advanced',
    duration: 1800,
    focus: 'Pure Consciousness',
    benefits: ['Liberation', 'Peace', 'Unity'],
    instructions: 'Rest as awareness itself. Notice awareness is always present. Don\'t identify with content of awareness.',
    variations: [
      { id: 'self_inquiry', name: 'Self-Inquiry (Who Am I?)', duration: 1800, instructions: 'Investigate true nature' },
      { id: 'witness_consciousness', name: 'Witness Consciousness', duration: 1200, instructions: 'Be the observer' },
      { id: 'pure_being', name: 'Pure Being', duration: 1800, instructions: 'Rest in beingness' }
    ]
  }
};

// Helper function to get all techniques including variations
function getAllMeditationTechniques() {
  const allTechniques = [];
  
  Object.values(MEDITATION_LIBRARY).forEach(technique => {
    allTechniques.push(technique);
    
    if (technique.variations && technique.variations.length > 0) {
      technique.variations.forEach(variation => {
        allTechniques.push({
          ...variation,
          parentTechnique: technique.id,
          tradition: technique.tradition,
          focus: technique.focus,
          isVariation: true
        });
      });
    }
  });
  
  return allTechniques;
}

// Get techniques by difficulty
function getTechniquesByDifficulty(difficulty) {
  return Object.values(MEDITATION_LIBRARY).filter(t => t.difficulty === difficulty);
}

// Get techniques by tradition
function getTechniquesByTradition(tradition) {
  return Object.values(MEDITATION_LIBRARY).filter(t => t.tradition === tradition);
}

// Get techniques by duration
function getTechniquesByDuration(minDuration, maxDuration) {
  return Object.values(MEDITATION_LIBRARY).filter(t => 
    t.duration >= minDuration && t.duration <= maxDuration
  );
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    MEDITATION_LIBRARY, 
    getAllMeditationTechniques,
    getTechniquesByDifficulty,
    getTechniquesByTradition,
    getTechniquesByDuration
  };
}
