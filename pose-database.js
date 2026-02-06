/**
 * Presence Vault - Master Pose Database
 * Contains: Original 25 + 25 New Advanced & Tummee Additions
 */

const POSE_DATABASE = {
    // STANDING POSES
    standing: [
        { id: 1, name: "Mountain Pose", sanskrit: "Tadasana", level: "Beginner", muscles: ["Core", "Legs"], benefits: ["Posture", "Balance"], duration: 30, category: "standing" },
        { id: 2, name: "Warrior I", sanskrit: "Virabhadrasana I", level: "Beginner", muscles: ["Legs", "Core", "Shoulders"], benefits: ["Strength", "Focus"], duration: 30, category: "standing" },
        { id: 3, name: "Warrior II", sanskrit: "Virabhadrasana II", level: "Beginner", muscles: ["Legs", "Arms", "Core"], benefits: ["Stamina", "Concentration"], duration: 30, category: "standing" },
        { id: 4, name: "Warrior III", sanskrit: "Virabhadrasana III", level: "Intermediate", muscles: ["Legs", "Core", "Back"], benefits: ["Balance", "Strength"], duration: 30, category: "standing" },
        { id: 5, name: "Triangle Pose", sanskrit: "Trikonasana", level: "Beginner", muscles: ["Legs", "Obliques"], benefits: ["Flexibility", "Digestion"], duration: 30, category: "standing" },
        { id: 6, name: "Extended Triangle", sanskrit: "Utthita Trikonasana", level: "Beginner", muscles: ["Legs", "Side Body"], benefits: ["Stretch", "Balance"], duration: 30, category: "standing" },
        { id: 7, name: "Tree Pose", sanskrit: "Vrksasana", level: "Beginner", muscles: ["Legs", "Core"], benefits: ["Balance", "Focus"], duration: 60, category: "standing" },
        { id: 8, name: "Half Moon Pose", sanskrit: "Ardha Chandrasana", level: "Intermediate", muscles: ["Legs", "Core", "Hips"], benefits: ["Balance", "Coordination"], duration: 30, category: "standing" },
        { id: 9, name: "Eagle Pose", sanskrit: "Garudasana", level: "Intermediate", muscles: ["Legs", "Arms", "Back"], benefits: ["Balance", "Concentration"], duration: 30, category: "standing" },
        { id: 10, name: "Extended Side Angle", sanskrit: "Utthita Parsvakonasana", level: "Beginner", muscles: ["Legs", "Obliques"], benefits: ["Strength", "Stretch"], duration: 30, category: "standing" },
        { id: 11, name: "Reverse Warrior", sanskrit: "Viparita Virabhadrasana", level: "Beginner", muscles: ["Legs", "Side Body"], benefits: ["Stretch", "Energy"], duration: 30, category: "standing" },
        { id: 12, name: "Goddess Pose", sanskrit: "Utkata Konasana", level: "Beginner", muscles: ["Legs", "Hips", "Core"], benefits: ["Strength", "Grounding"], duration: 45, category: "standing" },
        { id: 13, name: "Chair Pose", sanskrit: "Utkatasana", level: "Beginner", muscles: ["Legs", "Core", "Back"], benefits: ["Strength", "Endurance"], duration: 30, category: "standing" },
        { id: 14, name: "Revolved Chair", sanskrit: "Parivrtta Utkatasana", level: "Intermediate", muscles: ["Legs", "Core", "Spine"], benefits: ["Twist", "Balance"], duration: 30, category: "standing" },
        { id: 15, name: "High Lunge", sanskrit: "Utthita Ashwa Sanchalanasana", level: "Beginner", muscles: ["Legs", "Hip Flexors"], benefits: ["Strength", "Stretch"], duration: 30, category: "standing" },
        { id: 16, name: "Crescent Lunge", sanskrit: "Anjaneyasana Variation", level: "Beginner", muscles: ["Legs", "Hip Flexors", "Core"], benefits: ["Strength", "Opening"], duration: 30, category: "standing" },
        { id: 17, name: "Standing Forward Fold", sanskrit: "Uttanasana", level: "Beginner", muscles: ["Hamstrings", "Back"], benefits: ["Flexibility", "Calm"], duration: 30, category: "standing" },
        { id: 18, name: "Wide-Legged Forward Fold", sanskrit: "Prasarita Padottanasana", level: "Beginner", muscles: ["Hamstrings", "Inner Thighs"], benefits: ["Stretch", "Inversion"], duration: 30, category: "standing" },
        { id: 19, name: "Pyramid Pose", sanskrit: "Parsvottanasana", level: "Intermediate", muscles: ["Hamstrings", "Hips"], benefits: ["Balance", "Stretch"], duration: 30, category: "standing" },
        { id: 20, name: "Revolved Triangle", sanskrit: "Parivrtta Trikonasana", level: "Intermediate", muscles: ["Legs", "Spine", "Core"], benefits: ["Twist", "Balance"], duration: 30, category: "standing" },
        { id: 21, name: "Standing Split", sanskrit: "Urdhva Prasarita Eka Padasana", level: "Advanced", muscles: ["Hamstrings", "Balance"], benefits: ["Flexibility", "Focus"], duration: 30, category: "standing" },
        { id: 22, name: "Dancer Pose", sanskrit: "Natarajasana", level: "Intermediate", muscles: ["Legs", "Back", "Shoulders"], benefits: ["Balance", "Backbend"], duration: 30, category: "standing" },
        { id: 23, name: "Revolved Side Angle", sanskrit: "Parivrtta Parsvakonasana", level: "Intermediate", muscles: ["Legs", "Core", "Spine"], benefits: ["Twist", "Strength"], duration: 30, category: "standing" },
        { id: 24, name: "Standing Hand to Big Toe", sanskrit: "Utthita Hasta Padangusthasana", level: "Intermediate", muscles: ["Hamstrings", "Hip Flexors"], benefits: ["Balance", "Stretch"], duration: 30, category: "standing" },
        { id: 25, name: "Figure Four", sanskrit: "Eka Pada Utkatasana", level: "Intermediate", muscles: ["Hips", "Glutes", "Legs"], benefits: ["Hip Opening", "Balance"], duration: 30, category: "standing" },
        { id: 26, name: "Humble Warrior", sanskrit: "Baddha Virabhadrasana", level: "Intermediate", muscles: ["Legs", "Shoulders"], benefits: ["Surrender", "Hip Opening"], duration: 30, category: "standing" },
        { id: 27, name: "Bird of Paradise", sanskrit: "Svarga Dvijasana", level: "Advanced", muscles: ["Hamstrings", "Shoulders", "Legs"], benefits: ["Balance", "Flexibility"], duration: 30, category: "standing" },
        { id: 28, name: "Standing Fire Hydrant", sanskrit: "Dandayamana Bharmanasana Variation", level: "Intermediate", muscles: ["Glutes", "Core"], benefits: ["Balance", "Outer Hip Strength"], duration: 30, category: "standing" },
        { id: 29, name: "Lord Krishna's Pose", sanskrit: "Natvarasana", level: "Beginner", muscles: ["Ankles", "Core"], benefits: ["Gentle Balance", "Focus"], duration: 45, category: "standing" },
        { id: 30, name: "Super Soldier Pose", sanskrit: "Viparita Parivritta Surya Yantrasana", level: "Advanced", muscles: ["Hamstrings", "Shoulders"], benefits: ["Deep Twist", "Flexibility"], duration: 20, category: "standing" },
        { id: 31, name: "Fallen Triangle", sanskrit: "Patita Tarasana", level: "Intermediate", muscles: ["Core", "Shoulders", "Hips"], benefits: ["Balance", "Core Strength"], duration: 30, category: "standing" }
    ],

    // SEATED POSES
    seated: [
        { id: 101, name: "Easy Pose", sanskrit: "Sukhasana", level: "Beginner", muscles: ["Hips", "Back"], benefits: ["Meditation", "Calm"], duration: 300, category: "seated" },
        { id: 102, name: "Staff Pose", sanskrit: "Dandasana", level: "Beginner", muscles: ["Core", "Back"], benefits: ["Posture", "Foundation"], duration: 30, category: "seated" },
        { id: 103, name: "Seated Forward Fold", sanskrit: "Paschimottanasana", level: "Beginner", muscles: ["Hamstrings", "Back"], benefits: ["Flexibility", "Calm"], duration: 60, category: "seated" },
        { id: 104, name: "Head to Knee Pose", sanskrit: "Janu Sirsasana", level: "Beginner", muscles: ["Hamstrings", "Back"], benefits: ["Stretch", "Relaxation"], duration: 45, category: "seated" },
        { id: 105, name: "Lotus Pose", sanskrit: "Padmasana", level: "Advanced", muscles: ["Hips", "Knees"], benefits: ["Meditation", "Hip Opening"], duration: 300, category: "seated" },
        { id: 106, name: "Compass Pose", sanskrit: "Parivrtta Surya Yantrasana", level: "Advanced", muscles: ["Hamstrings", "Shoulders"], benefits: ["Deep Stretch", "Flexibility"], duration: 30, category: "seated" },
        { id: 107, name: "Shoelace Pose", sanskrit: "Gomukhasana Variation", level: "Intermediate", muscles: ["Outer Hips", "Glutes"], benefits: ["Hip Opening", "Decompression"], duration: 120, category: "seated" },
        { id: 108, name: "Deer Pose", sanskrit: "Mrigasana", level: "Beginner", muscles: ["Hips"], benefits: ["Internal Rotation", "Digestion"], duration: 180, category: "seated" }
    ],

    // BACKBENDS
    backbends: [
        { id: 201, name: "Cobra Pose", sanskrit: "Bhujangasana", level: "Beginner", muscles: ["Back", "Chest"], benefits: ["Backbend", "Energy"], duration: 30, category: "backbends" },
        { id: 202, name: "Wheel Pose", sanskrit: "Urdhva Dhanurasana", level: "Advanced", muscles: ["Back", "Arms", "Legs"], benefits: ["Backbend", "Energy"], duration: 30, category: "backbends" },
        { id: 203, name: "Wild Thing", sanskrit: "Camatkarasana", level: "Intermediate", muscles: ["Back", "Shoulders", "Chest"], benefits: ["Heart Opening", "Energy"], duration: 30, category: "backbends" },
        { id: 204, name: "Heavenly Spirits Pose", sanskrit: "Valakhilyasana", level: "Advanced", muscles: ["Spine", "Psoas"], benefits: ["Intense Backbend", "Grace"], duration: 20, category: "backbends" }
    ],

    // INVERSIONS & ARM BALANCES
    inversions: [
        { id: 301, name: "Downward Facing Dog", sanskrit: "Adho Mukha Svanasana", level: "Beginner", muscles: ["Shoulders", "Hamstrings", "Back"], benefits: ["Inversion", "Stretch"], duration: 60, category: "inversions" },
        { id: 302, name: "Crow Pose", sanskrit: "Bakasana", level: "Intermediate", muscles: ["Arms", "Core"], benefits: ["Arm Balance", "Focus"], duration: 30, category: "inversions" },
        { id: 303, name: "Flying Pigeon", sanskrit: "Eka Pada Galavasana", level: "Advanced", muscles: ["Arms", "Core", "Hips"], benefits: ["Arm Balance", "Focus"], duration: 20, category: "inversions" },
        { id: 304, name: "Baby Grasshopper", sanskrit: "Bala Parsva Bhuja Dandasana", level: "Intermediate", muscles: ["Arms", "Hips"], benefits: ["Hip Opening", "Strength"], duration: 30, category: "inversions" },
        { id: 305, name: "Tripod Headstand", sanskrit: "Sirsasana II", level: "Advanced", muscles: ["Core", "Shoulders"], benefits: ["Inversion", "Stability"], duration: 45, category: "inversions" }
    ],

    // RESTORATIVE
    restorative: [
        { id: 501, name: "Child's Pose", sanskrit: "Balasana", level: "Beginner", muscles: ["Back", "Hips"], benefits: ["Rest", "Calm"], duration: 120, category: "restorative" },
        { id: 502, name: "Corpse Pose", sanskrit: "Savasana", level: "Beginner", muscles: ["Full Body"], benefits: ["Relaxation", "Integration"], duration: 600, category: "restorative" },
        { id: 503, name: "Melting Heart", sanskrit: "Anahatasana", level: "Beginner", muscles: ["Shoulders", "Spine"], benefits: ["Shoulder Opening"], duration: 180, category: "restorative" },
        { id: 504, name: "Banana Pose", sanskrit: "Bananasana", level: "Beginner", muscles: ["Obliques", "Side Body"], benefits: ["Passive Stretch"], duration: 240, category: "restorative" },
        { id: 505, name: "Sphinx with Half Frog", sanskrit: "Ardha Bhekasana Variation", level: "Beginner", muscles: ["Lower Back", "Inner Thighs"], benefits: ["Gentle Backbend", "Hip Release"], duration: 120, category: "restorative" }
    ],

    // CORE
    core: [
        { id: 601, name: "Boat Pose", sanskrit: "Navasana", level: "Intermediate", muscles: ["Core", "Hip Flexors"], benefits: ["Strength", "Balance"], duration: 30, category: "core" },
        { id: 602, name: "Plank Pose", sanskrit: "Phalakasana", level: "Beginner", muscles: ["Core", "Shoulders"], benefits: ["Strength", "Stability"], duration: 60, category: "core" },
        { id: 603, name: "Scale Pose", sanskrit: "Tolasana", level: "Advanced", muscles: ["Core", "Arms"], benefits: ["Core Power"], duration: 15, category: "core" }
    ]
};

// Flatten all poses into single searchable array
const ALL_POSES = Object.entries(POSE_DATABASE).reduce((acc, [category, poses]) => {
    return acc.concat(poses.map(pose => ({ ...pose, category })));
}, []);

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { POSE_DATABASE, ALL_POSES };
}
