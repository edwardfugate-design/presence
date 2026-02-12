/**
 * Presence Yoga - Comprehensive Pose Library with Variations
 * Based on the exact structure you provided
 */

const POSE_LIBRARY = {
  // ===== STANDING POSES =====
  mountain: {
    id: 'mountain',
    name: 'Mountain Pose',
    sanskrit: 'Tadasana',
    family: 'Standing',
    intensity: 1,
    duration: 30,
    muscles: ['Core', 'Legs'],
    benefits: ['Posture', 'Balance', 'Foundation'],
    instructions: 'Stand with feet together, arms by sides. Ground through all four corners of feet. Engage thighs, lift kneecaps. Draw navel in, shoulders back.',
    variations: [
      { id: 'mountain_arms_up', name: 'Upward Salute', sanskrit: 'Urdhva Hastasana', intensity: 1, duration: 20 },
      { id: 'mountain_side_stretch', name: 'Side Bend', sanskrit: 'Parsva Tadasana', intensity: 2, duration: 30 },
      { id: 'mountain_backbend', name: 'Standing Backbend', sanskrit: 'Anuvittasana', intensity: 2, duration: 20 },
      { id: 'mountain_twist', name: 'Standing Twist', sanskrit: 'Parivrtta Tadasana', intensity: 2, duration: 30 },
      { id: 'mountain_one_leg', name: 'One-Legged Mountain', sanskrit: 'Eka Pada Tadasana', intensity: 3, duration: 30 }
    ]
  },

  warrior1: {
    id: 'warrior1',
    name: 'Warrior I',
    sanskrit: 'Virabhadrasana I',
    family: 'Standing',
    intensity: 3,
    duration: 30,
    muscles: ['Legs', 'Core', 'Shoulders', 'Hip Flexors'],
    benefits: ['Strength', 'Focus', 'Stability'],
    instructions: 'Step right foot forward, bend knee 90°. Back foot 45°. Square hips forward. Arms overhead.',
    variations: [
      { id: 'warrior1_low', name: 'Low Warrior I', sanskrit: 'Ardha Virabhadrasana I', intensity: 2, duration: 30 },
      { id: 'warrior1_bind', name: 'Bound Warrior I', sanskrit: 'Baddha Virabhadrasana I', intensity: 4, duration: 30 },
      { id: 'warrior1_prayer', name: 'Warrior I Prayer', sanskrit: 'Virabhadrasana I Anjali', intensity: 3, duration: 30 },
      { id: 'warrior1_eagle_arms', name: 'Warrior I Eagle Arms', sanskrit: 'Virabhadrasana I Garudasana', intensity: 3, duration: 30 },
      { id: 'warrior1_humble', name: 'Humble Warrior', sanskrit: 'Baddha Virabhadrasana', intensity: 4, duration: 30 }
    ]
  },

  warrior2: {
    id: 'warrior2',
    name: 'Warrior II',
    sanskrit: 'Virabhadrasana II',
    family: 'Standing',
    intensity: 3,
    duration: 30,
    muscles: ['Legs', 'Arms', 'Core', 'Hips'],
    benefits: ['Stamina', 'Concentration', 'Hip Opening'],
    instructions: 'Wide stance, right knee bent. Arms extended at shoulder height. Gaze over front hand.',
    variations: [
      { id: 'warrior2_reverse', name: 'Reverse Warrior', sanskrit: 'Viparita Virabhadrasana', intensity: 3, duration: 30 },
      { id: 'warrior2_extended_side', name: 'Extended Side Angle', sanskrit: 'Utthita Parsvakonasana', intensity: 3, duration: 30 },
      { id: 'warrior2_bound_side', name: 'Bound Side Angle', sanskrit: 'Baddha Parsvakonasana', intensity: 4, duration: 30 },
      { id: 'warrior2_peaceful', name: 'Peaceful Warrior', sanskrit: 'Shanti Virabhadrasana', intensity: 2, duration: 30 },
      { id: 'warrior2_goddess', name: 'Goddess Pose', sanskrit: 'Utkata Konasana', intensity: 3, duration: 45 }
    ]
  },

  warrior3: {
    id: 'warrior3',
    name: 'Warrior III',
    sanskrit: 'Virabhadrasana III',
    family: 'Standing',
    intensity: 4,
    duration: 30,
    muscles: ['Legs', 'Core', 'Back', 'Balance'],
    benefits: ['Balance', 'Strength', 'Focus', 'Coordination'],
    instructions: 'From standing, hinge forward lifting back leg parallel to floor. Arms extend forward or back.',
    variations: [
      { id: 'warrior3_arms_back', name: 'Warrior III Arms Back', sanskrit: 'Virabhadrasana III Variation', intensity: 4, duration: 30 },
      { id: 'warrior3_half_moon', name: 'Half Moon Pose', sanskrit: 'Ardha Chandrasana', intensity: 4, duration: 30 },
      { id: 'warrior3_airplane', name: 'Airplane Pose', sanskrit: 'Dekasana', intensity: 3, duration: 30 },
      { id: 'warrior3_chapasana', name: 'Sugarcane Pose', sanskrit: 'Ardha Chandra Chapasana', intensity: 5, duration: 30 },
      { id: 'warrior3_standing_split', name: 'Standing Split', sanskrit: 'Urdhva Prasarita Eka Padasana', intensity: 5, duration: 30 }
    ]
  },

  triangle: {
    id: 'triangle',
    name: 'Triangle Pose',
    sanskrit: 'Trikonasana',
    family: 'Standing',
    intensity: 2,
    duration: 30,
    muscles: ['Legs', 'Obliques', 'Hamstrings'],
    benefits: ['Flexibility', 'Digestion', 'Balance'],
    instructions: 'Wide stance, reach toward front foot, hand to shin/block. Top arm extends up.',
    variations: [
      { id: 'triangle_extended', name: 'Extended Triangle', sanskrit: 'Utthita Trikonasana', intensity: 2, duration: 30 },
      { id: 'triangle_revolved', name: 'Revolved Triangle', sanskrit: 'Parivrtta Trikonasana', intensity: 4, duration: 30 },
      { id: 'triangle_bound', name: 'Bound Triangle', sanskrit: 'Baddha Trikonasana', intensity: 3, duration: 30 },
      { id: 'triangle_half_moon', name: 'Half Moon from Triangle', sanskrit: 'Ardha Chandrasana', intensity: 4, duration: 30 },
      { id: 'triangle_twisted_half_moon', name: 'Twisted Half Moon', sanskrit: 'Parivrtta Ardha Chandrasana', intensity: 5, duration: 30 }
    ]
  },

  tree: {
    id: 'tree',
    name: 'Tree Pose',
    sanskrit: 'Vrksasana',
    family: 'Standing',
    intensity: 2,
    duration: 60,
    muscles: ['Legs', 'Core', 'Balance'],
    benefits: ['Balance', 'Focus', 'Grounding'],
    instructions: 'Stand on left leg, right foot to inner thigh or calf (not knee). Hands at heart or overhead.',
    variations: [
      { id: 'tree_hands_heart', name: 'Tree Hands at Heart', sanskrit: 'Vrksasana Anjali', intensity: 2, duration: 60 },
      { id: 'tree_hands_up', name: 'Tree Arms Overhead', sanskrit: 'Vrksasana Urdhva Hastasana', intensity: 2, duration: 60 },
      { id: 'tree_eagle_arms', name: 'Tree Eagle Arms', sanskrit: 'Vrksasana Garudasana', intensity: 3, duration: 60 },
      { id: 'tree_dancer', name: 'Dancer Pose', sanskrit: 'Natarajasana', intensity: 4, duration: 30 },
      { id: 'tree_half_lotus', name: 'Half Lotus Tree', sanskrit: 'Ardha Padma Vrksasana', intensity: 3, duration: 60 }
    ]
  },

  chair: {
    id: 'chair',
    name: 'Chair Pose',
    sanskrit: 'Utkatasana',
    family: 'Standing',
    intensity: 3,
    duration: 30,
    muscles: ['Legs', 'Core', 'Back', 'Arms'],
    benefits: ['Strength', 'Endurance', 'Posture'],
    instructions: 'Feet together, bend knees as if sitting. Arms reach overhead. Weight in heels.',
    variations: [
      { id: 'chair_twisted', name: 'Revolved Chair', sanskrit: 'Parivrtta Utkatasana', intensity: 4, duration: 30 },
      { id: 'chair_prayer', name: 'Chair Prayer Twist', sanskrit: 'Parivrtta Utkatasana Anjali', intensity: 4, duration: 30 },
      { id: 'chair_eagle', name: 'Eagle Pose', sanskrit: 'Garudasana', intensity: 4, duration: 30 },
      { id: 'chair_one_leg', name: 'One-Legged Chair', sanskrit: 'Eka Pada Utkatasana', intensity: 4, duration: 30 },
      { id: 'chair_airplane', name: 'Chair to Airplane', sanskrit: 'Utkatasana Dekasana', intensity: 4, duration: 30 }
    ]
  },

  // ===== FORWARD FOLDS =====
  forward_fold: {
    id: 'forward_fold',
    name: 'Standing Forward Fold',
    sanskrit: 'Uttanasana',
    family: 'Forward Fold',
    intensity: 2,
    duration: 30,
    muscles: ['Hamstrings', 'Back', 'Calves'],
    benefits: ['Flexibility', 'Calm', 'Stretching'],
    instructions: 'From standing, hinge at hips folding forward. Hands toward floor or hold elbows.',
    variations: [
      { id: 'forward_fold_wide', name: 'Wide-Legged Forward Fold', sanskrit: 'Prasarita Padottanasana', intensity: 2, duration: 30 },
      { id: 'forward_fold_bound', name: 'Bound Forward Fold', sanskrit: 'Baddha Uttanasana', intensity: 3, duration: 30 },
      { id: 'forward_fold_pyramid', name: 'Pyramid Pose', sanskrit: 'Parsvottanasana', intensity: 3, duration: 30 },
      { id: 'forward_fold_half_lift', name: 'Half Lift', sanskrit: 'Ardha Uttanasana', intensity: 1, duration: 20 },
      { id: 'forward_fold_gorilla', name: 'Gorilla Pose', sanskrit: 'Padahastasana', intensity: 3, duration: 30 }
    ]
  },

  // ===== BACKBENDS =====
  cobra: {
    id: 'cobra',
    name: 'Cobra Pose',
    sanskrit: 'Bhujangasana',
    family: 'Backbend',
    intensity: 2,
    duration: 30,
    muscles: ['Back', 'Chest', 'Shoulders'],
    benefits: ['Backbend', 'Energy', 'Spine Flexibility'],
    instructions: 'Lie prone, hands under shoulders. Press to lift chest, elbows slightly bent.',
    variations: [
      { id: 'cobra_baby', name: 'Baby Cobra', sanskrit: 'Ardha Bhujangasana', intensity: 1, duration: 30 },
      { id: 'cobra_sphinx', name: 'Sphinx Pose', sanskrit: 'Salamba Bhujangasana', intensity: 1, duration: 60 },
      { id: 'cobra_seal', name: 'Seal Pose', sanskrit: 'Bhujangasana Variation', intensity: 2, duration: 60 },
      { id: 'cobra_updog', name: 'Upward Facing Dog', sanskrit: 'Urdhva Mukha Svanasana', intensity: 3, duration: 30 },
      { id: 'cobra_king', name: 'King Cobra', sanskrit: 'Raja Bhujangasana', intensity: 4, duration: 30 }
    ]
  },

  bridge: {
    id: 'bridge',
    name: 'Bridge Pose',
    sanskrit: 'Setu Bandha Sarvangasana',
    family: 'Backbend',
    intensity: 3,
    duration: 45,
    muscles: ['Glutes', 'Back', 'Hamstrings', 'Core'],
    benefits: ['Backbend', 'Strength', 'Hip Flexor Stretch'],
    instructions: 'Lie on back, feet flat near glutes. Lift hips, pressing through feet.',
    variations: [
      { id: 'bridge_supported', name: 'Supported Bridge', sanskrit: 'Setu Bandha Variation', intensity: 1, duration: 180 },
      { id: 'bridge_one_leg', name: 'One-Legged Bridge', sanskrit: 'Eka Pada Setu Bandha', intensity: 4, duration: 45 },
      { id: 'bridge_wheel', name: 'Wheel Pose', sanskrit: 'Urdhva Dhanurasana', intensity: 5, duration: 30 },
      { id: 'bridge_half_wheel', name: 'Half Wheel', sanskrit: 'Ardha Urdhva Dhanurasana', intensity: 4, duration: 30 },
      { id: 'bridge_shoulder_stand', name: 'Shoulder Stand', sanskrit: 'Salamba Sarvangasana', intensity: 4, duration: 120 }
    ]
  },

  camel: {
    id: 'camel',
    name: 'Camel Pose',
    sanskrit: 'Ustrasana',
    family: 'Backbend',
    intensity: 4,
    duration: 30,
    muscles: ['Back', 'Hip Flexors', 'Quadriceps', 'Chest'],
    benefits: ['Backbend', 'Heart Opening', 'Energizing'],
    instructions: 'Kneel with knees hip-width. Hands to lower back, then reach for heels as you arch back.',
    variations: [
      { id: 'camel_half', name: 'Half Camel', sanskrit: 'Ardha Ustrasana', intensity: 3, duration: 30 },
      { id: 'camel_hands_floor', name: 'Camel Hands to Floor', sanskrit: 'Ustrasana Variation', intensity: 5, duration: 30 },
      { id: 'camel_one_arm', name: 'One-Armed Camel', sanskrit: 'Eka Hasta Ustrasana', intensity: 4, duration: 30 },
      { id: 'camel_kapotasana', name: 'King Pigeon', sanskrit: 'Kapotasana', intensity: 5, duration: 30 },
      { id: 'camel_laghu_vajrasana', name: 'Little Thunderbolt', sanskrit: 'Laghu Vajrasana', intensity: 5, duration: 30 }
    ]
  },

  // ===== TWISTS =====
  seated_twist: {
    id: 'seated_twist',
    name: 'Half Lord of the Fishes',
    sanskrit: 'Ardha Matsyendrasana',
    family: 'Twist',
    intensity: 3,
    duration: 45,
    muscles: ['Spine', 'Shoulders', 'Hips'],
    benefits: ['Twist', 'Digestion', 'Spinal Mobility'],
    instructions: 'Sit cross-legged, right foot outside left knee. Left elbow outside right knee, twist right.',
    variations: [
      { id: 'seated_twist_marichyasana', name: "Marichi's Pose", sanskrit: 'Marichyasana III', intensity: 3, duration: 45 },
      { id: 'seated_twist_bharadvaja', name: "Bharadvaja's Twist", sanskrit: 'Bharadvajasana', intensity: 2, duration: 45 },
      { id: 'seated_twist_bound', name: 'Bound Twist', sanskrit: 'Baddha Matsyendrasana', intensity: 4, duration: 45 },
      { id: 'seated_twist_noose', name: 'Noose Pose', sanskrit: 'Pasasana', intensity: 4, duration: 30 },
      { id: 'seated_twist_revolved_head_to_knee', name: 'Revolved Head to Knee', sanskrit: 'Parivrtta Janu Sirsasana', intensity: 3, duration: 45 }
    ]
  },

  supine_twist: {
    id: 'supine_twist',
    name: 'Supine Twist',
    sanskrit: 'Supta Matsyendrasana',
    family: 'Twist',
    intensity: 1,
    duration: 60,
    muscles: ['Spine', 'Hips', 'Lower Back'],
    benefits: ['Twist', 'Release', 'Relaxation'],
    instructions: 'Lie on back, hug right knee to chest, drop to left side. Arms in T.',
    variations: [
      { id: 'supine_twist_both_knees', name: 'Both Knees Twist', sanskrit: 'Jathara Parivartanasana', intensity: 1, duration: 60 },
      { id: 'supine_twist_eagle_legs', name: 'Eagle Legs Twist', sanskrit: 'Garudasana Supta Twist', intensity: 2, duration: 60 },
      { id: 'supine_twist_extended', name: 'Extended Leg Twist', sanskrit: 'Jathara Parivartanasana Extended', intensity: 2, duration: 60 },
      { id: 'supine_twist_thread_needle', name: 'Thread the Needle', sanskrit: 'Sucirandhrasana', intensity: 1, duration: 90 },
      { id: 'supine_twist_windshield', name: 'Windshield Wipers', sanskrit: 'Supta Jathara Prep', intensity: 1, duration: 60 }
    ]
  },

  // ===== HIP OPENERS =====
  pigeon: {
    id: 'pigeon',
    name: 'Pigeon Pose',
    sanskrit: 'Eka Pada Rajakapotasana',
    family: 'Hip Opener',
    intensity: 3,
    duration: 90,
    muscles: ['Hips', 'Glutes', 'Hip Flexors'],
    benefits: ['Hip Opening', 'Release', 'Flexibility'],
    instructions: 'From downdog, bring right knee forward between hands. Extend left leg back. Square hips.',
    variations: [
      { id: 'pigeon_sleeping', name: 'Sleeping Pigeon', sanskrit: 'Supta Kapotasana', intensity: 2, duration: 90 },
      { id: 'pigeon_mermaid', name: 'Mermaid Pose', sanskrit: 'Eka Pada Rajakapotasana II', intensity: 4, duration: 60 },
      { id: 'pigeon_king', name: 'King Pigeon', sanskrit: 'Eka Pada Rajakapotasana III', intensity: 5, duration: 60 },
      { id: 'pigeon_supine', name: 'Supine Pigeon', sanskrit: 'Supta Kapotasana', intensity: 1, duration: 90 },
      { id: 'pigeon_fire_log', name: 'Fire Log Pose', sanskrit: 'Agnistambhasana', intensity: 3, duration: 90 }
    ]
  },

  lizard: {
    id: 'lizard',
    name: 'Lizard Pose',
    sanskrit: 'Utthan Pristhasana',
    family: 'Hip Opener',
    intensity: 3,
    duration: 60,
    muscles: ['Hips', 'Hip Flexors', 'Hamstrings'],
    benefits: ['Hip Opening', 'Stretch', 'Flexibility'],
    instructions: 'From low lunge, walk hands inside front foot. Option to drop back knee.',
    variations: [
      { id: 'lizard_twisted', name: 'Twisted Lizard', sanskrit: 'Parivrtta Utthan Pristhasana', intensity: 4, duration: 60 },
      { id: 'lizard_flying', name: 'Flying Lizard', sanskrit: 'Utthan Pristhasana Variation', intensity: 4, duration: 60 },
      { id: 'lizard_forearms', name: 'Lizard on Forearms', sanskrit: 'Utthan Pristhasana', intensity: 3, duration: 60 },
      { id: 'lizard_half_split', name: 'Half Split', sanskrit: 'Ardha Hanumanasana', intensity: 3, duration: 60 },
      { id: 'lizard_splits', name: 'Full Splits', sanskrit: 'Hanumanasana', intensity: 5, duration: 60 }
    ]
  },

  // ===== INVERSIONS =====
  downdog: {
    id: 'downdog',
    name: 'Downward Facing Dog',
    sanskrit: 'Adho Mukha Svanasana',
    family: 'Inversion',
    intensity: 2,
    duration: 60,
    muscles: ['Shoulders', 'Hamstrings', 'Back', 'Calves'],
    benefits: ['Inversion', 'Stretch', 'Energy'],
    instructions: 'From hands and knees, tuck toes and lift hips. Press hands down, heels toward floor.',
    variations: [
      { id: 'downdog_three_leg', name: 'Three-Legged Dog', sanskrit: 'Tri Pada Adho Mukha Svanasana', intensity: 3, duration: 30 },
      { id: 'downdog_twisted', name: 'Twisted Dog', sanskrit: 'Parivrtta Adho Mukha Svanasana', intensity: 3, duration: 30 },
      { id: 'downdog_dolphin', name: 'Dolphin Pose', sanskrit: 'Ardha Pincha Mayurasana', intensity: 3, duration: 45 },
      { id: 'downdog_puppy', name: 'Puppy Pose', sanskrit: 'Uttana Shishosana', intensity: 2, duration: 60 },
      { id: 'downdog_wild_thing', name: 'Wild Thing', sanskrit: 'Camatkarasana', intensity: 4, duration: 30 }
    ]
  },

  headstand: {
    id: 'headstand',
    name: 'Headstand',
    sanskrit: 'Salamba Sirsasana',
    family: 'Inversion',
    intensity: 5,
    duration: 60,
    muscles: ['Core', 'Shoulders', 'Neck', 'Balance'],
    benefits: ['Inversion', 'Focus', 'Strength'],
    instructions: 'Forearms on mat, clasp hands. Crown of head on floor. Walk feet in, lift legs up.',
    variations: [
      { id: 'headstand_prep', name: 'Headstand Prep', sanskrit: 'Salamba Sirsasana Prep', intensity: 3, duration: 30 },
      { id: 'headstand_straddle', name: 'Straddle Headstand', sanskrit: 'Salamba Sirsasana II', intensity: 5, duration: 60 },
      { id: 'headstand_lotus', name: 'Lotus Headstand', sanskrit: 'Padma Sirsasana', intensity: 5, duration: 60 },
      { id: 'headstand_eagle_legs', name: 'Eagle Legs Headstand', sanskrit: 'Garudasana Sirsasana', intensity: 5, duration: 60 },
      { id: 'headstand_tripod', name: 'Tripod Headstand', sanskrit: 'Mukta Hasta Sirsasana', intensity: 5, duration: 60 }
    ]
  },

  // ===== RESTORATIVE =====
  childs_pose: {
    id: 'childs_pose',
    name: "Child's Pose",
    sanskrit: 'Balasana',
    family: 'Restorative',
    intensity: 1,
    duration: 120,
    muscles: ['Back', 'Hips', 'Shoulders'],
    benefits: ['Rest', 'Calm', 'Release'],
    instructions: 'Sit on heels, fold forward. Forehead to mat, arms extended or by sides.',
    variations: [
      { id: 'childs_pose_extended', name: 'Extended Child\'s Pose', sanskrit: 'Utthita Balasana', intensity: 1, duration: 120 },
      { id: 'childs_pose_wide_knee', name: 'Wide-Knee Child\'s Pose', sanskrit: 'Balasana Variation', intensity: 1, duration: 120 },
      { id: 'childs_pose_thread_needle', name: 'Thread the Needle', sanskrit: 'Parsva Balasana', intensity: 1, duration: 90 },
      { id: 'childs_pose_puppy', name: 'Puppy Pose', sanskrit: 'Uttana Shishosana', intensity: 2, duration: 90 },
      { id: 'childs_pose_rabbit', name: 'Rabbit Pose', sanskrit: 'Sasangasana', intensity: 2, duration: 60 }
    ]
  },

  savasana: {
    id: 'savasana',
    name: 'Corpse Pose',
    sanskrit: 'Savasana',
    family: 'Restorative',
    intensity: 1,
    duration: 600,
    muscles: ['Full Body'],
    benefits: ['Relaxation', 'Integration', 'Peace'],
    instructions: 'Lie flat on back, arms and legs relaxed. Close eyes. Complete stillness.',
    variations: [
      { id: 'savasana_supported', name: 'Supported Savasana', sanskrit: 'Savasana Variation', intensity: 1, duration: 600 },
      { id: 'savasana_constructive_rest', name: 'Constructive Rest', sanskrit: 'Savasana Prep', intensity: 1, duration: 300 },
      { id: 'savasana_legs_up_wall', name: 'Legs Up the Wall', sanskrit: 'Viparita Karani', intensity: 1, duration: 300 },
      { id: 'savasana_supported_fish', name: 'Supported Fish', sanskrit: 'Matsyasana Restorative', intensity: 1, duration: 180 },
      { id: 'savasana_yoga_nidra', name: 'Yoga Nidra Position', sanskrit: 'Savasana', intensity: 1, duration: 1200 }
    ]
  },

  // Continue with more poses...
  // Add 50+ more base poses following this pattern
};

// Helper function to get all poses including variations
function getAllPosesWithVariations() {
  const allPoses = [];
  
  Object.values(POSE_LIBRARY).forEach(pose => {
    // Add main pose
    allPoses.push(pose);
    
    // Add all variations
    if (pose.variations && pose.variations.length > 0) {
      pose.variations.forEach(variation => {
        allPoses.push({
          ...variation,
          parentPose: pose.id,
          family: pose.family,
          isVariation: true
        });
      });
    }
  });
  
  return allPoses;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { POSE_LIBRARY, getAllPosesWithVariations };
} return allPoses;
}

// 1. BROADCAST THE DATA TO THE STUDIO (Add these lines)
window.yogaLibraryData = POSE_LIBRARY;
window.yogaLibraryVariations = getAllPosesWithVariations();

// 2. The Export lines (Keep these as they were)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { POSE_LIBRARY, getAllPosesWithVariations };
}
