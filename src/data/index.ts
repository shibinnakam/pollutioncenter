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
  { id: 'kl01', name: 'Thiruvananthapuram', code: 'KL-01' },
  { id: 'kl02', name: 'Kollam', code: 'KL-02' },
  { id: 'kl03', name: 'Pathanamthitta', code: 'KL-03' },
  { id: 'kl04', name: 'Alappuzha', code: 'KL-04' },
  { id: 'kl05', name: 'Kottayam', code: 'KL-05' },
  { id: 'kl06', name: 'Idukki', code: 'KL-06' },
  { id: 'kl07', name: 'Ernakulam', code: 'KL-07' },
  { id: 'kl08', name: 'Thrissur', code: 'KL-08' },
  { id: 'kl09', name: 'Palakkad', code: 'KL-09' },
  { id: 'kl10', name: 'Malappuram', code: 'KL-10' },
  { id: 'kl11', name: 'Kozhikode', code: 'KL-11' },
  { id: 'kl12', name: 'Wayanad', code: 'KL-12' },
  { id: 'kl13', name: 'Kannur', code: 'KL-13' },
  { id: 'kl14', name: 'Kasaragod', code: 'KL-14' }
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
    name: 'Eco Emissions Test Center',
    contact: '+91 9876543214',
    location: 'Kozhikode',
    rto: 'kl11',
    address: '34, Beach Road, Kozhikode, Kerala 673001',
    email: 'support@ecoemissions.com',
    workingHours: 'Mon-Sat: 9:00 AM - 6:00 PM'
  }
];

export const representatives: Representative[] = [
  {
    id: 'rep1',
    name: 'Anand Kumar',
    role: 'President',
    contact: '+91 9876543220',
    rto: 'kl01',
    email: 'anand@veotakerala.org',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'rep2',
    name: 'Priya Nair',
    role: 'Secretary',
    contact: '+91 9876543221',
    rto: 'kl07',
    email: 'priya@veotakerala.org',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'rep3',
    name: 'Mohan Das',
    role: 'Treasurer',
    contact: '+91 9876543222',
    rto: 'kl08',
    email: 'mohan@veotakerala.org',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'rep4',
    name: 'Lakshmi Menon',
    role: 'District Coordinator',
    contact: '+91 9876543223',
    rto: 'kl02',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'rep5',
    name: 'Rajesh Kumar',
    role: 'District Coordinator',
    contact: '+91 9876543224',
    rto: 'kl11',
    email: 'rajesh@veotakerala.org',
    photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600'
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