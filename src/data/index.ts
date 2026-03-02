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
    name: 'ALI AUTO SCAN',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'RASIYA BUILDING,OK ROAD, THIRUVANNUR, KOZHIKODE,637029',
    centerCode: 'KL0110040',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc6',
    name: 'ALI AUTO SCAN',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'NEAR SBI ATM, MULLASSERI ARCADE,MINI BYPASS, MEENCHANDA, CALICUT.,673029',
    centerCode: 'KL0110036',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc7',
    name: 'AMBADY AUTO SCAN',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 02/2348D , NEAR GANDHI ASHRAM,CIVIL STATION PO , KOZHIKODE,673020',
    centerCode: 'KL0110001',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc8',
    name: 'AROMA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'BLDG NO 4/645A,WARD 4 , PUTHIYANIRATH,ELATHUR P O , KOZHIKODE,673303',
    centerCode: 'KL0110012',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc9',
    name: 'AR POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '1/1455,SK BAZAR,ELATHUR,KOZHIKODE,673303',
    centerCode: 'KL0110035',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc10',
    name: 'AUTO TEST POLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 02/2291 A1 NEAR CIVIL STATION, KOZHIKODE,673020',
    centerCode: 'KL0110025',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc11',
    name: 'BHARATH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'BLDNG NO 39/1265 E ,GROUND FLOOR,WARD 39,PUTHIYANGADI CO OP.BANK , KOZHIKODE,673021',
    centerCode: 'KL0110018',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc12',
    name: 'CLICK SOLUTIONS PUCC',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '202/F GROUND FLOOR, NEAR SHARAFUDHEEN JUMA MASJID,CHEROOPPA (PO), CALICUT,673661',
    centerCode: 'KL0110049',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc13',
    name: 'CLUB C',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'CLUB C POLLUTION TESTING CENTRE, 18/156E,6TH MILE,VELLIP ARAMBA, CALICUT,673008',
    centerCode: 'KL0110047',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc14',
    name: 'ELITE SMOKE TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'PATTERI 29/2135 , KOTTOOL,KUTHIRAVATTOM , KOZHIKODE,673016',
    centerCode: 'KL0110016',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc15',
    name: 'FRIENDS AUTOSCAN SMOKE TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 22/1003 KUNNAMANGALAM ROAD,KUTIKKATTUR, KOZHIKODE,673008',
    centerCode: 'KL0110031',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc16',
    name: 'JEENA VEHICLE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 39/1018-A1 , WARD NO 39,PUTHIYANGADI PO , KOZHIKODE,673021',
    centerCode: 'KL0110004',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc17',
    name: 'LAKSHMI TRADING CO',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'MANKAVU PO,KOZHIKODE,673029',
    centerCode: 'KL0110026',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc18',
    name: 'LOVELY POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'KALLAYI ARCADE,KALLAYI P O,KOZHIKODE,673003',
    centerCode: 'KL0110044',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc19',
    name: 'METRO',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'VAIDYARANGADI,RAMANATTUKARA,673633',
    centerCode: 'KL0110033',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc20',
    name: 'MOTOCARE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '36/1211 , THADAMPATTUTHAZHAM,VENGERI PO , KOZHIKODE,673010',
    centerCode: 'KL0110029',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc21',
    name: 'MTS POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'PANAGOT BUILDING , MUNDIKKALTHAZHAM,P.O KOTTAMPARAMBA , CALICUT,673008',
    centerCode: 'KL0110041',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc22',
    name: 'MUKKAM TYRES POLLUTION TESTING CENTER',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 03/636A NOOR BUILDING ,EAST NADAKKAVU, KOZHIKODE 11,673011',
    centerCode: 'KL0110021',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc23',
    name: 'NARAKATH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '23/1555 - A2, METHOTTUTHAZHAM, (P.O) NELLIKODE.,23/1555 - A2, METHOTTUTHAZHAM, (P.O) NELLIKODE.,673016',
    centerCode: 'KL0110034',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc24',
    name: 'NEWINDIA AUTOMOBILES TESTING CENTER',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO.19/3 CORPORATION BUILDING COMPLEX ,PUTHIYAPALM, CHALAPPURAM PO,KOZHIKODE,673002',
    centerCode: 'KL0110022',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc25',
    name: 'NEWINDIA POLLUTION TESTING STATION',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '16/934, CWRDM ROAD,WEST MAYANAD, KOZHIKODE,673008',
    centerCode: 'KL0110052',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc26',
    name: 'PERFECT ENTERPRISES',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '61/1234,CHEROOTY ROAD,CALICUT,673032',
    centerCode: 'KL0110039',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc27',
    name: 'POOPATHI EMISSION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO PP 12/568,NEAR PERUVAYAL JUMA MASJID,PERUVAYAL WARD NO 39 , KOZHIKODE,673021',
    centerCode: 'KL0110017',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc28',
    name: 'POOPATHY PUC CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'POOPATHY EMISSION TESTING CENTRE,ROOM NO:16/1102E,DM ARCADE MOOZHIKKAL,KOZHIKODE,673571',
    centerCode: 'KL0110045',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc29',
    name: 'PRK VEHICLES POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 32/706B , BHARATHAN BAZAR,CHELAVOOR , KOZHIKODE,673571',
    centerCode: 'KL0110014',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc30',
    name: 'RAJ TESTING STATION',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '4/1148, KK BUILDING, PAYYANAKKAL,KALLAI(PO), KOZHIKODE,673003',
    centerCode: 'KL0110046',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc131',
    name: 'READY TO GO AUTO SCAN',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'VALAMKULAM, CHEVERAMBALAM P.O, CALICUT,CALICUT,673017',
    centerCode: 'KL0110038',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc132',
    name: 'RIGHT POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 33/6238 F , OPPO. R.T.O TESTING GROUND,CHEVAYUR, KOZHIKODE,673017',
    centerCode: 'KL0110002',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc133',
    name: 'R K AUTOSCAN',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '11/1516-B, MURINGOLI, MERIKUNNU, KOZHIKODE,NEAR GREENLAND NURSERY, MERIKUNNU(P.O) KOZHIKODE.,673012',
    centerCode: 'KL0110037',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc134',
    name: 'SECURE PUC CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '3/968-B, THENADATHU PARAMBIL,,POOLADIKKUNNU, ERANJIKKAL P.O., CALICUT,673303',
    centerCode: 'KL0110048',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc135',
    name: 'S P AUTO CARE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '1/1445, SK BAZAR , KANNUR ROAD,ELATHUR ( P O ),KOZHIKODE,673303',
    centerCode: 'KL0110042',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc136',
    name: 'SREEVIDYA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '3/2278, MK BUILDING, ,PUTHUR, KOZHIKODE.,673021',
    centerCode: 'KL0110051',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc137',
    name: 'STAR AUTO SCAN POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 22/1229B , WEST MANAKAVU,KOZHIKODE,673029',
    centerCode: 'KL0110008',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc138',
    name: 'UNITED SMOKE TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'KALLAI COMPLEX, 59/5962, NEAR SBT ATM,,KALLAI ROAD, KOZHIKODE.,673003',
    centerCode: 'KL0110053',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc139',
    name: 'V-CARE POLLUTION TESTING STATION',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '68/1311(OLD NO 1/3446 B), SIVAM BUILDING,KACHERI, KANAKALYA BANK, WESTHILL POST, KOZHIKODE,673005',
    centerCode: 'KL0110050',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc140',
    name: 'VENGALATH SMOKE TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: '13/167 POOVATTU PARAMBA,KOZHIKODE,673008',
    centerCode: 'KL0110007',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc141',
    name: 'VENKATESHWARA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Kozhikode',
    rto: 'kl11a',
    address: 'ROOM NO 1/3008E SWARNAMALA COMPLEX,EASTHILL ROAD,WESTHILL,KOZHIKODE 673005,673005',
    centerCode: 'KL0110032',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
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
    name: '5S AUTO HEALTH CARE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'MALIYEKKAL BUILDING,WARD NO 1/ROOM NO 628/I,673572',
    centerCode: 'KL0570035',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc53',
    name: 'ABC AUTO SCAN',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'PULIYARAKKAL COMPLEX ,THACHAMPOYIL ,THAMARASSERY PO , KOZHIKODE ,673573',
    centerCode: 'KL0570031',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc54',
    name: 'ADHAN SMOKE TEST',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO.17/322 A,KARAT BUILDING,MAINROAD,KODUVALLY,KOZHIKODE-673612,673612',
    centerCode: 'KL0570015',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc55',
    name: 'ARABIAN POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO. TP 9/3A ,THAMARASSERY,KOZHIKODE,ROOM NO. TP 9/3A,THAMARASSERY,KOZHIKODE,673573',
    centerCode: 'KL0570014',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc56',
    name: 'AROMA EMISSION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO PP XVII/515-D,ELOKKARA,PUTHUPPADY PO,ROOM NO PP XVII/515-D,ELOKKARA,PUTHUPPADY PO,673586',
    centerCode: 'KL0570001',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc57',
    name: 'AROMA POLUTION TESTING CENTER',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'SOUTH MALAPURAM, PERUMBALLY P O,PUTHUPPADI,673586',
    centerCode: 'KL0570042',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc58',
    name: 'AUTOSCAN EMISSION TEST CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO.17/228,NEAR IIM,KUNNAMANGALAM,ROOM NO.17/228,NEAR IIM,KUNNAMANGALAM,673571',
    centerCode: 'KL0570016',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc59',
    name: 'BADAR TYRES SMOK TESTING CENTER',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'KM 21/759 JAMAL COMPLEX,WAYANAD ROAD , KODUVALLY,673572',
    centerCode: 'KL0570025',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc60',
    name: 'BHARATH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO. 245,WARD NO.6,PATHIMANGALAM,KUNNAMANGALAM,ROOM NO.245,WARD NO.6,PATHIMANGALAM,KUNNAMANGALAM,673571',
    centerCode: 'KL0570009',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc61',
    name: 'BPM POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO. XII/489 B,KARASSERY JN,MUKKAM PO,ROOM NO.XII/489 B,KARASSERY JN, MUKKAM,673202',
    centerCode: 'KL0570007',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc62',
    name: 'B R ASSOCIATES',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '635D,EDEN FACADE,VARATTIAKKAL,KUNNAMANGALAM,KOZHIKODE,KERALA,673571',
    centerCode: 'KL0570021',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc63',
    name: 'C M AUTO SCAN',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'A2Z COMPLEX,ADIVARAM,CALICUT DT,673586',
    centerCode: 'KL0570032',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc64',
    name: 'FIT N DRIVE AUTOMOTIVE PUC TESTING CENTER',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'NO 31/228, PALAKUTTY,WAYANAD ROAD,,KODUVALLY,KOZHIKODE DIST, KERALA,673572',
    centerCode: 'KL0570039',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc65',
    name: 'FREEWAY PUC CENTRE MUTHERI',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '10/13 B CHOYI SONS BUILDING ,MUTHERI,NEELESWARAM PO, KOZHIKODE,673582',
    centerCode: 'KL0570029',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc66',
    name: 'GLOBAL POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'DOOR NO 237A,KODENCHERY SOUTH,KODENCHERY POST KODUVALLY,673580',
    centerCode: 'KL0570051',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc67',
    name: 'GLOBAL VEHICLE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'KODENCHERY, KOZHIKODE DT. , KERALA ST.,673580',
    centerCode: 'KL0570033',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc68',
    name: 'GREEN GO POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'THAIKKATTUPARAMBIL BUILDING ,PONNAMKAYAM P O THIRUVAMBADY VIA CALICUT,673603',
    centerCode: 'KL0570044',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc69',
    name: 'GREEN OZONE AUTO SCAN',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '13/422/N KANIYARKANDAM PUTHUR,KODUVALLY KOZHIKODE DT, 673582',
    centerCode: 'KL0570034',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc70',
    name: 'GREEN TECH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'KURUMPARAKANDY, OMASSERY,OPP. GREEN VALLEY HOTEL, CALICUT,673582',
    centerCode: 'KL0570022',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc71',
    name: 'GREEN ZONE POLLUTION TESTING CENTER',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'MAMPATTA MANASSERY PO,MUKKAM KERALA,673602',
    centerCode: 'KL0570052',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc72',
    name: 'J & J AUTOSCAN POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO TP XII/656,PARAPPANPOYIL,THAMARASSERY PO,ROOM NO TP XII/656,PARAPPANPOYIL,THAMARASSERY PO,673573',
    centerCode: 'KL0570002',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc73',
    name: 'KRS POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO.KP 01/82,PATHIMANGALAM,KUNNAMANGALAM,ROOM NO .KP 01/82,PATHIMANGALAM, KUNNAMANGALAM,673571',
    centerCode: 'KL0570006',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc74',
    name: 'KRS POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO. KP01/82 PATHIMANGALAM,KUNNAMANGALAM,673571',
    centerCode: 'KL0570054',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc75',
    name: 'MANRAJ EMISSION TEST CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO.TP 5/675,CHUNGAM,THAMARASSERY,ROOM NO.TP 5/675,CHUNGAM,THAMARASSERY,673573',
    centerCode: 'KL0570010',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc76',
    name: 'MOTHER INDIA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOMNO.14/415A,KAKKUND,KOODARANHIROAD,THIRUVAMBADI,KOZHIKODE DIST.,673603',
    centerCode: 'KL0570011',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc77',
    name: 'MOTHER INDIA VEHICLE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'NEAR NEETHI SUPERMARKET KARINKUTTI,KOODARANHI, KOZHIKODE, KERALA,673604',
    centerCode: 'KL0570038',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc78',
    name: 'MOTHER VEHICLE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: '14/94B KATYAD,THIRUVAMBADY PO, KOZHIKODE, KERALA ,673603',
    centerCode: 'KL0570045',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc79',
    name: 'M/S WESTERN VEHICLE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ATHIYOD POYIL, PARANNUR P.O, MADAVOOR,673585',
    centerCode: 'KL0570036',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc80',
    name: 'NEXA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'AGASTIANMUZHI,MUKKAM,673602',
    centerCode: 'KL0570023',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc81',
    name: 'PARAYANGATTU PUCC',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'PARAYANGATTU,CHERUVADI POST,MAVOORVIAZHI,PERUVAYAL,KOZHIKODE,KERALA,673661',
    centerCode: 'KL0570026',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc82',
    name: 'PCA ENTERPRISES',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'POYIL,NEELESHWARAM PO,MUKKAM,,KOZHIKODE,KERALA,673582',
    centerCode: 'KL0570053',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc83',
    name: 'PCA ENTERPRISES',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'NO 359 ,WARD NO 25,OLD RTO OFFICE BUILDING,KODUVALLY PO KODUVALLY KOZHIKODE DIST KERALA,673572',
    centerCode: 'KL0570041',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc84',
    name: 'PCA ENTERPRISES',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'NO 9/410/F,WARD NO 09,EAST KIZHAKKOTH,,KIZHAKKOTH P O,KOZHIKODE DIST,KERALA.,673572',
    centerCode: 'KL0570040',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc85',
    name: 'ROMANCE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'KP/8/350E,PANNIKODE (POST) MUKKAM KOZHIKODE,673602',
    centerCode: 'KL0570049',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc86',
    name: 'SAFIYA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'KP 15/538E,KARUTHAPARAMBA,KARASHERY(PO),MUKKOM,673602',
    centerCode: 'KL0570027',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc87',
    name: 'SAJISASSOCIATES',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'CALICUT MAIN ROAD,THIRUVAMBADI,673603',
    centerCode: 'KL0570048',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc88',
    name: 'SAJISASSOCIATES POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'CALICUT MAIN ROAD,ENGAPUZHA,673586',
    centerCode: 'KL0570050',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc89',
    name: 'SAJISASSOCIATES POLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'CALICUT MAIN ROAD,KODENCHERY,CALICUT,673580',
    centerCode: 'KL0570047',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc90',
    name: 'SIYA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'WEST MANASSERY,MANASSERY PO KOZHIKODE,673602',
    centerCode: 'KL0570046',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc91',
    name: 'SNS VEHICLE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO. CP 4/417 B,KALANTHODE,NIT PO,ROOM NO CP 4/417 B,KALANTHODE,NIT PO,673601',
    centerCode: 'KL0570003',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc92',
    name: 'SPLASH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'CHENNAMANGALORE THAZHECODE ,MUKKAM KOZHIKODE,673602',
    centerCode: 'KL0570043',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc93',
    name: 'TECHNOVA POLLUTION TEST CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'T . K. ARCADE,ENGAPUZHA,673586',
    centerCode: 'KL0570020',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc94',
    name: 'TECHNOVA POLLUTION TEST CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ORCHID COMPLEX,KUDUKKILUMARAM THAMARASSERY,673573',
    centerCode: 'KL0570019',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc95',
    name: 'U3 SMOKE TEST',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO 94, VK BULDING, VATTAKKUNDUNGAL,KARADI, THAMARASSERY, KOZHIKODE DT,673573',
    centerCode: 'KL0570030',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc96',
    name: 'VALAPPIL POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Koduvally',
    rto: 'kl57',
    address: 'ROOM NO. KP 01/91 B,PADANILAM PO,ROOM NO KP 01/91 B,PADANILAM PO,673571',
    centerCode: 'KL0570008',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc97',
    name: 'Al Arabia Purameri',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc98',
    name: 'AV Auto',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc99',
    name: 'Classic Kallachi',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc100',
    name: 'Global Kainatty',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc101',
    name: 'Global Meppayil',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc102',
    name: 'Global Azhiyoor',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc103',
    name: 'Global Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc104',
    name: 'Hindo lam',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc105',
    name: 'Kairali Kakkuttil',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc106',
    name: 'Marwa Kallachi',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc107',
    name: 'M G Tyres Ayancheri',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc108',
    name: 'M G Auto Tech Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc109',
    name: 'M K Thiruvallur',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc110',
    name: 'Moto Spot Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc111',
    name: 'Nakshathra',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc112',
    name: 'Nasco Nadapuram',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc113',
    name: 'Orbiz Auto Scan',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc114',
    name: 'Oxygen Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc115',
    name: 'Prince Vadakara',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc116',
    name: 'SA Auto Scan',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc117',
    name: 'Saga Kallachi',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc118',
    name: 'Surya Valayam',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc119',
    name: 'Wheel plus',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc120',
    name: 'Surya Vanimel',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc121',
    name: 'Auto Zone Koyilandi',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc122',
    name: 'Energy Kanayankode',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc123',
    name: 'Moto care Ullery',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc124',
    name: 'Moto zone Koyilandy',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc125',
    name: 'Payyoli',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc126',
    name: 'Roadster Ullery',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc127',
    name: 'Sanas Payyoli',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc128',
    name: 'Vidhya Kattilpedika',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc129',
    name: 'V R Koyilandy',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '',
    email: '',
    workingHours: ''
  },
  {
    id: 'tc130',
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