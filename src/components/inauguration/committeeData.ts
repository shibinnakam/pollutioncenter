export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  category: 'president' | 'secretary' | 'treasurer' | 'vp' | 'advisor';
  description?: string;
  imagePosition?: string;
}

export const DEFAULT_COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    id: 'dr-a-neelalohithadasan-nadar',
    name: 'Dr. A. Neelalohitha dasan Naadar Ex. M . P',
    role: 'State President',
    photo: '/neelalohithadasannadar.jpeg',
    category: 'president',
    description: 'Former Minister & Ex. M.P., State President leading VEOTA Kerala with visionary leadership.',
  },
  {
    id: 'krishnan-ambadi',
    name: 'Krishnan Ambady',
    role: 'State General Secretary',
    photo: '/person7.jpg',
    category: 'secretary',
    description: 'State General Secretary, spearheading statewide administration and association coordination.',
  },
  {
    id: 'premraj-m-p',
    name: 'Premraj M P',
    role: 'District President',
    photo: '/districtpresident.jpeg',
    category: 'president',
    description: 'President of VETOA Kozhikode District Committee.',
    imagePosition: 'center 20%',
  },
  {
    id: 'joys-m-joy',
    name: 'Joys M Joy',
    role: 'District Secretary',
    photo: '/districtsecratary.jpeg',
    category: 'secretary',
    description: 'Secretary of VETOA Kozhikode District Committee.',
  },
  {
    id: 'sangeetha-pradheep',
    name: 'Sangeetha Pradheep',
    role: 'District Treasurer',
    photo: '/districttressur.jpeg',
    category: 'treasurer',
    description: 'Treasurer of VETOA Kozhikode District Committee.',
  },
  {
    id: 'muhammad-sherief',
    name: 'Muhammad Sherief',
    role: 'State Treasurer',
    photo: '/person6.jpg',
    category: 'treasurer',
    description: 'State Treasurer, managing financial affairs and organizational resources with integrity.',
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
