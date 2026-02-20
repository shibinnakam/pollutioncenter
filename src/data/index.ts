import { SlideImage, TestingCenter, Representative, GovernmentOrder, NewsItem, RTODistrict } from '../types';

export const slideImages: SlideImage[] = [
  {
    id: 1,
    url: '/cmvetoahome.jpg',
    title: 'Welcome to Vetoa Kozhikode',
    description: 'Ensuring a cleaner environment through proper vehicle emission testing',
    alt: 'Vehicle emission testing being performed'
  },
  {
    id: 2,
    url: '/mriyazvetoa.jpg',
    title: 'Modern Testing Equipment',
    description: 'Using state-of-the-art equipment for accurate emission testing',
    alt: 'Modern vehicle testing equipment'
  },
  {
    id: 3,
    url: 'mriyazvetoak.jpg',
    title: 'Emission Control',
    description: 'Working together for a pollution-free Kerala',
    alt: 'Emission control system'
  }
];

export const rtoDistricts = [
  {
    id: "kl11",
    code: "KL-11",
    name: "RTO Kozhikode",
    subRTO: [
      { id: "kl11a", code: "KL-11", name: "Sub RTO Kozhikode" },
      { id: "kl57", code: "KL-57", name: "Sub RTO Koduvally" },
      { id: "kl73", code: "KL-73", name: "Sub RTO Feroke" },
      { id: "kl76", code: "KL-76", name: "Sub RTO Nanmanda" }
    ]
  },

  {
    id: "kl18",
    code: "KL-18",
    name: "RTO Vadakara",
    subRTO: [
      { id: "kl18a", code: "KL-18", name: "Sub RTO Vadakara" },
      { id: "kl56", code: "KL-56", name: "Sub RTO Quilandi" },
      { id: "kl77", code: "KL-77", name: "Sub RTO Perambra" },
    ]
  }
];

export const testingCenters: TestingCenter[] = [
  
   {
    id: 'tc5',
    name: 'Ali Auto Scan',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc6',
    name: 'Ambady Auto Scan',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc7',
    name: 'Friends Kuttikkattur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc8',
    name: 'Jeena Puthiyangadi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc9',
    name: 'Lakshmi Trading',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc10',
    name: 'Lovely kallayi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc11',
    name: 'Metro Vaidhyarangadi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc12',
    name: 'Moto Care Thodampattuthazham',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc13',
    name: 'MTS Mundikkal thazham',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc14',
    name: 'Narakath Nellikode',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc15',
    name: 'Perfect Cherootty Road',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc16',
    name: 'Poopathi Peruvayal',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc17',
    name: 'Poopathi Moozhikkal',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc18',
    name: 'PRK Chelavoor',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc19',
    name: 'Ready To Go Chevarambalam',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc20',
    name: 'Right Chevayur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc21',
    name: 'RK Merykkunnu',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc22',
    name: 'Star Mankavu',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc23',
    name: 'SP Auto Care Elathur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc24',
    name: 'Test Well Chevayur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc25',
    name: 'United Kallayi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc26',
    name: 'V Care Westhill',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc27',
    name: 'Vengalath',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc28',
    name: 'Venkateshwara Westhill',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc29',
    name: 'Mukkam Tyres',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc30',
    name: 'Club C',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc31',
    name: 'Anitha Kallampara',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc32',
    name: 'Cheruvalath Naduvattom',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc33',
    name: 'Driveline Nallur',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc34',
    name: 'Eminent Palazhi',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc35',
    name: 'Monto Chaliyam',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc36',
    name: 'P M Kutty & Sons',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc37',
    name: 'R R Pantheerankavu',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc38',
    name: 'X Auto Areekad',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc39',
    name: 'S S Narikunni',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc40',
    name: 'Amulya Balussery ',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc41',
    name: 'Atom tech Nanmanda',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc42',
    name: 'Grip Kakkodi',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc43',
    name: 'Ideal Narikkuni',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc44',
    name: 'K K Pollution B Makku',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc45',
    name: 'P K M Estatemukku',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc46',
    name: 'Sopanam Atholi',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc47',
    name: 'Prem Atholi',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc48',
    name: 'Sreerag Parambilbazar',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc49',
    name: 'Vettakkal',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc50',
    name: 'Auto-matic',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc51',
    name: 'J S Kakkur',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc52',
    name: 'Arabian',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc53',
    name: 'Aroma',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc54',
    name: 'Auto Scan Kunnanmangalam',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc55',
    name: 'Badar Koduvally',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc56',
    name: 'Bharath Pathimangalam',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc57',
    name: 'B R Varattiakkal',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc58',
    name: 'CM Auto Scan',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc59',
    name: 'Echo harbour',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc60',
    name: 'Fit N Drive',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc61',
    name: 'Freeway Mutheri',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc62',
    name: 'Global Kodenchery',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc63',
    name: 'J & J Parappanpoyil',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc64',
    name: 'KRS Pathimangalam',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc65',
    name: 'Manraj Thamarassery',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc66',
    name: 'M/S Western Madavoor',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc67',
    name: 'Safiya Karuthaparambu',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc68',
    name: 'SNS Kallanthode',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc69',
    name: 'Green tech Omarassery',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc70',
    name: 'Valappil',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc71',
    name: 'Mother India',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc72',
    name: 'SS Vattoli',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc73',
    name: 'Al Arabia Purameri',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc74',
    name: 'AV Auto',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc75',
    name: 'Classic Kallachi',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc76',
    name: 'Global Kainatty',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc77',
    name: 'Global Meppayil',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc78',
    name: 'Global Azhiyoor',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc79',
    name: 'Global Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc80',
    name: 'Hindo lam',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc81',
    name: 'Kairali Kakkuttil',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc82',
    name: 'Marwa Kallachi',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc83',
    name: 'M G Tyres Ayancheri',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc84',
    name: 'M G Auto Tech Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc85',
    name: 'M K Thiruvallur',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc86',
    name: 'Moto Spot Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc87',
    name: 'Nakshathra',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc88',
    name: 'Nasco Nadapuram',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc89',
    name: 'Orbiz Auto Scan',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc90',
    name: 'Oxygen Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc91',
    name: 'Prince Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc92',
    name: 'SA Auto Scan',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc93',
    name: 'Saga Kallachi',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc94',
    name: 'Surya Valayam',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc95',
    name: 'Wheel plus',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
   {
    id: 'tc96',
    name: 'Surya Vanimel',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc97',
    name: 'Auto Zone Koyilandi',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc98',
    name: 'Energy Kanayankode',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc99',
    name: 'Moto care Ullery',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc100',
    name: 'Moto zone Koyilandy',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc101',
    name: 'Payyoli',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc102',
    name: 'Roadster Ullery',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc103',
    name: 'Sanas Payyoli',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  
  {
    id: 'tc104',
    name: 'Vidhya Kattilpedika',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc105',
    name: 'V R Koyilandy',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc106',
    name: 'Global Koyilandy',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  }
  


];

export const governmentOrders: GovernmentOrder[] = [
  {
    id: 'go1',
    title: 'New Emission Standards Implementation',
    number: 'GO(P)No.25/2023/Trans',
    date: '2023-05-15',
    summary: 'Implementation of updated emission standards for vehicles registered in Kerala',
    documentUrl: '\PUCC LIST DTC KOZHIKODE.pdf',
    category: 'Emission Standards'
  },
  {
    id: 'go2',
    title: 'Testing Center Guidelines',
    number: 'GO(P)No.32/2023/Trans',
    date: '2023-06-21',
    summary: 'Updated guidelines for operating vehicle emission testing centers in Kerala',
    documentUrl: '/documents/go-32-2023.pdf',
    category: 'Testing Centers'
  },
  {
    id: 'go3',
    title: 'Fee Structure for Emission Testing',
    number: 'GO(P)No.40/2023/Trans',
    date: '2023-08-10',
    summary: 'Revised fee structure for different types of vehicles for emission testing',
    documentUrl: '/documents/go-40-2023.pdf',
    category: 'Fee Structure'
  },
  {
    id: 'go4',
    title: 'Equipment Standards for Testing Centers',
    number: 'GO(P)No.52/2023/Trans',
    date: '2023-10-05',
    summary: 'Standards for equipment to be used in emission testing centers',
    documentUrl: '/documents/go-52-2023.pdf',
    category: 'Equipment'
  },
  {
    id: 'go5',
    title: 'Staff Qualification Requirements',
    number: 'GO(P)No.08/2024/Trans',
    date: '2024-01-18',
    summary: 'Qualification requirements for technical staff in emission testing centers',
    documentUrl: '/documents/go-08-2024.pdf',
    category: 'Personnel'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 'news1',
    title: 'Annual Conference Announced',
    date: '2024-02-25',
    summary: 'VETOA Kerala announces annual conference to be held in Kochi on March 15-16, 2024',
    content: 'The Vehicle Emission Testing Owners Association Kerala (VETOA) is pleased to announce its annual conference scheduled for March 15-16, 2024, at the Grand Hyatt in Kochi. This year\'s conference will focus on new emission testing technologies and upcoming regulatory changes. All members are encouraged to attend this important event.',
    imageUrl: '/mriyazvetoa.jpg',
    tags: ['Conference', 'Events']
  },
  {
    id: 'news2',
    title: 'New BS6 Phase 2 Emission Norms in Effect',
    date: '2024-01-10',
    summary: 'BS6 Phase 2 emission norms now in effect across Kerala',
    content: 'Starting April 1, 2023, the BS6 Phase 2 emission norms have come into effect across Kerala. All testing centers are required to update their equipment and testing procedures to comply with these new standards. The Transport Department has issued detailed guidelines for implementation, which can be accessed on the official website.',
    imageUrl: '/cmvetoahome.jpg',
    tags: ['Regulations', 'Emission Standards']
  },
  {
    id: 'news3',
    title: 'Training Workshop for Testing Center Staff',
    date: '2023-12-15',
    summary: 'VETOA organizing training workshops for testing center staff in all districts',
    content: 'The Vehicle Emission Testing Owners Association Kerala (VETOA) will be conducting a series of training workshops for testing center staff across all districts in Kerala. These workshops aim to enhance the technical skills of the staff and familiarize them with the latest testing equipment and procedures. The schedule for these workshops will be announced soon.',
    tags: ['Training', 'Workshop']
  }
];