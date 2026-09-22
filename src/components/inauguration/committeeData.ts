export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  category: 'president' | 'secretary' | 'treasurer' | 'vp' | 'advisor';
  description?: string;
}

export const DEFAULT_COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    id: 'dr-a-neelalohithadasan-nadar',
    name: 'Dr. A. Neelalohitha dasan Naadar Ex. M . P',
    role: 'President',
    photo: '/neelalohithadasannadar.jpeg',
    category: 'president',
    description: 'Former Minister & Ex. M.P., leading VEOTA Kerala with visionary leadership.',
  },
  {
    id: 'krishnan-ambadi',
    name: 'Krishnan Ambadi',
    role: 'General Secretary',
    photo: '/person7.jpg',
    category: 'secretary',
    description: 'Spearheading district administration and association coordination.',
  },
  {
    id: 'muhammad-sherief',
    name: 'Muhammad Sherief',
    role: 'Treasurer',
    photo: '/person6.jpg',
    category: 'treasurer',
    description: 'Managing financial affairs and organizational resources with integrity.',
  },
  {
    id: 'joys-m-joy',
    name: 'Joys M Joy',
    role: 'Working Secretary',
    photo: '/person5.jpg',
    category: 'secretary',
    description: 'Driving operational excellence and member support initiatives.',
  },
  {
    id: 'muhammed-kunji',
    name: 'Muhammed Kunji',
    role: 'Vice-President',
    photo: '/person2.jpg',
    category: 'vp',
    description: 'Guiding environmental emission compliance and member welfare.',
  },
  {
    id: 'kpa-razak',
    name: 'KPA Razak',
    role: 'Vice-President',
    photo: '/person4.jpg',
    category: 'vp',
    description: 'Advancing testing equipment standards and regional representation.',
  },
  {
    id: 'veli-pramod',
    name: 'Veli Pramod',
    role: 'Vice-President',
    photo: '/person3.jpg',
    category: 'vp',
    description: 'Supporting organizational growth and district committee activities.',
  },
  {
    id: 'suvin-sagar',
    name: 'Suvin Sagar',
    role: 'Technical Advisor',
    photo: '/person1.jpg',
    category: 'advisor',
    description: 'Advising on calibration, emission standards, and modern diagnostic technologies.',
  },
];
