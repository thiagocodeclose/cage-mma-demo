// lib/site-data.ts
export const studioInfo = {
  name: 'Cage MMA',
  tagline: 'Train Like A Champion',
  subheadline: 'Las Vegas\'s premier mixed martial arts training center. World-class striking, wrestling, BJJ, and strength & conditioning under one roof.',
  address: '3900 S Las Vegas Blvd, Las Vegas, NV 89119',
  phone: '(702) 555-0240',
  email: 'info@cagemma.com',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  hours: {
    'Mon–Fri': '6:00 AM – 10:00 PM',
    'Saturday': '8:00 AM – 4:00 PM',
    'Sunday': '10:00 AM – 2:00 PM',
  },
};

export const stats = [
  { value: '15+', label: 'Years in Vegas' },
  { value: '500+', label: 'Active Members' },
  { value: '80+', label: 'Pro Fighters Trained' },
  { value: '20+', label: 'World Title Fights' },
];

export const disciplines = [
  { name: 'Boxing', icon: '🥊', description: 'Technical striking, footwork, combinations, and defensive mastery from our world-ranked boxing coach.' },
  { name: 'Wrestling', icon: '🤼', description: 'Takedowns, sprawls, and top control — the backbone of MMA dominance. Folkstyle and freestyle programs.' },
  { name: 'Brazilian Jiu-Jitsu', icon: '🥋', description: 'World-class BJJ with a dedicated curriculum from white to black belt, Gi and No-Gi.' },
  { name: 'Muay Thai', icon: '🦵', description: 'The art of eight limbs — punches, kicks, elbows, and knees trained at full MMA pace.' },
  { name: 'Judo', icon: '⚡', description: 'Throws, trips, and dominant clinch work that translates directly into the cage or street.' },
  { name: 'Strength & Conditioning', icon: '💪', description: 'Sport-specific S&C programming tailored for fighters — power, endurance, and injury prevention.' },
];

export const instructors = [
  {
    name: 'Head Coach Dominic Cruz',
    rank: 'MMA Pro Record 18-4 · Former Regional Champion',
    bio: 'Over 20 years in combat sports. Led 6 fighters to UFC contracts. Specializes in MMA game-planning and striking systems.',
    image: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?w=600&q=80',
  },
  {
    name: 'Coach Valentina Orlov',
    rank: 'Pro Kickboxer 22-3 · ONE Championship Veteran',
    bio: 'Russian-born kickboxing ace with wins across Bellator and ONE. Leads our striking and women\'s MMA program.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  {
    name: 'Coach Rashad Ortega',
    rank: 'Division I NCAA Wrestler · MMA 12-2 Pro',
    bio: 'Elite wrestling pedigree that built champions at the collegiate and professional level. Heads our wrestling and takedown defense program.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
  },
];

export const testimonials = [
  { name: 'Tyler B.', rating: 5, text: 'Cage MMA turned me from a complete beginner to competing in amateur MMA in 18 months. The coaches here are elite and actually care about your progress.' },
  { name: 'Aisha M.', rating: 5, text: 'Best gym in Vegas and it\'s not close. The women\'s program is world-class and Coach Valentina is an absolute legend.' },
  { name: 'Jason K.', rating: 5, text: 'I\'ve trained at gyms in 4 different cities. This is the best. Facilities, coaching, mat culture — everything is top tier.' },
  { name: 'Marco D.', rating: 5, text: 'Went pro after training here for 2 years. Coach Dominic\'s game-planning is unlike anything I\'ve seen elsewhere.' },
];

export const pricing = [
  {
    name: 'Foundational',
    price: '$139',
    period: '/mo',
    features: ['2 discipline classes/day', 'Open mat access', 'Strength & conditioning', 'Online training resources'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Fighter',
    price: '$189',
    period: '/mo',
    features: ['Unlimited all disciplines', 'Open mat + live rounds', 'S&C + recovery sessions', 'Competition prep', 'Video review access'],
    cta: 'Join Now',
    highlight: true,
  },
  {
    name: 'Pro Team',
    price: '$269',
    period: '/mo',
    features: ['Everything in Fighter', 'Pro team training sessions', 'Priority 1-on-1 coaching', 'Corner support at events', 'Nutrition coaching'],
    cta: 'Apply Now',
    highlight: false,
  },
];
