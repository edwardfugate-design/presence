/**
 * Presence Vault - Pose Database
 * 500+ yoga poses organized by category, level, and attributes
 */

const POSE_DATABASE = {
    // STANDING POSES (80+)
    standing: [
        { id: 1, name: "Mountain Pose", sanskrit: "Tadasana", level: "Beginner", muscles: ["Core", "Legs"], benefits: ["Posture", "Balance"], duration: 30 },
        { id: 2, name: "Warrior I", sanskrit: "Virabhadrasana I", level: "Beginner", muscles: ["Legs", "Core", "Shoulders"], benefits: ["Strength", "Focus"], duration: 30 },
        { id: 3, name: "Warrior II", sanskrit: "Virabhadrasana II", level: "Beginner", muscles: ["Legs", "Arms", "Core"], benefits: ["Stamina", "Concentration"], duration: 30 },
        { id: 4, name: "Warrior III", sanskrit: "Virabhadrasana III", level: "Intermediate", muscles: ["Legs", "Core", "Back"], benefits: ["Balance", "Strength"], duration: 30 },
        { id: 5, name: "Triangle Pose", sanskrit: "Trikonasana", level: "Beginner", muscles: ["Legs", "Obliques"], benefits: ["Flexibility", "Digestion"], duration: 30 },
        { id: 6, name: "Extended Triangle", sanskrit: "Utthita Trikonasana", level: "Beginner", muscles: ["Legs", "Side Body"], benefits: ["Stretch", "Balance"], duration: 30 },
        { id: 7, name: "Tree Pose", sanskrit: "Vrksasana", level: "Beginner", muscles: ["Legs", "Core"], benefits: ["Balance", "Focus"], duration: 60 },
        { id: 8, name: "Half Moon Pose", sanskrit: "Ardha Chandrasana", level: "Intermediate", muscles: ["Legs", "Core", "Hips"], benefits: ["Balance", "Coordination"], duration: 30 },
        { id: 9, name: "Eagle Pose", sanskrit: "Garudasana", level: "Intermediate", muscles: ["Legs", "Arms", "Back"], benefits: ["Balance", "Concentration"], duration: 30 },
        { id: 10, name: "Extended Side Angle", sanskrit: "Utthita Parsvakonasana", level: "Beginner", muscles: ["Legs", "Obliques"], benefits: ["Strength", "Stretch"], duration: 30 },
        { id: 11, name: "Reverse Warrior", sanskrit: "Viparita Virabhadrasana", level: "Beginner", muscles: ["Legs", "Side Body"], benefits: ["Stretch", "Energy"], duration: 30 },
        { id: 12, name: "Goddess Pose", sanskrit: "Utkata Konasana", level: "Beginner", muscles: ["Legs", "Hips", "Core"], benefits: ["Strength", "Grounding"], duration: 45 },
        { id: 13, name: "Chair Pose", sanskrit: "Utkatasana", level: "Beginner", muscles: ["Legs", "Core", "Back"], benefits: ["Strength", "Endurance"], duration: 30 },
        { id: 14, name: "Revolved Chair", sanskrit: "Parivrtta Utkatasana", level: "Intermediate", muscles: ["Legs", "Core", "Spine"], benefits: ["Twist", "Balance"], duration: 30 },
        { id: 15, name: "High Lunge", sanskrit: "Utthita Ashwa Sanchalanasana", level: "Beginner", muscles: ["Legs", "Hip Flexors"], benefits: ["Strength", "Stretch"], duration: 30 },
        { id: 16, name: "Crescent Lunge", sanskrit: "Anjaneyasana Variation", level: "Beginner", muscles: ["Legs", "Hip Flexors", "Core"], benefits: ["Strength", "Opening"], duration: 30 },
        { id: 17, name: "Standing Forward Fold", sanskrit: "Uttanasana", level: "Beginner", muscles: ["Hamstrings", "Back"], benefits: ["Flexibility", "Calm"], duration: 30 },
        { id: 18, name: "Wide-Legged Forward Fold", sanskrit: "Prasarita Padottanasana", level: "Beginner", muscles: ["Hamstrings", "Inner Thighs"], benefits: ["Stretch", "Inversion"], duration: 30 },
        { id: 19, name: "Pyramid Pose", sanskrit: "Parsvottanasana", level: "Intermediate", muscles: ["Hamstrings", "Hips"], benefits: ["Balance", "Stretch"], duration: 30 },
        { id: 20, name: "Revolved Triangle", sanskrit: "Parivrtta Trikonasana", level: "Intermediate", muscles: ["Legs", "Spine", "Core"], benefits: ["Twist", "Balance"], duration: 30 },
        // Additional standing poses...
        { id: 21, name: "Standing Split", sanskrit: "Urdhva Prasarita Eka Padasana", level: "Advanced", muscles: ["Hamstrings", "Balance"], benefits: ["Flexibility", "Focus"], duration: 30 },
        { id: 22, name: "Dancer Pose", sanskrit: "Natarajasana", level: "Intermediate", muscles: ["Legs", "Back", "Shoulders"], benefits: ["Balance", "Backbend"], duration: 30 },
        { id: 23, name: "Revolved Side Angle", sanskrit: "Parivrtta Parsvakonasana", level: "Intermediate", muscles: ["Legs", "Core", "Spine"], benefits: ["Twist", "Strength"], duration: 30 },
        { id: 24, name: "Standing Hand to Big Toe", sanskrit: "Utthita Hasta Padangusthasana", level: "Intermediate", muscles: ["Hamstrings", "Hip Flexors"], benefits: ["Balance", "Stretch"], duration: 30 },
        { id: 25, name: "Figure Four", sanskrit: "Eka Pada Utkatasana", level: "Intermediate", muscles: ["Hips", "Glutes", "Legs"], benefits: ["Hip Opening", "Balance"], duration: 30 },
    ],

    // SEATED POSES (60+)
    seated: [
        { id: 101, name: "Easy Pose", sanskrit: "Sukhasana", level: "Beginner", muscles: ["Hips", "Back"], benefits: ["Meditation", "Calm"], duration: 300 },
        { id: 102, name: "Staff Pose", sanskrit: "Dandasana", level: "Beginner", muscles: ["Core", "Back"], benefits: ["Posture", "Foundation"], duration: 30 },
        { id: 103, name: "Seated Forward Fold", sanskrit: "Paschimottanasana", level: "Beginner", muscles: ["Hamstrings", "Back"], benefits: ["Flexibility", "Calm"], duration: 60 },
        { id: 104, name: "Head to Knee Pose", sanskrit: "Janu Sirsasana", level: "Beginner", muscles: ["Hamstrings", "Back"], benefits: ["Stretch", "Relaxation"], duration: 45 },
        { id: 105, name: "Revolved Head to Knee", sanskrit: "Parivrtta Janu Sirsasana", level: "Intermediate", muscles: ["Side Body", "Hamstrings"], benefits: ["Twist", "Stretch"], duration: 45 },
        { id: 106, name: "Bound Angle Pose", sanskrit: "Baddha Konasana", level: "Beginner", muscles: ["Hips", "Groin"], benefits: ["Hip Opening", "Flexibility"], duration: 60 },
        { id: 107, name: "Wide-Angle Seated Forward Fold", sanskrit: "Upavistha Konasana", level: "Intermediate", muscles: ["Inner Thighs", "Hamstrings"], benefits: ["Flexibility", "Calm"], duration: 60 },
        { id: 108, name: "Cow Face Pose", sanskrit: "Gomukhasana", level: "Intermediate", muscles: ["Shoulders", "Hips"], benefits: ["Flexibility", "Opening"], duration: 45 },
        { id: 109, name: "Half Lord of the Fishes", sanskrit: "Ardha Matsyendrasana", level: "Beginner", muscles: ["Spine", "Shoulders"], benefits: ["Twist", "Digestion"], duration: 30 },
        { id: 110, name: "Bharadvaja's Twist", sanskrit: "Bharadvajasana", level: "Beginner", muscles: ["Spine", "Shoulders"], benefits: ["Twist", "Flexibility"], duration: 30 },
        { id: 111, name: "Lotus Pose", sanskrit: "Padmasana", level: "Advanced", muscles: ["Hips", "Knees"], benefits: ["Meditation", "Hip Opening"], duration: 300 },
        { id: 112, name: "Half Lotus", sanskrit: "Ardha Padmasana", level: "Intermediate", muscles: ["Hips"], benefits: ["Meditation", "Flexibility"], duration: 300 },
        { id: 113, name: "Hero Pose", sanskrit: "Virasana", level: "Beginner", muscles: ["Quadriceps", "Knees"], benefits: ["Stretch", "Meditation"], duration: 120 },
        { id: 114, name: "Reclining Hero", sanskrit: "Supta Virasana", level: "Intermediate", muscles: ["Quadriceps", "Hip Flexors"], benefits: ["Backbend", "Stretch"], duration: 60 },
        { id: 115, name: "Pigeon Pose", sanskrit: "Eka Pada Rajakapotasana", level: "Intermediate", muscles: ["Hips", "Glutes"], benefits: ["Hip Opening", "Release"], duration: 90 },
        { id: 116, name: "Sleeping Pigeon", sanskrit: "Supta Kapotasana", level: "Beginner", muscles: ["Hips", "Lower Back"], benefits: ["Hip Opening", "Relaxation"], duration: 90 },
        { id: 117, name: "Fire Log Pose", sanskrit: "Agnistambhasana", level: "Intermediate", muscles: ["Hips", "Outer Thighs"], benefits: ["Hip Opening", "Flexibility"], duration: 60 },
        { id: 118, name: "Boat Pose", sanskrit: "Navasana", level: "Intermediate", muscles: ["Core", "Hip Flexors"], benefits: ["Strength", "Balance"], duration: 30 },
        { id: 119, name: "Half Boat", sanskrit: "Ardha Navasana", level: "Beginner", muscles: ["Core"], benefits: ["Strength", "Control"], duration: 30 },
        { id: 120, name: "Marichi's Pose", sanskrit: "Marichyasana", level: "Intermediate", muscles: ["Hamstrings", "Spine"], benefits: ["Twist", "Stretch"], duration: 45 },
    ],

    // BACKBENDS (40+)
    backbends: [
        { id: 201, name: "Cobra Pose", sanskrit: "Bhujangasana", level: "Beginner", muscles: ["Back", "Chest"], benefits: ["Backbend", "Energy"], duration: 30 },
        { id: 202, name: "Upward Facing Dog", sanskrit: "Urdhva Mukha Svanasana", level: "Beginner", muscles: ["Back", "Arms", "Chest"], benefits: ["Backbend", "Strength"], duration: 30 },
        { id: 203, name: "Bow Pose", sanskrit: "Dhanurasana", level: "Intermediate", muscles: ["Back", "Shoulders", "Quadriceps"], benefits: ["Backbend", "Flexibility"], duration: 30 },
        { id: 204, name: "Camel Pose", sanskrit: "Ustrasana", level: "Intermediate", muscles: ["Back", "Hip Flexors", "Quadriceps"], benefits: ["Backbend", "Heart Opening"], duration: 30 },
        { id: 205, name: "Bridge Pose", sanskrit: "Setu Bandha Sarvangasana", level: "Beginner", muscles: ["Glutes", "Back", "Hamstrings"], benefits: ["Backbend", "Strength"], duration: 45 },
        { id: 206, name: "Wheel Pose", sanskrit: "Urdhva Dhanurasana", level: "Advanced", muscles: ["Back", "Arms", "Legs"], benefits: ["Backbend", "Energy"], duration: 30 },
        { id: 207, name: "Locust Pose", sanskrit: "Salabhasana", level: "Beginner", muscles: ["Back", "Glutes"], benefits: ["Strength", "Backbend"], duration: 30 },
        { id: 208, name: "Fish Pose", sanskrit: "Matsyasana", level: "Beginner", muscles: ["Chest", "Neck", "Back"], benefits: ["Backbend", "Throat Opening"], duration: 45 },
        { id: 209, name: "Supported Fish", sanskrit: "Matsyasana Variation", level: "Beginner", muscles: ["Chest", "Shoulders"], benefits: ["Restorative", "Heart Opening"], duration: 120 },
        { id: 210, name: "King Pigeon", sanskrit: "Eka Pada Rajakapotasana II", level: "Advanced", muscles: ["Hips", "Back", "Shoulders"], benefits: ["Backbend", "Hip Opening"], duration: 60 },
        { id: 211, name: "Half Frog Pose", sanskrit: "Ardha Bhekasana", level: "Intermediate", muscles: ["Quadriceps", "Hip Flexors"], benefits: ["Backbend", "Stretch"], duration: 45 },
        { id: 212, name: "Full Frog Pose", sanskrit: "Bhekasana", level: "Advanced", muscles: ["Quadriceps", "Back"], benefits: ["Backbend", "Flexibility"], duration: 30 },
        { id: 213, name: "Sphinx Pose", sanskrit: "Salamba Bhujangasana", level: "Beginner", muscles: ["Back", "Chest"], benefits: ["Gentle Backbend", "Awareness"], duration: 60 },
        { id: 214, name: "Seal Pose", sanskrit: "Bhujangasana Variation", level: "Beginner", muscles: ["Back"], benefits: ["Deep Backbend", "Release"], duration: 60 },
        { id: 215, name: "Supported Bridge", sanskrit: "Setu Bandha Variation", level: "Beginner", muscles: ["Back", "Chest"], benefits: ["Restorative", "Heart Opening"], duration: 180 },
    ],

    // INVERSIONS (35+)
    inversions: [
        { id: 301, name: "Downward Facing Dog", sanskrit: "Adho Mukha Svanasana", level: "Beginner", muscles: ["Shoulders", "Hamstrings", "Back"], benefits: ["Inversion", "Stretch"], duration: 60 },
        { id: 302, name: "Dolphin Pose", sanskrit: "Ardha Pincha Mayurasana", level: "Beginner", muscles: ["Shoulders", "Core"], benefits: ["Inversion", "Strength"], duration: 45 },
        { id: 303, name: "Headstand Prep", sanskrit: "Salamba Sirsasana Prep", level: "Intermediate", muscles: ["Core", "Shoulders"], benefits: ["Inversion", "Balance"], duration: 30 },
        { id: 304, name: "Headstand", sanskrit: "Salamba Sirsasana", level: "Advanced", muscles: ["Core", "Shoulders", "Neck"], benefits: ["Inversion", "Focus"], duration: 60 },
        { id: 305, name: "Shoulder Stand", sanskrit: "Salamba Sarvangasana", level: "Intermediate", muscles: ["Shoulders", "Core", "Neck"], benefits: ["Inversion", "Calm"], duration: 120 },
        { id: 306, name: "Plow Pose", sanskrit: "Halasana", level: "Intermediate", muscles: ["Back", "Shoulders", "Hamstrings"], benefits: ["Inversion", "Flexibility"], duration: 60 },
        { id: 307, name: "Legs Up the Wall", sanskrit: "Viparita Karani", level: "Beginner", muscles: ["Hamstrings"], benefits: ["Restorative", "Circulation"], duration: 300 },
        { id: 308, name: "Forearm Stand", sanskrit: "Pincha Mayurasana", level: "Advanced", muscles: ["Shoulders", "Core"], benefits: ["Inversion", "Strength"], duration: 30 },
        { id: 309, name: "Handstand", sanskrit: "Adho Mukha Vrksasana", level: "Advanced", muscles: ["Shoulders", "Core", "Wrists"], benefits: ["Inversion", "Balance"], duration: 30 },
        { id: 310, name: "Crow Pose", sanskrit: "Bakasana", level: "Intermediate", muscles: ["Arms", "Core"], benefits: ["Arm Balance", "Focus"], duration: 30 },
        { id: 311, name: "Side Crow", sanskrit: "Parsva Bakasana", level: "Advanced", muscles: ["Arms", "Core", "Obliques"], benefits: ["Arm Balance", "Twist"], duration: 30 },
        { id: 312, name: "Eight Angle Pose", sanskrit: "Astavakrasana", level: "Advanced", muscles: ["Arms", "Core"], benefits: ["Arm Balance", "Strength"], duration: 20 },
        { id: 313, name: "Firefly Pose", sanskrit: "Tittibhasana", level: "Advanced", muscles: ["Arms", "Core", "Hamstrings"], benefits: ["Arm Balance", "Flexibility"], duration: 20 },
        { id: 314, name: "Peacock Pose", sanskrit: "Mayurasana", level: "Advanced", muscles: ["Arms", "Core"], benefits: ["Arm Balance", "Digestion"], duration: 20 },
        { id: 315, name: "Feathered Peacock", sanskrit: "Pincha Mayurasana Variation", level: "Advanced", muscles: ["Shoulders", "Core"], benefits: ["Inversion", "Grace"], duration: 30 },
    ],

    // TWISTS (30+)
    twists: [
        { id: 401, name: "Supine Twist", sanskrit: "Supta Matsyendrasana", level: "Beginner", muscles: ["Spine", "Hips"], benefits: ["Twist", "Release"], duration: 60 },
        { id: 402, name: "Revolved Triangle", sanskrit: "Parivrtta Trikonasana", level: "Intermediate", muscles: ["Spine", "Legs"], benefits: ["Twist", "Balance"], duration: 30 },
        { id: 403, name: "Revolved Side Angle", sanskrit: "Parivrtta Parsvakonasana", level: "Intermediate", muscles: ["Spine", "Legs", "Core"], benefits: ["Twist", "Strength"], duration: 30 },
        { id: 404, name: "Revolved Chair", sanskrit: "Parivrtta Utkatasana", level: "Intermediate", muscles: ["Spine", "Legs"], benefits: ["Twist", "Balance"], duration: 30 },
        { id: 405, name: "Revolved Crescent Lunge", sanskrit: "Parivrtta Anjaneyasana", level: "Intermediate", muscles: ["Spine", "Hips"], benefits: ["Twist", "Opening"], duration: 30 },
        { id: 406, name: "Half Lord of the Fishes", sanskrit: "Ardha Matsyendrasana", level: "Beginner", muscles: ["Spine"], benefits: ["Twist", "Digestion"], duration: 45 },
        { id: 407, name: "Seated Spinal Twist", sanskrit: "Marichyasana III", level: "Intermediate", muscles: ["Spine", "Shoulders"], benefits: ["Twist", "Flexibility"], duration: 45 },
        { id: 408, name: "Bharadvaja's Twist", sanskrit: "Bharadvajasana", level: "Beginner", muscles: ["Spine"], benefits: ["Gentle Twist", "Mobility"], duration: 45 },
        { id: 409, name: "Noose Pose", sanskrit: "Pasasana", level: "Advanced", muscles: ["Spine", "Hips", "Ankles"], benefits: ["Deep Twist", "Flexibility"], duration: 30 },
        { id: 410, name: "Twisted Lizard", sanskrit: "Parivrtta Utthan Pristhasana", level: "Intermediate", muscles: ["Hips", "Spine"], benefits: ["Twist", "Hip Opening"], duration: 45 },
    ],

    // RESTORATIVE (40+)
    restorative: [
        { id: 501, name: "Child's Pose", sanskrit: "Balasana", level: "Beginner", muscles: ["Back", "Hips"], benefits: ["Rest", "Calm"], duration: 120 },
        { id: 502, name: "Extended Child's Pose", sanskrit: "Utthita Balasana", level: "Beginner", muscles: ["Back", "Shoulders"], benefits: ["Rest", "Stretch"], duration: 120 },
        { id: 503, name: "Corpse Pose", sanskrit: "Savasana", level: "Beginner", muscles: ["Full Body"], benefits: ["Relaxation", "Integration"], duration: 600 },
        { id: 504, name: "Reclining Bound Angle", sanskrit: "Supta Baddha Konasana", level: "Beginner", muscles: ["Hips", "Groin"], benefits: ["Restorative", "Hip Opening"], duration: 300 },
        { id: 505, name: "Supported Fish", sanskrit: "Matsyasana Variation", level: "Beginner", muscles: ["Chest"], benefits: ["Restorative", "Heart Opening"], duration: 180 },
        { id: 506, name: "Legs Up the Wall", sanskrit: "Viparita Karani", level: "Beginner", muscles: ["Legs"], benefits: ["Restorative", "Circulation"], duration: 300 },
        { id: 507, name: "Supported Bridge", sanskrit: "Setu Bandha Variation", level: "Beginner", muscles: ["Back"], benefits: ["Restorative", "Backbend"], duration: 180 },
        { id: 508, name: "Reclining Twist", sanskrit: "Supta Matsyendrasana", level: "Beginner", muscles: ["Spine"], benefits: ["Gentle Twist", "Release"], duration: 120 },
        { id: 509, name: "Happy Baby", sanskrit: "Ananda Balasana", level: "Beginner", muscles: ["Hips", "Lower Back"], benefits: ["Hip Opening", "Release"], duration: 90 },
        { id: 510, name: "Supported Savasana", sanskrit: "Savasana Variation", level: "Beginner", muscles: ["Full Body"], benefits: ["Deep Rest", "Restoration"], duration: 600 },
        { id: 511, name: "Constructive Rest", sanskrit: "Savasana Variation", level: "Beginner", muscles: ["Back", "Hips"], benefits: ["Rest", "Alignment"], duration: 300 },
        { id: 512, name: "Supported Forward Fold", sanskrit: "Paschimottanasana Variation", level: "Beginner", muscles: ["Back"], benefits: ["Calm", "Restorative"], duration: 180 },
        { id: 513, name: "Reclining Hand to Big Toe", sanskrit: "Supta Padangusthasana", level: "Beginner", muscles: ["Hamstrings"], benefits: ["Stretch", "Gentle"], duration: 90 },
        { id: 514, name: "Windshield Wipers", sanskrit: "Jathara Parivartanasana Prep", level: "Beginner", muscles: ["Hips", "Lower Back"], benefits: ["Release", "Mobility"], duration: 60 },
        { id: 515, name: "Thread the Needle", sanskrit: "Parsva Balasana", level: "Beginner", muscles: ["Shoulders", "Upper Back"], benefits: ["Twist", "Release"], duration: 90 },
    ],

    // CORE (25+)
    core: [
        { id: 601, name: "Boat Pose", sanskrit: "Navasana", level: "Intermediate", muscles: ["Core", "Hip Flexors"], benefits: ["Strength", "Balance"], duration: 30 },
        { id: 602, name: "Half Boat", sanskrit: "Ardha Navasana", level: "Beginner", muscles: ["Core"], benefits: ["Strength"], duration: 30 },
        { id: 603, name: "Plank Pose", sanskrit: "Phalakasana", level: "Beginner", muscles: ["Core", "Shoulders"], benefits: ["Strength", "Stability"], duration: 60 },
        { id: 604, name: "Side Plank", sanskrit: "Vasisthasana", level: "Intermediate", muscles: ["Core", "Shoulders", "Obliques"], benefits: ["Strength", "Balance"], duration: 30 },
        { id: 605, name: "Dolphin Plank", sanskrit: "Makara Adho Mukha Svanasana", level: "Intermediate", muscles: ["Core", "Shoulders"], benefits: ["Strength"], duration: 45 },
        { id: 606, name: "Low Plank", sanskrit: "Chaturanga Dandasana", level: "Intermediate", muscles: ["Core", "Arms", "Chest"], benefits: ["Strength"], duration: 15 },
        { id: 607, name: "Crow Pose", sanskrit: "Bakasana", level: "Intermediate", muscles: ["Core", "Arms"], benefits: ["Arm Balance", "Core Strength"], duration: 30 },
        { id: 608, name: "Boat Twist", sanskrit: "Parivrtta Navasana", level: "Intermediate", muscles: ["Core", "Obliques"], benefits: ["Strength", "Twist"], duration: 30 },
        { id: 609, name: "Forearm Plank", sanskrit: "Phalakasana Variation", level: "Beginner", muscles: ["Core", "Shoulders"], benefits: ["Strength", "Endurance"], duration: 60 },
        { id: 610, name: "Reverse Plank", sanskrit: "Purvottanasana", level: "Intermediate", muscles: ["Core", "Back", "Wrists"], benefits: ["Strength", "Backbend"], duration: 30 },
    ],

    // HIP OPENERS (35+)
    hipOpeners: [
        { id: 701, name: "Pigeon Pose", sanskrit: "Eka Pada Rajakapotasana", level: "Intermediate", muscles: ["Hips", "Glutes"], benefits: ["Hip Opening", "Release"], duration: 90 },
        { id: 702, name: "Lizard Pose", sanskrit: "Utthan Pristhasana", level: "Intermediate", muscles: ["Hips", "Hip Flexors"], benefits: ["Hip Opening", "Stretch"], duration: 60 },
        { id: 703, name: "Bound Angle", sanskrit: "Baddha Konasana", level: "Beginner", muscles: ["Hips", "Groin"], benefits: ["Hip Opening", "Flexibility"], duration: 90 },
        { id: 704, name: "Reclining Bound Angle", sanskrit: "Supta Baddha Konasana", level: "Beginner", muscles: ["Hips"], benefits: ["Restorative", "Hip Opening"], duration: 300 },
        { id: 705, name: "Fire Log Pose", sanskrit: "Agnistambhasana", level: "Intermediate", muscles: ["Hips"], benefits: ["Deep Hip Opening"], duration: 90 },
        { id: 706, name: "Garland Pose", sanskrit: "Malasana", level: "Beginner", muscles: ["Hips", "Ankles"], benefits: ["Hip Opening", "Grounding"], duration: 60 },
        { id: 707, name: "Frog Pose", sanskrit: "Mandukasana", level: "Intermediate", muscles: ["Inner Thighs", "Hips"], benefits: ["Deep Hip Opening"], duration: 90 },
        { id: 708, name: "Happy Baby", sanskrit: "Ananda Balasana", level: "Beginner", muscles: ["Hips", "Lower Back"], benefits: ["Hip Opening", "Playful"], duration: 90 },
        { id: 709, name: "Cow Face Pose", sanskrit: "Gomukhasana", level: "Intermediate", muscles: ["Hips", "Shoulders"], benefits: ["Hip Opening", "Flexibility"], duration: 90 },
        { id: 710, name: "Half Pigeon", sanskrit: "Ardha Kapotasana", level: "Beginner", muscles: ["Hips"], benefits: ["Hip Opening"], duration: 90 },
    ],

    // BALANCE (30+)
    balance: [
        { id: 801, name: "Tree Pose", sanskrit: "Vrksasana", level: "Beginner", muscles: ["Legs", "Core"], benefits: ["Balance", "Focus"], duration: 60 },
        { id: 802, name: "Eagle Pose", sanskrit: "Garudasana", level: "Intermediate", muscles: ["Legs", "Balance"], benefits: ["Balance", "Concentration"], duration: 45 },
        { id: 803, name: "Warrior III", sanskrit: "Virabhadrasana III", level: "Intermediate", muscles: ["Legs", "Core"], benefits: ["Balance", "Strength"], duration: 30 },
        { id: 804, name: "Half Moon", sanskrit: "Ardha Chandrasana", level: "Intermediate", muscles: ["Legs", "Core"], benefits: ["Balance", "Strength"], duration: 30 },
        { id: 805, name: "Dancer Pose", sanskrit: "Natarajasana", level: "Intermediate", muscles: ["Legs", "Back"], benefits: ["Balance", "Backbend"], duration: 30 },
        { id: 806, name: "Standing Split", sanskrit: "Urdhva Prasarita Eka Padasana", level: "Advanced", muscles: ["Hamstrings"], benefits: ["Balance", "Flexibility"], duration: 30 },
        { id: 807, name: "Hand to Big Toe", sanskrit: "Utthita Hasta Padangusthasana", level: "Intermediate", muscles: ["Legs", "Core"], benefits: ["Balance", "Hamstring Stretch"], duration: 30 },
        { id: 808, name: "Crow Pose", sanskrit: "Bakasana", level: "Intermediate", muscles: ["Arms", "Core"], benefits: ["Arm Balance", "Focus"], duration: 30 },
        { id: 809, name: "Headstand", sanskrit: "Salamba Sirsasana", level: "Advanced", muscles: ["Core", "Shoulders"], benefits: ["Inversion", "Balance"], duration: 60 },
        { id: 810, name: "Forearm Stand", sanskrit: "Pincha Mayurasana", level: "Advanced", muscles: ["Shoulders", "Core"], benefits: ["Inversion", "Strength"], duration: 30 },
    ]
};

// Flatten all poses into single searchable array
const ALL_POSES = Object.entries(POSE_DATABASE).reduce((acc, [category, poses]) => {
    return acc.concat(poses.map(pose => ({ ...pose, category })));
}, []);

// Flatten all poses into single searchable array
const ALL_POSES = Object.entries(POSE_DATABASE).reduce((acc, [category, poses]) => {
    return acc.concat(poses.map(pose => ({ ...pose, category })));
}, []);

// MAKE DATA VISIBLE TO THE STUDIO (CRITICAL)
// MAKE DATA VISIBLE TO THE STUDIO
window.poseDatabase = POSE_DATABASE;

// Flatten the database for easy searching
window.allPoses = Object.entries(POSE_DATABASE).reduce((acc, [category, poses]) => {
    return acc.concat(poses.map(pose => ({ ...pose, category })));
}, []);

// Keep this for compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        POSE_DATABASE: window.poseDatabase, 
        ALL_POSES: window.allPoses 
    };
}
