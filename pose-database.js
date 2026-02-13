   /**
 * Presence Yoga - Full Comprehensive Database
 * Pure JavaScript Version - NO <script> tags
 */

const POSE_LIBRARY = {
  // ===== STANDING POSES =====
  mountain: {
    id: 'mountain',
    name: 'Mountain Pose',
    sanskrit: 'Tadasana',
    family: 'Standing',
    category: 'Standing',
    level: 'Beginner',
    muscles: ['Core', 'Legs'],
    instructions: 'Stand with feet together, arms by sides. Ground through all four corners of feet.',
    checkpoints: [{ joint: "spine", label: "Spinal Stack", ideal: 180, range: [175, 185] }],
    variations: [
      { id: 'mountain_arms_up', name: 'Upward Salute', sanskrit: 'Urdhva Hastasana', level: 'Beginner' },
      { id: 'mountain_side_stretch', name: 'Side Bend', sanskrit: 'Parsva Tadasana', level: 'Beginner' }
    ]
  },
  warrior1: {
    id: 'warrior1',
    name: 'Warrior I',
    sanskrit: 'Virabhadrasana I',
    family: 'Standing',
    category: 'Standing',
    level: 'Intermediate',
    muscles: ['Legs', 'Core', 'Shoulders'],
    instructions: 'Step right foot forward, bend knee 90°. Back foot 45°. Square hips forward.',
    checkpoints: [{ joint: "knee", label: "Front Knee", ideal: 90, range: [85, 105] }],
    variations: [
        { id: 'warrior1_low', name: 'Low Warrior I', level: 'Beginner' },
        { id: 'warrior1_humble', name: 'Humble Warrior', level: 'Advanced' }
    ]
  },
  warrior2: {
    id: 'warrior2',
    name: 'Warrior II',
    sanskrit: 'Virabhadrasana II',
    family: 'Standing',
    category: 'Standing',
    level: 'Intermediate',
    muscles: ['Legs', 'Arms', 'Hips'],
    instructions: 'Wide stance, right knee bent. Arms extended. Gaze over front hand.',
    checkpoints: [{ joint: "knee", label: "Front Knee", ideal: 90, range: [85, 105] }],
    variations: [
        { id: 'warrior2_reverse', name: 'Reverse Warrior', level: 'Intermediate' },
        { id: 'warrior2_peaceful', name: 'Peaceful Warrior', level: 'Beginner' }
    ]
  },
  warrior3: {
    id: 'warrior3',
    name: 'Warrior III',
    sanskrit: 'Virabhadrasana III',
    family: 'Standing',
    category: 'Standing',
    level: 'Advanced',
    muscles: ['Legs', 'Core', 'Balance'],
    instructions: 'Hinge forward lifting back leg parallel to floor. Arms extend forward.',
    checkpoints: [{ joint: "spine", label: "Torso Parallel", ideal: 180, range: [170, 190] }],
    variations: []
  },
  triangle: {
    id: 'triangle',
    name: 'Triangle Pose',
    sanskrit: 'Trikonasana',
    family: 'Standing',
    category: 'Standing',
    level: 'Beginner',
    muscles: ['Legs', 'Obliques'],
    instructions: 'Reach toward front foot, hand to shin. Top arm extends up.',
    checkpoints: [{ joint: "spine", label: "Lateral Extension", ideal: 180, range: [170, 190] }],
    variations: []
  },
  tree: {
    id: 'tree',
    name: 'Tree Pose',
    sanskrit: 'Vrksasana',
    family: 'Standing',
    category: 'Standing',
    level: 'Beginner',
    muscles: ['Legs', 'Balance'],
    instructions: 'Stand on one leg, foot to inner thigh (not knee). Hands at heart.',
    checkpoints: [{ joint: "hip", label: "Hip Opening", ideal: 90, range: [70, 110] }],
    variations: []
  },
  chair: {
    id: 'chair',
    name: 'Chair Pose',
    sanskrit: 'Utkatasana',
    family: 'Standing',
    category: 'Standing',
    level: 'Beginner',
    muscles: ['Legs', 'Core'],
    instructions: 'Feet together, bend knees as if sitting. Arms reach overhead.',
    checkpoints: [{ joint: "knee", label: "Knee Flexion", ideal: 100, range: [80, 120] }],
    variations: []
  },

  // ===== FORWARD FOLDS =====
  forward_fold: {
    id: 'forward_fold',
    name: 'Forward Fold',
    sanskrit: 'Uttanasana',
    family: 'Forward Fold',
    category: 'Forward Fold',
    level: 'Beginner',
    muscles: ['Hamstrings', 'Back'],
    instructions: 'Hinge at hips folding forward. Hands toward floor.',
    checkpoints: [{ joint: "hip", label: "Hip Hinge", ideal: 45, range: [20, 70] }],
    variations: []
  },

  // ===== BACKBENDS =====
  cobra: {
    id: 'cobra',
    name: 'Cobra Pose',
    sanskrit: 'Bhujangasana',
    family: 'Backbend',
    category: 'Backbend',
    level: 'Beginner',
    muscles: ['Back', 'Chest'],
    instructions: 'Lie prone, lift chest, elbows slightly bent.',
    checkpoints: [{ joint: "spine", label: "Back Extension", ideal: 150, range: [130, 170] }],
    variations: [{ id: 'cobra_updog', name: 'Upward Dog', level: 'Intermediate' }]
  },
  bridge: {
    id: 'bridge',
    name: 'Bridge Pose',
    sanskrit: 'Setu Bandha Sarvangasana',
    family: 'Backbend',
    category: 'Backbend',
    level: 'Beginner',
    muscles: ['Glutes', 'Back'],
    instructions: 'Lie on back, feet flat. Lift hips pressing through feet.',
    checkpoints: [{ joint: "hip", label: "Hip Extension", ideal: 180, range: [160, 200] }],
    variations: []
  },
  camel: {
    id: 'camel',
    name: 'Camel Pose',
    sanskrit: 'Ustrasana',
    family: 'Backbend',
    category: 'Backbend',
    level: 'Intermediate',
    muscles: ['Back', 'Hip Flexors'],
    instructions: 'Kneel, hands to lower back or heels as you arch back.',
    checkpoints: [{ joint: "spine", label: "Deep Arch", ideal: 120, range: [100, 140] }],
    variations: []
  },

  // ===== TWISTS =====
  seated_twist: {
    id: 'seated_twist',
    name: 'Seated Twist',
    sanskrit: 'Ardha Matsyendrasana',
    family: 'Twist',
    category: 'Twist',
    level: 'Intermediate',
    muscles: ['Spine', 'Hips'],
    instructions: 'Sit cross-legged, twist toward top knee.',
    checkpoints: [{ joint: "spine", label: "Rotation", ideal: 90, range: [70, 110] }],
    variations: []
  },

  // ===== HIP OPENERS =====
  pigeon: {
    id: 'pigeon',
    name: 'Pigeon Pose',
    sanskrit: 'Eka Pada Rajakapotasana',
    family: 'Hip Opener',
    category: 'Hip Opener',
    level: 'Intermediate',
    muscles: ['Hips', 'Glutes'],
    instructions: 'One knee forward, other leg extended back. Square hips.',
    checkpoints: [{ joint: "hip", label: "Glute Stretch", ideal: 90, range: [70, 110] }],
    variations: []
  },

  // ===== INVERSIONS =====
  downdog: {
    id: 'downdog',
    name: 'Downward Dog',
    sanskrit: 'Adho Mukha Svanasana',
    family: 'Inversion',
    category: 'Inversion',
    level: 'Beginner',
    muscles: ['Shoulders', 'Hamstrings'],
    instructions: 'Lift hips high and back. Press hands down.',
    checkpoints: [{ joint: "hip", label: "Hinge", ideal: 60, range: [45, 90] }],
    variations: []
  },

  // ===== RESTORATIVE =====
  childs_pose: {
    id: 'childs_pose',
    name: "Child's Pose",
    sanskrit: 'Balasana',
    family: 'Restorative',
    category: 'Restorative',
    level: 'Beginner',
    muscles: ['Back', 'Hips'],
    instructions: 'Sit on heels, fold forward. Forehead to mat.',
    checkpoints: [{ joint: "spine", label: "Relaxation", ideal: 180, range: [170, 190] }],
    variations: []
  },
  savasana: {
    id: 'savasana',
    name: 'Corpse Pose',
    sanskrit: 'Savasana',
    family: 'Restorative',
    category: 'Restorative',
    level: 'Beginner',
    muscles: ['Full Body'],
    instructions: 'Lie flat on back. Complete stillness.',
    checkpoints: [{ joint: "spine", label: "Neutral", ideal: 180, range: [179, 181] }],
    variations: []
  }
};

// THE FLATTENER (Ensures variations show up in search)
const flattenData = () => {
    const flat = [];
    Object.values(POSE_LIBRARY).forEach(pose => {
        flat.push(pose);
        if (pose.variations) {
            pose.variations.forEach(v => {
                flat.push({ 
                  ...v, 
                  family: pose.family, 
                  category: pose.category, 
                  instructions: v.instructions || pose.instructions, 
                  checkpoints: v.checkpoints || pose.checkpoints,
                  muscles: pose.muscles
                });
            });
        }
    });
    return flat;
};

// GLOBAL EXPORT
window.ALL_POSES = flattenData();
console.log("Presence Engine: Loaded " + window.ALL_POSES.length + " pose units.");
