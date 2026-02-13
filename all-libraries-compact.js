/**
 * Master Library - Unified Format
 * This connects your Alignment Lab and Sequence Builder
 */

// 1. CONVERT THE MOVEMENT LIBRARY TO POSES
const MOVEMENT_DATA = [
    {
        id: 'desk_stretch',
        name: '5-Minute Desk Stretch',
        sanskrit: 'Chair Yoga',
        category: 'Restorative',
        level: 'Beginner',
        philosophy: "Release the tension of the workday.",
        breath: "Inhale length into the spine, exhale the stress of the screen.",
        checkpoints: [
            { label: 'Spine', joint: 'back', ideal: 180 },
            { label: 'Shoulders', joint: 'neck', ideal: 0 }
        ],
        variations: [
            { id: 'standing_desk', name: 'Standing Desk Version' },
            { id: 'chair_only', name: 'Seated Only' }
        ]
    }
];

// 2. CONVERT THE ALIGNMENT LIBRARY TO POSES
const ALIGNMENT_DATA = [
    {
        id: 'posture_check',
        name: 'Standing Posture Check',
        sanskrit: 'Tadasana Alignment',
        category: 'Standing',
        level: 'Beginner',
        philosophy: "The foundation of all movement begins here.",
        breath: "Feel the breath travel from the soles of the feet to the crown.",
        checkpoints: [
            { label: 'Feet Width', joint: 'hips', ideal: 90 },
            { label: 'Knee Softness', joint: 'knees', ideal: 175 },
            { label: 'Shoulder Drop', joint: 'shoulders', ideal: 0 }
        ],
        variations: [
            { id: 'sitting_posture', name: 'Sitting Posture' },
            { id: 'walking_posture', name: 'Walking Posture' }
        ]
    }
];

// 3. THE GLOBAL SOURCE OF TRUTH (This makes the apps work)
window.ALL_POSES = [...MOVEMENT_DATA, ...ALIGNMENT_DATA];

// 4. KEEP YOUR OTHER LIBRARIES FOR FUTURE USE
window.GUIDED_LIBRARY = {
  morning_energy: { id: 'morning_energy', name: 'Morning Energy Boost', category: 'Morning', duration: 600 }
  // ... rest of your guided data
};

window.AMBIENT_LIBRARY = {
  ocean_waves: { id: 'ocean_waves', name: 'Ocean Waves', category: 'Nature' }
  // ... rest of your ambient data
};

console.log("Master Database Loaded: ", window.ALL_POSES.length, " poses available.");
