export interface TestingCenter {
  id: string;
  name: string;
  contact: string;
  location: string;
  rto: string;
  address: string;
  email?: string;
  workingHours?: string;
}

export interface Representative {
  id: string;
  name: string;
  role: string;
  contact: string;
  rto: string;
  email?: string;
  photo?: string;
}

export interface GovernmentOrder {
  id: string;
  title: string;
  number: string;
  date: string;
  summary: string;
  documentUrl: string;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  imageUrl?: string;
  tags?: string[];
}

export interface RequestForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  contactNumber?: string;
  rto?: string;
}

export interface SlideImage {
  id: number;
  url: string;
  title: string;
  description?: string;
  alt: string;
}

export interface RTODistrict {
  id: string;
  name: string;
  code: string;
}