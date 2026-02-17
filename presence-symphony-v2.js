/**
 * PRESENCE SYMPHONY - Complete Integration Library
 * All apps share this single source of truth
 * 
 * VERSION: 2.0 - Full App Integration
 * Updated: Feb 2026
 */

window.PRESENCE = window.PRESENCE || {};

console.log('%c🎵 PRESENCE SYMPHONY LOADING...', 'color: #d4af37; font-size: 16px; font-weight: bold;');

// ====================================
// POSE LIBRARY - From your Yoga App
// Used by: yoga_v3, alignment, movement, flow
// ====================================
window.PRESENCE.POSES = [
    // Standing & Balance
    { 
        id: 'p1', name: 'Mountain (Tadasana) Family', category: 'Standing', level: 'Beginner',
        sanskrit: 'Tadasana',
        philosophy: "The foundation of all standing poses. Stand tall like a mountain.",
        breath: "Breathe length into the spine on inhale, ground through the feet on exhale.",
        breathPattern: 'equal_breathing',
        variations: [
            {id:'v1', name:'Extended (Urdhva Hastasana)'}, {id:'v2', name:'Side Bend'}, {id:'v3', name:'On Toes'}, 
            {id:'v4', name:'Cactus Arms'}, {id:'v5', name:'Eagle Arms'}, {id:'v6', name:'Cow Face Arms'}, 
            {id:'v7', name:'Backbend'}, {id:'v8', name:'One-Legged Balance'}, {id:'v9', name:'Twist'}, 
            {id:'v10', name:'Reverse Prayer'}, {id:'v11', name:'Wide Stance'}, {id:'v12', name:'With Block'}
        ],
        checkpoints: [
            { label: 'Feet', joint: 'ankles', ideal: 0, note: 'Hip-width apart, parallel' },
            { label: 'Knees', joint: 'knees', ideal: 180, note: 'Soft, not locked' },
            { label: 'Pelvis', joint: 'hips', ideal: 0, note: 'Neutral position' },
            { label: 'Shoulders', joint: 'shoulders', ideal: 0, note: 'Relaxed, away from ears' }
        ],
        duration: 30,
        targetMuscles: ['Core', 'Legs', 'Posture'],
        benefits: ['Improves posture', 'Strengthens legs', 'Increases awareness'],
        mudra: 'anjali_mudra'
    },
    { 
        id: 'p2', name: 'Warrior I (Virabhadrasana I) Family', category: 'Standing', level: 'Beginner',
        sanskrit: 'Virabhadrasana I',
        philosophy: "The peaceful warrior. Strength with grace.",
        breath: "Inhale to lift the chest, exhale to sink deeper into the lunge.",
        breathPattern: 'ujjayi',
        variations: [
            {id:'v13', name:'Humble'}, {id:'v14', name:'Eagle Arms'}, {id:'v15', name:'Airplane Arms'}, 
            {id:'v16', name:'Cactus Arms'}, {id:'v17', name:'On Tip-Toes'}, {id:'v18', name:'Bound Hands'},
            {id:'v19', name:'Cow Face Arms'}, {id:'v20', name:'With Block'}, {id:'v21', name:'Strap Behind Back'}
        ],
        checkpoints: [
            { label: 'Front Knee', joint: 'knee', ideal: 90, note: 'Directly over ankle' },
            { label: 'Back Leg', joint: 'leg', ideal: 180, note: 'Straight, strong' },
            { label: 'Hips', joint: 'hips', ideal: 0, note: 'Square to front' },
            { label: 'Arms', joint: 'shoulders', ideal: 180, note: 'Reaching up' }
        ],
        duration: 30,
        targetMuscles: ['Legs', 'Core', 'Shoulders'],
        benefits: ['Builds strength', 'Improves balance', 'Opens hips and chest']
    },
    { 
        id: 'p3', name: 'Warrior II Family', category: 'Standing', level: 'Beginner',
        sanskrit: 'Virabhadrasana II',
        variations: [
            {id:'v22', name:'Reverse'}, {id:'v23', name:'Archer Arms'}, {id:'v24', name:'Reverse Prayer'}, 
            {id:'v25', name:'One Hand on Heart'}, {id:'v26', name:'Bound (Baddha)'}, {id:'v27', name:'Straight Leg'},
            {id:'v28', name:'Peaceful Warrior'}, {id:'v29', name:'With Chair Support'}
        ],
        breathPattern: 'ujjayi', duration: 30, level: 'Beginner', category: 'Standing'
    },
    { 
        id: 'p4', name: 'Warrior III Family', category: 'Balance', level: 'Intermediate',
        sanskrit: 'Virabhadrasana III',
        philosophy: "Become an arrow. Find your line.",
        breathPattern: 'equal_breathing',
        variations: [
            {id:'v30', name:'Airplane Arms'}, {id:'v31', name:'Hands at Heart'}, {id:'v32', name:'Hands Forward'}, 
            {id:'v33', name:'Hands Backwards'}, {id:'v34', name:'With Blocks'}, {id:'v35', name:'Supported against Wall'},
            {id:'v36', name:'Crunch (Knee to Nose)'}, {id:'v37', name:'One Legged Squat'}
        ],
        duration: 45, targetMuscles: ['Legs', 'Core', 'Balance']
    },
    { 
        id: 'p30', name: 'Triangle (Trikonasana) Family', category: 'Standing', level: 'Intermediate',
        variations: [
            {id:'v38', name:'Extended'}, {id:'v39', name:'Revolved (Parivrtta)'}, {id:'v40', name:'Bound'}, 
            {id:'v41', name:'Half Bound'}, {id:'v42', name:'With Block'}, {id:'v43', name:'Hand to Shin'},
            {id:'v44', name:'Arm Overhead'}, {id:'v45', name:'Wide Leg Triangle'}
        ],
        breathPattern: 'deep_breathing', duration: 30
    },
    { 
        id: 'p31', name: 'Lunge (Anjaneyasana) Family', category: 'Standing', level: 'Beginner',
        variations: [
            {id:'v46', name:'Low Lunge'}, {id:'v47', name:'High Lunge'}, {id:'v48', name:'Twisted Lunge'}, 
            {id:'v49', name:'Crescent Lunge'}, {id:'v50', name:'Lunge Backbend'}, {id:'v51', name:'Lunge Side Stretch'},
            {id:'v52', name:'Lunge Winged (Knee Out)'}, {id:'v53', name:'Lunge with Quad Stretch (Dragon)'}
        ],
        breathPattern: 'synchronized_movement', duration: 45
    },
    { 
        id: 'p32', name: 'Staff (Dandasana) Family', category: 'Seated', level: 'Beginner',
        variations: [
            {id:'v54', name:'Forward Fold (Paschimottanasana)'}, {id:'v55', name:'One Legged Fold'}, {id:'v56', name:'With Strap'}, 
            {id:'v57', name:'With Bolster'}, {id:'v58', name:'Seated Twist'}, {id:'v59', name:'Seated Side Bend'},
            {id:'v60', name:'Hands Behind Back'}, {id:'v61', name:'Wide Legged (Upavistha)'}
        ],
        breathPattern: 'natural_breath', duration: 60
    },
    { 
        id: 'p33', name: 'Butterfly (Baddha Konasana) Family', category: 'Seated', level: 'Beginner',
        variations: [
            {id:'v62', name:'Flapping Wings'}, {id:'v63', name:'Forward Fold'}, {id:'v64', name:'Reclined (Supta)'}, 
            {id:'v65', name:'With Blocks under Knees'}, {id:'v66', name:'With Bolster Under Back'}, {id:'v67', name:'Star Pose'}
        ],
        breathPattern: 'relaxing_breath', duration: 90
    },
    { 
        id: 'p9', name: 'Cobra (Bhujangasana) Family', category: 'Backbends', level: 'Beginner',
        variations: [
            {id:'v68', name:'Baby Cobra'}, {id:'v69', name:'Sphinx (Forearms)'}, {id:'v70', name:'Up-Dog'}, 
            {id:'v71', name:'King Cobra'}, {id:'v72', name:'Seal (Arms Wide)'}, {id:'v73', name:'Twisting Cobra'},
            {id:'v74', name:'Cobra on Finger Tips'}, {id:'v75', name:'Cobra with Blocks'}
        ],
        breathPattern: 'ujjayi', duration: 45
    },
    { 
        id: 'p34', name: 'Bridge (Setu Bandha) Family', category: 'Backbends', level: 'Beginner',
        variations: [
            {id:'v76', name:'Supported (Block)'}, {id:'v77', name:'One-Legged'}, {id:'v78', name:'With Strap'}, 
            {id:'v79', name:'Heels Lifted'}, {id:'v80', name:'Interlaced Hands'}, {id:'v81', name:'Dynamic (Flowing)'},
            {id:'v82', name:'Wheel Pose (Urdhva Dhanurasana)'}
        ],
        breathPattern: 'deep_breathing', duration: 60
    },
    { 
        id: 'p35', name: 'Headstand (Sirsasana) Family', category: 'Inversions', level: 'Advanced',
        variations: [
            {id:'v83', name:'Tripod'}, {id:'v84', name:'Bound Headstand'}, {id:'v85', name:'Eagle Legs'}, 
            {id:'v86', name:'Lotus Legs'}, {id:'v87', name:'Half Headstand'}, {id:'v88', name:'Against Wall'}
        ],
        breathPattern: 'equal_breathing', duration: 120
    },
    { 
        id: 'p36', name: 'Crow (Bakasana) Family', category: 'Arm Balance', level: 'Advanced',
        variations: [
            {id:'v89', name:'Crane (Straight Arms)'}, {id:'v90', name:'Side Crow'}, {id:'v91', name:'One-Legged Crow'}, 
            {id:'v92', name:'Baby Crow (Forearms)'}, {id:'v93', name:'Crow on Blocks'}
        ],
        breathPattern: 'ujjayi', duration: 60
    }
];

// Make available globally for legacy compatibility
window.POSE_LIBRARY = window.PRESENCE.POSES;
window.ALL_POSES = window.PRESENCE.POSES;

// ====================================
// BREATHWORK PATTERNS - From your apps
// Used by: breathwork, meditation, yoga, movement
// ====================================
window.PRESENCE.BREATHWORK = [
    {
        id: 'box_breathing',
        name: 'Box Breathing',
        category: 'Calming',
        pattern: [4, 4, 4, 4],
        description: 'Equal parts breathing for balance and calm',
        benefits: ['Reduces anxiety', 'Improves focus', 'Regulates nervous system'],
        visualization: 'square',
        instruction: 'Breathe in a square pattern: inhale 4, hold 4, exhale 4, hold 4',
        usedIn: ['meditation', 'yoga', 'movement'],
        difficulty: 'Beginner'
    },
    {
        id: 'relaxing_breath',
        name: '4-7-8 Breath',
        category: 'Relaxation',
        pattern: [4, 7, 8, 0],
        description: 'Dr. Weil\'s natural tranquilizer',
        benefits: ['Promotes sleep', 'Reduces stress', 'Calms anxiety'],
        visualization: 'wave',
        instruction: 'Inhale for 4, hold for 7, exhale for 8. The long exhale triggers relaxation.',
        usedIn: ['sleep', 'meditation'],
        difficulty: 'Beginner'
    },
    {
        id: 'ujjayi',
        name: 'Ujjayi Breath (Ocean Breath)',
        category: 'Heating',
        pattern: [5, 0, 5, 0],
        description: 'Victorious breath with slight throat constriction',
        benefits: ['Builds heat', 'Increases focus', 'Synchronizes movement'],
        visualization: 'wave',
        instruction: 'Constrict the back of your throat slightly to create an ocean sound',
        usedIn: ['yoga', 'flow'],
        difficulty: 'Intermediate',
        soundCue: 'Ocean waves'
    },
    {
        id: 'natural_breath',
        name: 'Natural Breathing',
        category: 'Awareness',
        pattern: null,
        description: 'Simply observe the natural breath without control',
        benefits: ['Develops awareness', 'Reduces control', 'Natural relaxation'],
        visualization: 'organic',
        instruction: 'Simply notice the breath as it is. Don\'t try to change it.',
        usedIn: ['meditation', 'bodyscan'],
        difficulty: 'Beginner'
    },
    {
        id: 'equal_breathing',
        name: 'Equal Breathing (Sama Vritti)',
        category: 'Balance',
        pattern: [5, 0, 5, 0],
        description: 'Simple equal inhale and exhale',
        benefits: ['Creates balance', 'Calms mind', 'Easy to maintain'],
        visualization: 'circle',
        instruction: 'Breathe in for 5 counts, out for 5 counts. Find your natural rhythm.',
        usedIn: ['yoga', 'meditation', 'movement'],
        difficulty: 'Beginner'
    },
    {
        id: 'deep_breathing',
        name: 'Deep Diaphragmatic Breathing',
        category: 'Relaxation',
        pattern: [6, 0, 6, 0],
        description: 'Full belly breathing using the diaphragm',
        benefits: ['Reduces stress', 'Increases oxygen', 'Calms anxiety'],
        visualization: 'expanding_circle',
        instruction: 'Breathe deeply into your belly. Let it expand on inhale, soften on exhale.',
        usedIn: ['yoga', 'meditation', 'movement'],
        difficulty: 'Beginner'
    },
    {
        id: 'synchronized_movement',
        name: 'Movement-Synchronized Breath',
        category: 'Flow',
        pattern: null,
        description: 'Breath coordinated with physical movement',
        benefits: ['Creates flow', 'Deepens practice', 'Mindful movement'],
        visualization: 'flowing',
        instruction: 'Inhale on expansion, exhale on contraction. Let breath lead movement.',
        usedIn: ['yoga', 'flow', 'movement'],
        difficulty: 'Beginner'
    }
];

// ====================================
// AMBIENT SOUNDS - From your mixer app
// Used by: ambient, meditation, sleep
// ====================================
window.PRESENCE.AMBIENT = {
    "Weather": [
        { id: 'lrain', name: 'Light Rain', url: 'https://actions.google.com/sounds/v1/weather/light_rain_on_windowsill.ogg' },
        { id: 'hrain', name: 'Heavy Rain', url: 'https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg' },
        { id: 'thunder', name: 'Thunder', url: 'https://actions.google.com/sounds/v1/weather/thunder_crack.ogg' },
        { id: 'wind', name: 'Wind', url: 'https://actions.google.com/sounds/v1/weather/wind_howling_at_window.ogg' }
    ],
    "Water": [
        { id: 'ocean', name: 'Ocean Waves', url: 'https://actions.google.com/sounds/v1/water/waves_crashing_on_shore.ogg' },
        { id: 'river', name: 'Gentle River', url: 'https://actions.google.com/sounds/v1/water/river_flowing.ogg' },
        { id: 'stream', name: 'Stream', url: 'https://actions.google.com/sounds/v1/water/water_trickle.ogg' }
    ],
    "Earth": [
        { id: 'forest', name: 'Forest', url: 'https://actions.google.com/sounds/v1/ambiences/forest_ambience.ogg' },
        { id: 'night', name: 'Night Life', url: 'https://actions.google.com/sounds/v1/ambiences/cricket_chirping.ogg' }
    ],
    "Fire": [
        { id: 'fire', name: 'Campfire', url: 'https://actions.google.com/sounds/v1/ambiences/fireplace_crackling.ogg' }
    ]
};

// ====================================
// GUIDED MEDITATIONS - From your guided app
// Used by: guided meditation, sleep, monastery
// ====================================
window.PRESENCE.MEDITATIONS = [
    {
        id: 'breath-awareness-5',
        name: 'Breath Awareness',
        duration: 5,
        category: 'beginner',
        breathPattern: 'natural_breath',
        description: 'Simple breath-focused meditation for beginners',
        script: [
            { time: 0, text: "Welcome. Find a comfortable seated position. Close your eyes if that feels right." },
            { time: 10, text: "Begin by taking three deep breaths. In through the nose... and out through the mouth." },
            { time: 25, text: "Now, allow your breath to return to its natural rhythm." },
            { time: 35, text: "Simply notice the breath as it enters... and leaves your body." },
            { time: 50, text: "You don't need to change anything. Just observe." },
            { time: 65, text: "When your mind wanders, and it will, gently bring your attention back to the breath." },
            { time: 85, text: "Notice the coolness as you breathe in... the warmth as you breathe out." },
            { time: 105, text: "Each breath is an anchor to this present moment." },
            { time: 240, text: "Begin to deepen your breath slightly." },
            { time: 255, text: "Wiggle your fingers and toes." },
            { time: 265, text: "When you're ready, gently open your eyes." },
            { time: 280, text: "Well done. Take this calm with you into your day." }
        ]
    },
    {
        id: 'body-scan-10',
        name: 'Body Scan',
        duration: 10,
        category: 'beginner',
        breathPattern: 'natural_breath',
        description: 'Progressive relaxation through body awareness',
        script: [
            { time: 0, text: "Welcome to this body scan meditation. Lie down or sit comfortably." },
            { time: 10, text: "Close your eyes and take three deep breaths." },
            { time: 25, text: "Bring your awareness to your feet. Notice any sensations." },
            { time: 45, text: "Relax your feet. Let go of any tension." },
            { time: 60, text: "Move your awareness to your lower legs and calves." },
            { time: 80, text: "Soften these muscles. Release any tightness." },
            { time: 100, text: "Shift attention to your thighs. Notice... then relax." },
            { time: 120, text: "Bring awareness to your hips and pelvis. Let them settle." },
            { time: 150, text: "Notice your abdomen. Let your belly soften." },
            { time: 180, text: "Move to your chest. Feel it rise and fall with each breath." },
            { time: 210, text: "Bring attention to your shoulders. Let them drop away from your ears." },
            { time: 240, text: "Notice your arms, from shoulders to fingertips. Relax completely." },
            { time: 280, text: "Soften your neck and throat." },
            { time: 310, text: "Relax your jaw. Let your tongue rest in your mouth." },
            { time: 340, text: "Soften your eyes, your forehead, the top of your head." },
            { time: 370, text: "Your entire body is now relaxed and at ease." },
            { time: 480, text: "Begin to deepen your breath." },
            { time: 520, text: "Gently move your fingers and toes." },
            { time: 560, text: "When you're ready, open your eyes." },
            { time: 580, text: "Notice how relaxed you feel. Well done." }
        ]
    },
    {
        id: 'anxiety-relief-10',
        name: 'Anxiety Relief',
        duration: 10,
        category: 'anxiety',
        breathPattern: 'box_breathing',
        description: 'Calming practice for anxious moments',
        script: [
            { time: 0, text: "You're safe right now. Find a comfortable position." },
            { time: 10, text: "Place one hand on your heart, the other on your belly." },
            { time: 20, text: "Take a slow breath in for four counts... 1... 2... 3... 4." },
            { time: 30, text: "Hold gently for four... 1... 2... 3... 4." },
            { time: 40, text: "Exhale slowly for six... 1... 2... 3... 4... 5... 6." },
            { time: 220, text: "Anxiety lives in the future. Right now, you are safe." },
            { time: 420, text: "Each breath releases a little more tension." },
            { time: 480, text: "You are calm. You are capable. You are here." },
            { time: 540, text: "Begin to bring movement back to your body." },
            { time: 560, text: "Wiggle your fingers and toes." },
            { time: 575, text: "When ready, open your eyes." },
            { time: 590, text: "Remember: this calm is always available to you." }
        ]
    }
];

// ====================================
// SEQUENCES - The Symphony
// Combines: poses + breath + meditation + mudras
// Used by: rituals, intents, yoga, flow
// ====================================
window.PRESENCE.SEQUENCES = [
    {
        id: 'morning_flow',
        name: 'Morning Energizer',
        duration: 900,
        category: 'Flow',
        level: 'Beginner',
        intent: 'arrive',
        poses: ['p1', 'p31', 'p2', 'p4'],
        breathwork: 'ujjayi',
        meditation: null,
        description: 'Wake up your body and mind with flowing movement',
        timePerPose: [30, 60, 60, 45],
        philosophy: 'Begin the day with intention and energy',
        musicSuggestion: 'Uplifting ambient'
    },
    {
        id: 'evening_wind_down',
        name: 'Evening Wind Down',
        duration: 600,
        category: 'Restorative',
        level: 'Beginner',
        intent: 'unwind',
        poses: ['p32', 'p33'],
        breathwork: 'relaxing_breath',
        meditation: 'body-scan-10',
        description: 'Prepare for restful sleep',
        timePerPose: [120, 180],
        philosophy: 'Release the day and welcome rest',
        musicSuggestion: 'Soft nature sounds'
    },
    {
        id: 'desk_relief',
        name: 'Desk Relief',
        duration: 300,
        category: 'Restorative',
        level: 'Beginner',
        intent: 'recover',
        poses: ['p1', 'p31'],
        breathwork: 'deep_breathing',
        description: 'Quick relief from sitting',
        timePerPose: [60, 240],
        philosophy: 'Break the pattern of stillness',
        canBeDoneAt: 'desk'
    },
    {
        id: 'balance_practice',
        name: 'Balance & Focus',
        duration: 480,
        category: 'Balance',
        level: 'Intermediate',
        intent: 'sustain',
        poses: ['p1', 'p4'],
        breathwork: 'equal_breathing',
        mudra: 'anjali_mudra',
        description: 'Cultivate stability and concentration',
        timePerPose: [60, 420],
        philosophy: 'Find your center in every moment',
        musicSuggestion: 'Minimal ambient'
    },
    {
        id: 'meditation_preparation',
        name: 'Meditation Preparation',
        duration: 600,
        category: 'Meditation',
        level: 'Beginner',
        intent: 'mark',
        poses: ['p32'],
        breathwork: 'equal_breathing',
        meditation: 'breath-awareness-5',
        mudra: 'gyan_mudra',
        description: 'Prepare body and mind for sitting practice',
        timePerPose: [600],
        philosophy: 'Movement prepares us for stillness',
        musicSuggestion: 'Tibetan bowls'
    }
];

// ====================================
// MUDRAS - From your mudra guide
// Used by: mudra guide, yoga, meditation
// ====================================
window.PRESENCE.MUDRAS = [
    {
        id: 'anjali_mudra',
        name: 'Anjali Mudra',
        category: 'meditation',
        description: 'Prayer hands at heart center',
        benefits: ['Centers energy', 'Connects hemispheres', 'Promotes gratitude'],
        usedIn: ['p1', 'meditation'],
        emoji: '🙏'
    },
    {
        id: 'gyan_mudra',
        name: 'Gyan Mudra',
        category: 'meditation',
        description: 'Index finger touching thumb - knowledge mudra',
        benefits: ['Enhances concentration', 'Improves memory', 'Calms mind'],
        usedIn: ['meditation'],
        emoji: '👌'
    }
];

// ====================================
// HELPER FUNCTIONS - The Conductor
// ====================================

// POSES
window.PRESENCE.getPoseById = function(id) {
    return this.POSES.find(pose => pose.id === id);
};

window.PRESENCE.getPosesByCategory = function(category) {
    return this.POSES.filter(pose => pose.category === category);
};

window.PRESENCE.getPosesByLevel = function(level) {
    return this.POSES.filter(pose => pose.level === level);
};

// SEQUENCES - The Full Symphony
window.PRESENCE.getSequenceById = function(id) {
    const sequence = this.SEQUENCES.find(seq => seq.id === id);
    if (sequence) {
        // Hydrate with full pose data
        sequence.poseData = sequence.poses.map(poseId => this.getPoseById(poseId));
        
        // Hydrate with breathwork data
        if (sequence.breathwork) {
            sequence.breathworkData = this.getBreathworkById(sequence.breathwork);
        }
        
        // Hydrate with meditation data
        if (sequence.meditation) {
            sequence.meditationData = this.getMeditationById(sequence.meditation);
        }
    }
    return sequence;
};

window.PRESENCE.getSequenceByIntent = function(intent) {
    return this.SEQUENCES.find(seq => seq.intent === intent);
};

// BREATHWORK
window.PRESENCE.getBreathworkById = function(id) {
    return this.BREATHWORK.find(breath => breath.id === id);
};

window.PRESENCE.getBreathworkByCategory = function(category) {
    return this.BREATHWORK.filter(breath => breath.category === category);
};

// Get breath pattern for a specific pose
window.PRESENCE.getBreathForPose = function(poseId) {
    const pose = this.getPoseById(poseId);
    if (pose && pose.breathPattern) {
        return this.getBreathworkById(pose.breathPattern);
    }
    return null;
};

// MEDITATIONS
window.PRESENCE.getMeditationById = function(id) {
    return this.MEDITATIONS.find(med => med.id === id);
};

// MUDRAS
window.PRESENCE.getMudraById = function(id) {
    return this.MUDRAS.find(mudra => mudra.id === id);
};

// Get mudra for a specific pose
window.PRESENCE.getMudraForPose = function(poseId) {
    const pose = this.getPoseById(poseId);
    if (pose && pose.mudra) {
        return this.getMudraById(pose.mudra);
    }
    return null;
};

// AMBIENT SOUNDS
window.PRESENCE.getAmbientByCategory = function(category) {
    return this.AMBIENT[category] || [];
};

// Get everything related to a pose
window.PRESENCE.getPoseContext = function(poseId) {
    const pose = this.getPoseById(poseId);
    if (!pose) return null;
    
    return {
        pose: pose,
        breathwork: pose.breathPattern ? this.getBreathworkById(pose.breathPattern) : null,
        mudra: pose.mudra ? this.getMudraById(pose.mudra) : null,
        meditation: pose.meditation ? this.getMeditationById(pose.meditation) : null,
        sequences: this.SEQUENCES.filter(seq => seq.poses.includes(poseId))
    };
};

// ====================================
// INITIALIZATION
// ====================================
console.log('✅ Presence Symphony Loaded');
console.log(`📚 ${window.PRESENCE.POSES.length} poses available`);
console.log(`🧘 ${window.PRESENCE.MEDITATIONS.length} meditations available`);
console.log(`🌬️  ${window.PRESENCE.BREATHWORK.length} breathwork patterns available`);
console.log(`🔄 ${window.PRESENCE.SEQUENCES.length} sequences available`);
console.log(`🎵 Symphony ready to play!`);
