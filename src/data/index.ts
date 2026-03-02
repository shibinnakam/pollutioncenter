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
    name: '5S AUTO HEALTH CARE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'VISMAYA ARCADE BUILDING ROOM NO X1K, NANMANDA ROAD NARIKKUNI KOZHIKODE,673585',
    centerCode: 'KL0760018',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc40',
    name: 'AMULYA AUTO EMISSION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ROOM NO 287/6, BALUSSERY,KOZHIKODE,673612',
    centerCode: 'KL0760011',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc41',
    name: 'ATMOTECH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'NANMANDA 13,NEAR SRTO NANMANDA,673613',
    centerCode: 'KL0760004',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc42',
    name: 'ATMOTECH POLLUTION TESTING CENTRE KOKKALLUR',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'KOKKALLUR POST BALUSSERY VIA KOZHIKODE,KOKKALLUR PO BALUSSERY,673612',
    centerCode: 'KL0760014',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc43',
    name: 'AUTOMATIC POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ROOM NO. TP12/436B, THALAKULATHUR (P.O),PURAKKATTIRI, KOZHIKODE,673317',
    centerCode: 'KL0760015',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc44',
    name: 'GRIP TYRES AND POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'KAKKODI,KOZHIKODE,673611',
    centerCode: 'KL0760016',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc45',
    name: 'HI TECH POLLUTION TESTING STATION',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ROOM NO KP 16/503,ERAKULAM KAKKODI PO, KOZHIKODE,673611',
    centerCode: 'KL0760005',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc46',
    name: 'IDEAL POLLUTION TESTING STATION',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '10/549 A , POONOOR ROAD,NARIKKUNI , KOZHIKODE ,673585',
    centerCode: 'KL0760013',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc47',
    name: 'JS AUTOSCAN',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ROOM NO CP 4/112C, 9/5,NEAR KAKKUR POLICE STATION, KAKKUR,673613',
    centerCode: 'KL0760020',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc48',
    name: 'JVR TYRES',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'AMARAPURI, VATTOLI BAZAR PO, KOZHIKODE -DT ,673612',
    centerCode: 'KL0760021',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc49',
    name: 'K K POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ROOM NO 7/316 BALUSSERY MUKKU,NANMANDA PO KOZHKODE DT,673612',
    centerCode: 'KL0760003',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc50',
    name: 'MALABAR POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'KARUMALA PO EKAROOL,UNNIKKULAM VIA KOZHIKODE DT ,673612',
    centerCode: 'KL0760010',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc51',
    name: 'P K M POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ESTATE MUKKU, EKAROOL PO,UNNIKULAM, KOZHIKODE,673574',
    centerCode: 'KL0760009',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc142',
    name: 'PREM ENTERPRISES VEHICLE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ROOM NO-TP 2/208-1 , VK ROAD JUNCTION,VK BUILDING,ANNASSERY PO, KOZHIKODE,673317',
    centerCode: 'KL0760012',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc143',
    name: 'SHAKTHI AUTO SPA',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'MODAKKALLUR,ULLIYERI,673323',
    centerCode: 'KL0760017',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc144',
    name: 'SOPANAM POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'MINARAH ARCADE, 14/107-A,VELUR,ATHOLI-PO,KOZHIKODE DIST,673315',
    centerCode: 'KL0760019',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc145',
    name: 'SREERAG POLLUTION TESTING STATION',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: '17/852, KONOTT P O, PARAMBIL BAZAR,WARD NO 17, KOZHIKODE,673571',
    centerCode: 'KL0760006',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc146',
    name: 'VETTAKKAL POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Nanmanda',
    rto: 'kl76',
    address: 'ROOM NO NP9/430B,CHEEKKILO DE ROAD NANMANDA KOZHIKODE DT,673572',
    centerCode: 'KL0760001',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
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
    name: 'ABHIJEETH AUTOMOBILE EXHAUST TESTING',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'PRESENT BUILDING,KARTHIKAPALLY ROAD,,ORKKATTERY,673501',
    centerCode: 'KL0180007',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc98',
    name: 'AL ARABIA AUTO CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NO.2/413A,NEAR POST OFFICE,PURAMERI PO,VADAKARA,673503',
    centerCode: 'KL0180016',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc99',
    name: 'ANJANA SMOKE TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '8/745B CONVENT ROAD, OPP. CONVENT SCHOOL,VADAKARA,673101',
    centerCode: 'KL0180013',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc100',
    name: 'AV AUTO TECH',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'KURUMBAYIL,,NADAKKUTHAZHA POST,VADAKARA,673104',
    centerCode: 'KL0180024',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc101',
    name: 'GENERAL AUTO SCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR IOC PETROL PUMP,OPP SIVA TEMPLE,VATTOLI(PO),673507',
    centerCode: 'KL0180036',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc102',
    name: 'GENERAL AUTO SCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR 10C PETROL PUMB, OPP SIVA TEMPLE,AMBALAKULANGARA, VATTOLI PO,673507',
    centerCode: 'KL0180011',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc103',
    name: 'GLOBAL AUTO TECH',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR ASHA HOSPITAL,N H ROAD,,VADAKARA,673104',
    centerCode: 'KL0180008',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc104',
    name: 'GLOBAL AUTO TECH',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR RANI SERVICE CENTRE,NH ROAD,KAINATTY,NEAR RANI SERVICE CENTRE,NHROAD,KAINATTY,673106',
    centerCode: 'KL0180003',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc105',
    name: 'GLOBAL AUTO TECH',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR OVU PALAM BUS STOP,MEPPAYIL POST,VADAKARA,673104',
    centerCode: 'KL0180022',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc106',
    name: 'GLOBAL POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'AZHIYUR, KOZHIKODE DISTRICT, 673309',
    centerCode: 'KL0180020',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc107',
    name: 'GLOBAL WHEEL CARE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'OPP.KERALA WATER AUTHORITY, VO ROAD,VEERANCHERI,VADAKARA,673101',
    centerCode: 'KL0180031',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc108',
    name: 'GRAND POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'RIFA BUILDING , MAIN ROAD,EDACHERI,VADAKARA,673502',
    centerCode: 'KL0180035',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc109',
    name: 'GREEN TECH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'VALLIKKAD,CHORODE,673106',
    centerCode: 'KL0180038',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc110',
    name: 'HINDOLAM POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'GOVT HOSPITAL ROAD,OPP.GOVT HOSPITAL,VADAKARA,673104',
    centerCode: 'KL0180010',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc111',
    name: 'KAIRALI AUTO SCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'POLLUTION TESTING CENTRE,MAIN ROAD,KAKKATTIL,673507',
    centerCode: 'KL0180014',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc112',
    name: 'MG AUTO TECH',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'GOVT.HOSPITAL ROAD,NUT STREET ,VATAKARA,673104',
    centerCode: 'KL0180029',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc113',
    name: 'M.G TYRES AND AUTO SCAN TESTING',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR BUS STAND,THEEKUNI ROAD,AYANCHERY,NEAR BUS STAND,THEEKUNI ROAD,AYANCHERY,673541',
    centerCode: 'KL0180002',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc114',
    name: 'MK AUTOSCAN POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '13/217 KANNINADA THIRUVALLUR GP,VATAKARA KOZHIKODE,673541',
    centerCode: 'KL0180017',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc115',
    name: 'NAKSHATHRA AUTOSCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR CANARA BANK,TUNERI,KOZHIKODE DT. ,673505',
    centerCode: 'KL0180034',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc116',
    name: 'NAKSHATRA AUTO SCAN TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR OLIVE CATERING SERVICE, PARAKKADAVU,673509',
    centerCode: 'KL0180001',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc117',
    name: 'NASCO AUTO SCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'THUNERI POST,AVOLAM ,NADAPURAM,673504',
    centerCode: 'KL0180025',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc118',
    name: 'ORBIZ AUTO CARE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'BANK ROAD,PATHIYARAKKARA PO,VATAKARA,673105',
    centerCode: 'KL0180021',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc119',
    name: 'OXYGEN POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: '19/62W NEAR SHIVA TEMPLE KARIMBANAPALAM, VADAKARA,(25/422) VADAKARA KOZHIKODE DT, 673101',
    centerCode: 'KL0180023',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc120',
    name: 'PRINCE AUTO SCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'DAS BUILDING,JT ROAD,VADAKARA,673101',
    centerCode: 'KL0180019',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc147',
    name: 'S A AUTO TECH',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR PETROL PUMP,AMARAVATHI,VILLIAPALLY,673542',
    centerCode: 'KL0180005',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc148',
    name: 'SAGA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'VALAYAM ROAD, KALLACHI, VATAKARA,KOZHIKODE,673506',
    centerCode: 'KL0180027',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc149',
    name: 'SURYA AUTO SCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'VALAYAM (PO) KALLACHI (VIA),VATAKARA,673517',
    centerCode: 'KL0180018',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc150',
    name: 'SURYA AUTO SCAN',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NEAR AMBALAPARAMB BAGAVATHI TEMPLE,VANIMEL PO,,KALLACHI.VATAKARA,673506',
    centerCode: 'KL0180033',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc151',
    name: 'VEEKEY POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'PONMERIPARAMBIL PO ,VILLIAPPALLY,VADAKARA,KOZHIKODE DT. KERALA ST.,673542',
    centerCode: 'KL0180037',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc152',
    name: 'WHEEL PLUS',
    contact: '',
    location: 'Vadakara',
    rto: 'kl18a',
    address: 'NO 7/130/J,KOROTH ROAD,AZHIYUR,KOZHIKODE,KERALA ST,673309',
    centerCode: 'KL0180026',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc121',
    name: 'AIR CARE POLLUTION TESTING CENTER',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'PARAMBATH,ARIKKULAM,KOYILANDY,CALICUT DT,673620',
    centerCode: 'KL0560026',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc122',
    name: 'ARANGADATH',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '1/436 C ,ARYA BUILDING, ARANGADATH,CHENGOTTUKAVE,KOYILANDY,673306',
    centerCode: 'KL0560019',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc123',
    name: 'AUTOZONE POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'NEAR HITECH MARUTHI ,MAIN ROAD QUILANDY,673305',
    centerCode: 'KL0560001',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc124',
    name: 'CCR POLLUTION CENTRE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'AISWARYA BUILDING,ANAKKULAM,KOLLAM,KOILANDY,673307',
    centerCode: 'KL0560014',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc125',
    name: 'ENERGY AUTO SCAN',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'MOIDU TOWER,KANAYANKODE, KOYILANDY, KOZHIKODE DT,673620',
    centerCode: 'KL0560016',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc126',
    name: 'GLOBAL AUTO TECH',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'KOYILANDY,KOZHIKODE DIST,673106',
    centerCode: 'KL0560005',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc127',
    name: 'GREENS POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'KEEZHARIYUR, KOYILANDY,673307',
    centerCode: 'KL0560021',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc128',
    name: 'KL56 PERFECT MOTORS PUCC',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'OPP SUPREME PETROL PUMP, KOLLAM, KOYILANDY,PRANAVAM HOUSE, VARYAMKANDY, PUTHUR VADAKARA,673307',
    centerCode: 'KL0560011',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc129',
    name: 'MOTO CARE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'NEAR KDC BANK,ULLIYERI,673323',
    centerCode: 'KL0560008',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc130',
    name: 'MOTOZONE AUTO SCAN',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'MEPPAD TOWER ,KOTHAMANGALAM,BAPPPANGAD KOYILANDY,673305',
    centerCode: 'KL0560007',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc174',
    name: 'MP SMOKE TESTING CENTRE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'K K COMPLEX KOLLAM KOYILANDY ,NEAR PISHARIKKAVE TEMPLE GATE DOOR NO 225/C1,673307',
    centerCode: 'KL0560024',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc175',
    name: 'NGS WHEEL CARE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '1/310B, THURAYUR PO,PAYYOLIANGADI, KOYILANDY,673523',
    centerCode: 'KL0560022',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc176',
    name: 'NH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'NEAR HP PETROL PUMP , AYANIKKAD ,PO PAYYOLI , KOZHIKODE -DT,673522',
    centerCode: 'KL0560020',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc177',
    name: 'PAYYOLI AUTO SCAN',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'BLDG NO 06/131 , A 10 KALARIPADY,NH 66 ROAD PAYYOLI MUNCIPALITY,673522',
    centerCode: 'KL0560006',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc178',
    name: 'ROADSTER AUTOSCAN',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'NEAR PETROL PUMP,ULLIYERI,673323',
    centerCode: 'KL0560003',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc179',
    name: 'SANAS EMISSION TEST CENTER',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'PAYYOLI,KIZHUR,673522',
    centerCode: 'KL0560009',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc180',
    name: 'UNICORN PETROLEUM',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'UNICORN PETROLEUM,POOKKAD, PO CHEMANCHERRY, KOZHIKODE,673304',
    centerCode: 'KL0560013',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc181',
    name: 'VIDYA POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: '345/B,VIDYA BUILDING, NEAR KAIRALI BAKERY,KATTILAPEEDIKA, VENGALAM (P.O), KOZHIKODE.,673303',
    centerCode: 'KL0560025',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc182',
    name: 'VR AUTO SOLUTIONS',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'NEAR HOMEO HOSPITAL ,KOILANDY P.O , KOZHIKODE,673305',
    centerCode: 'KL0560017',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc183',
    name: 'V V POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Quilandi',
    rto: 'kl56',
    address: 'V.V BUILDING,PALAKKULAM, MUDADI,KOZHIKODE ,673307',
    centerCode: 'KL0560015',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc153',
    name: 'ASA AUTO SCAN',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'KADIYANGAD,KADIYANGAD(PO), PERAMBRA(VIA),KOZHIKODE,673525',
    centerCode: 'KL0770015',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc154',
    name: 'EASY POLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'BLDG NO 50/C SPACE BUILDING, KANJIRAMUK MEPPAYUR KOZHIKODE DT,673524',
    centerCode: 'KL0770019',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc155',
    name: 'ELITE EMISSION TEST CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'MEPPAYUR,KOZHIKODE,673524',
    centerCode: 'KL0770002',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc156',
    name: 'FEATHER TOUCH POLLUTION TESTING CENTER',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: '11/471E,CHAKKITTAPARA (PO),PERAMBRA (VIA),CALICUT,673526',
    centerCode: 'KL0770020',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc157',
    name: 'GLOBAL TYRES POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'NEAR ST.THOMAS CHURCH,KOORACHUNDU,KOZHIKODE,673527',
    centerCode: 'KL0770018',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc158',
    name: 'GREENS POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'VELLIYOOR,NOCHAD,PERAMBRA,673614',
    centerCode: 'KL0770017',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc159',
    name: 'GREENS POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'PALLIYATHUKKUNI,KAVIL (PO),NADUVANNUR,673614',
    centerCode: 'KL0770024',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc160',
    name: 'HI TECH POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'CHERUVANNUR,PERAMBRA,673524',
    centerCode: 'KL0770016',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc161',
    name: 'KUTTIADY AUTO SCAN',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'NEAR MRF TYRES , WAYANAD ROAD KUTTIADY,KUTTIADY,673508',
    centerCode: 'KL0770007',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc162',
    name: 'MARWA AUTO SCAN',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'POLLUTION TESTING CENTRE,PARAKKADAVU,PALERI PO,KUTTIADY VIA,673508',
    centerCode: 'KL0770022',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc163',
    name: 'MECH HUB POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'OPP. PETROL PUMP, CHEDIKKULAM,KOOTTALIDA, KOZHIKODE,673614',
    centerCode: 'KL0770014',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc164',
    name: 'NAKSHATRA POLLUTION TESTING CENTER',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'NADAVANNUR,KOZHIKODE ,673614',
    centerCode: 'KL0770003',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc165',
    name: 'NAS AUTO SCAN',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'NEAR BHARATH PETROLEUM , PAIKALANGADI ,KUTTIADY ,673513',
    centerCode: 'KL0770005',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc166',
    name: 'NEW EASTERN POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'KUTTIADY , VADAKARA ROAD,KOZHIKODE,673508',
    centerCode: 'KL0770001',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },
  {
    id: 'tc167',
    name: 'PEE KAY AUTO SCAN',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'KALLODE, PERAMBRA,KOZHIKODE,673525',
    centerCode: 'KL0770011',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc168',
    name: 'PERAMBRA EMISSION CARE PARK',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'INFRONT OF PWD,KUTTIYADY ROAD ,PERAMBRA,673525',
    centerCode: 'KL0770008',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc169',
    name: 'PONPARA AUTOSCAN',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: '15/426/B KARAYIL BUILDING ,PERAMRA -PAYYOLI ROAD,PERAMBRA,KOZHIKODE DT.,673525',
    centerCode: 'KL0770013',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc170',
    name: 'PULSE AUTOCARE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'CHENOLI PO PERAMBRA KAITHAKKAL,CHENOLI PO PERAMBRA KAITHAKKAL,673525',
    centerCode: 'KL0770025',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc171',
    name: 'RISHIS AUTO-SCAN',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'XVI/271 ,KAVILUMPARA PANCHAYATH,673513',
    centerCode: 'KL0770010',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc172',
    name: 'ROYAL SMOKE TEST CENTER',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: 'ROYAL SMOKE TEST CENTER, PERAMBRA,PUSHPA NIVAS, PERAMBRA,673525',
    centerCode: 'KL0770012',
    vehicleTypes: ['Petrol/CNG/LPG Vehicle', 'Diesel Vehicle']
  },
  {
    id: 'tc173',
    name: 'SPEED POLLUTION TESTING CENTRE',
    contact: '',
    location: 'Perambra',
    rto: 'kl77',
    address: '291/F,THEVERKOTTAYIL BUILDING,PANTHIRIKKARA,PERAMBRA,673528',
    centerCode: 'KL0770023',
    vehicleTypes: ['Diesel Vehicle', 'Petrol/CNG/LPG Vehicle']
  },



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