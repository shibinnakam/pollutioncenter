import { SlideImage, TestingCenter, Representative, GovernmentOrder, NewsItem, RTODistrict } from '../types';

export const slideImages: SlideImage[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/11347464/pexels-photo-11347464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Vehicle Emission Testing',
    description: 'Ensuring a cleaner environment through proper vehicle emission testing',
    alt: 'Vehicle emission testing being performed'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/8986768/pexels-photo-8986768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Modern Testing Equipment',
    description: 'Using state-of-the-art equipment for accurate emission testing',
    alt: 'Modern vehicle testing equipment'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Emission Control',
    description: 'Working together for a pollution-free Kerala',
    alt: 'Emission control system'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/9800002/pexels-photo-9800002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Expert Testing',
    description: 'Professional testing services by certified technicians',
    alt: 'Vehicle testing by professional'
  }
];

export const rtoDistricts: RTODistrict[] = [
  { id: 'kl11', name: 'Kozhikode', code: 'KL-11' },
  { id: 'kl57', name: 'Koduvally', code: 'KL-57' },
  { id: 'kl73', name: 'Feroke', code: 'KL-73' },
  { id: 'kl76', name: 'Nanmanda', code: 'KL-76' },
  { id: 'kl18', name: 'Vadakara', code: 'KL-18' },
  { id: 'kl77', name: 'Perambra', code: 'KL-77' },
  { id: 'kl56', name: 'Koyilandy', code: 'KL-56' }
];

export const testingCenters: TestingCenter[] = [
  {
    id: 'tc1',
    name: 'Green Emissions Testing Center',
    contact: '+91 9876543210',
    location: 'Thiruvananthapuram',
    rto: 'kl01',
    address: '23/A, MG Road, Thiruvananthapuram, Kerala 695001',
    email: 'info@greenemissions.com',
    workingHours: 'Mon-Sat: 9:00 AM - 6:00 PM'
  },
  {
    id: 'tc2',
    name: 'EcoTest Vehicle Services',
    contact: '+91 9876543211',
    location: 'Kollam',
    rto: 'kl02',
    address: '45, Kollam Bypass, Kollam, Kerala 691001',
    email: 'support@ecotest.com',
    workingHours: 'Mon-Sat: 8:30 AM - 5:30 PM'
  },
  {
    id: 'tc3',
    name: 'CleanAir Emission Center',
    contact: '+91 9876543212',
    location: 'Ernakulam',
    rto: 'kl07',
    address: '78, Kakkanad, Ernakulam, Kerala 682030',
    email: 'info@cleanair.com',
    workingHours: 'Mon-Sat: 9:00 AM - 6:00 PM'
  },
  {
    id: 'tc4',
    name: 'PollutionCheck Kerala',
    contact: '+91 9876543213',
    location: 'Thrissur',
    rto: 'kl08',
    address: '12, MG Road, Thrissur, Kerala 680001',
    workingHours: 'Mon-Sat: 9:30 AM - 5:30 PM'
  },
  {
    id: 'tc5',
    name: 'Ali Auto Scan',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc6',
    name: 'Ambady Auto Scan',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc7',
    name: 'Friends Kuttikkattur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc8',
    name: 'Jeena Puthiyangadi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc9',
    name: 'Lakshmi Trading',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc10',
    name: 'Lovely kallayi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc11',
    name: 'Metro Vaidhyarangadi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc12',
    name: 'Moto Care Thodampattuthazham',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc13',
    name: 'MTS Mundikkal thazham',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc14',
    name: 'Narakath Nellikode',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc15',
    name: 'Perfect Cherootty Road',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc16',
    name: 'Poopathi Peruvayal',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc17',
    name: 'Poopathi Moozhikkal',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc18',
    name: 'PRK Chelavoor',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc19',
    name: 'Ready To Go Chevarambalam',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc20',
    name: 'Right Chevayur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc21',
    name: 'RK Merykkunnu',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc22',
    name: 'Star Mankavu',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc23',
    name: 'SP Auto Care Elathur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc24',
    name: 'Test Well Chevayur',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc25',
    name: 'United Kallayi',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc26',
    name: 'V Care Westhill',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc27',
    name: 'Vengalath',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc28',
    name: 'Venkateshwara Westhill',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc29',
    name: 'Mukkam Tyres',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc30',
    name: 'Club C',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11',
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
    name: '',
    contact: '',
    location: 'Feroke',
    rto: 'kl73',
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
    documentUrl: '/documents/go-25-2023.pdf',
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
    summary: 'VEOTA Kerala announces annual conference to be held in Kochi on March 15-16, 2024',
    content: 'The Vehicle Emission Testing Owners Association Kerala (VEOTA) is pleased to announce its annual conference scheduled for March 15-16, 2024, at the Grand Hyatt in Kochi. This year\'s conference will focus on new emission testing technologies and upcoming regulatory changes. All members are encouraged to attend this important event.',
    imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Conference', 'Events']
  },
  {
    id: 'news2',
    title: 'New BS6 Phase 2 Emission Norms in Effect',
    date: '2024-01-10',
    summary: 'BS6 Phase 2 emission norms now in effect across Kerala',
    content: 'Starting April 1, 2023, the BS6 Phase 2 emission norms have come into effect across Kerala. All testing centers are required to update their equipment and testing procedures to comply with these new standards. The Transport Department has issued detailed guidelines for implementation, which can be accessed on the official website.',
    imageUrl: 'https://images.pexels.com/photos/5331445/pexels-photo-5331445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Regulations', 'Emission Standards']
  },
  {
    id: 'news3',
    title: 'Training Workshop for Testing Center Staff',
    date: '2023-12-15',
    summary: 'VEOTA organizing training workshops for testing center staff in all districts',
    content: 'The Vehicle Emission Testing Owners Association Kerala (VEOTA) will be conducting a series of training workshops for testing center staff across all districts in Kerala. These workshops aim to enhance the technical skills of the staff and familiarize them with the latest testing equipment and procedures. The schedule for these workshops will be announced soon.',
    tags: ['Training', 'Workshop']
  }
];