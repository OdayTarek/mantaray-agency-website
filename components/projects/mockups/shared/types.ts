// Shared types for project mockups

export interface MockupProps {
  variant?: string
  size?: 'card' | 'hero' | 'full'
  interactive?: boolean
}

export interface MockupVariant {
  id: string
  label: string
  description?: string
}

// Fintech (Pulse) data types
export interface FintechData {
  balance: {
    total: string
    income: string
    expenses: string
    savings: string
  }
  transactions: Transaction[]
}

export interface Transaction {
  id: string
  merchant: string
  category: string
  amount: string
  date: string
  type: 'debit' | 'credit'
}

// E-commerce (Bloom) data types
export interface EcommerceData {
  products: Product[]
  categories: string[]
}

export interface Product {
  id: string
  name: string
  price: string
  originalPrice?: string
  rating: number
  reviews: number
  badge?: string
  category: string
}

// CRM (Atlas) data types
export interface CRMData {
  contacts: Contact[]
  deals: Deal[]
  stats: DashboardStat[]
}

export interface Contact {
  id: string
  name: string
  company: string
  email: string
  status: 'active' | 'inactive' | 'lead'
  lastContact: string
}

export interface Deal {
  id: string
  name: string
  value: string
  stage: 'lead' | 'qualified' | 'proposal' | 'negotiation' | 'closed'
  probability: number
  contact: string
}

export interface DashboardStat {
  label: string
  value: string
  change?: string
  trend?: 'up' | 'down'
}

// Travel (Nomad) data types
export interface TravelData {
  listings: Listing[]
  search: SearchParams
}

export interface Listing {
  id: string
  title: string
  location: string
  price: string
  priceUnit: string
  rating: number
  reviews: number
  badges: string[]
  amenities: string[]
}

export interface SearchParams {
  location: string
  checkIn: string
  checkOut: string
  guests: number
}

// Fitness (Volt) data types
export interface FitnessData {
  todayWorkout: Workout
  exercises: Exercise[]
  streak: number
  weeklyProgress: number
}

export interface Workout {
  name: string
  duration: string
  calories: number
  exercises: number
}

export interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  weight?: string
  completed: boolean
}

// Healthcare (Medix) data types
export interface HealthcareData {
  appointments: Appointment[]
  providers: Provider[]
  vitals: VitalSign[]
}

export interface Appointment {
  id: string
  type: string
  provider: string
  date: string
  status: 'upcoming' | 'completed' | 'cancelled'
}

export interface Provider {
  id: string
  name: string
  specialty: string
  rating: number
  available: boolean
}

export interface VitalSign {
  label: string
  value: string
  unit: string
  status: 'normal' | 'warning' | 'alert'
}

// Seeded data for all mockups
export const pulseData: FintechData = {
  balance: {
    total: '$124,500.00',
    income: '$45,200.00',
    expenses: '$23,100.00',
    savings: '$56,200.00',
  },
  transactions: [
    { id: '1', merchant: 'Apple Store', category: 'Shopping', amount: '-$149.99', date: 'Today', type: 'debit' },
    { id: '2', merchant: 'Whole Foods', category: 'Groceries', amount: '-$86.32', date: 'Today', type: 'debit' },
    { id: '3', merchant: 'Salary Deposit', category: 'Income', amount: '+$4,500.00', date: 'Yesterday', type: 'credit' },
    { id: '4', merchant: 'Netflix', category: 'Entertainment', amount: '-$15.99', date: 'Jan 12', type: 'debit' },
    { id: '5', merchant: 'Transfer to Savings', category: 'Transfer', amount: '-$500.00', date: 'Jan 11', type: 'debit' },
  ],
}

export const bloomData: EcommerceData = {
  products: [
    { id: '1', name: 'Wireless Headphones Pro', price: '$149.99', rating: 4.8, reviews: 247, badge: 'Best Seller', category: 'Electronics' },
    { id: '2', name: 'Running Shoes Elite', price: '$129.00', originalPrice: '$159.00', rating: 4.9, reviews: 183, badge: 'Sale', category: 'Footwear' },
    { id: '3', name: 'Smart Watch Series 5', price: '$299.99', rating: 4.7, reviews: 512, category: 'Electronics' },
    { id: '4', name: 'Leather Messenger Bag', price: '$89.00', rating: 4.6, reviews: 94, badge: 'New', category: 'Accessories' },
    { id: '5', name: 'Yoga Mat Premium', price: '$45.00', rating: 4.8, reviews: 328, category: 'Fitness' },
    { id: '6', name: 'Ceramic Coffee Set', price: '$34.99', rating: 4.5, reviews: 156, category: 'Home' },
  ],
  categories: ['All', 'Electronics', 'Footwear', 'Accessories', 'Fitness', 'Home'],
}

export const atlasData: CRMData = {
  contacts: [
    { id: '1', name: 'Sarah Chen', company: 'Acme Corp', email: 'sarah@acme.co', status: 'active', lastContact: '2 days ago' },
    { id: '2', name: 'Michael Rodriguez', company: 'TechStart Inc', email: 'michael@techstart.io', status: 'lead', lastContact: '5 days ago' },
    { id: '3', name: 'Emma Thompson', company: 'GlobalTrade Ltd', email: 'emma@globaltrade.com', status: 'active', lastContact: 'Today' },
    { id: '4', name: 'James Wilson', company: 'InnovateCo', email: 'james@innovateco.com', status: 'inactive', lastContact: '2 weeks ago' },
    { id: '5', name: 'Lisa Park', company: 'FutureWorks', email: 'lisa@futureworks.io', status: 'lead', lastContact: '1 day ago' },
  ],
  deals: [
    { id: '1', name: 'Enterprise License', value: '$45,000', stage: 'proposal', probability: 75, contact: 'Sarah Chen' },
    { id: '2', name: 'Annual Subscription', value: '$12,000', stage: 'negotiation', probability: 85, contact: 'Emma Thompson' },
    { id: '3', name: 'Custom Integration', value: '$28,500', stage: 'qualified', probability: 50, contact: 'Michael Rodriguez' },
    { id: '4', name: 'Platform Migration', value: '$65,000', stage: 'lead', probability: 25, contact: 'Lisa Park' },
  ],
  stats: [
    { label: 'Total Contacts', value: '2,847', change: '+12%', trend: 'up' },
    { label: 'Active Deals', value: '484', change: '+8%', trend: 'up' },
    { label: 'Pipeline Value', value: '$2.4M', change: '+15%', trend: 'up' },
    { label: 'Tasks Due', value: '32', change: '-5%', trend: 'down' },
  ],
}

export const nomadData: TravelData = {
  listings: [
    { id: '1', title: 'Coastal Villa', location: 'Malibu, California', price: '$285', priceUnit: 'night', rating: 4.9, reviews: 128, badges: ['Superhost', 'Guest Favorite'], amenities: ['WiFi', 'Pool', 'Kitchen', 'Ocean View'] },
    { id: '2', title: 'Mountain Retreat', location: 'Aspen, Colorado', price: '$420', priceUnit: 'night', rating: 4.8, reviews: 96, badges: ['Superhost'], amenities: ['WiFi', 'Hot Tub', 'Fireplace', 'Ski-in'] },
    { id: '3', title: 'Urban Loft', location: 'Brooklyn, New York', price: '$175', priceUnit: 'night', rating: 4.7, reviews: 214, badges: ['Guest Favorite'], amenities: ['WiFi', 'Kitchen', 'Workspace'] },
    { id: '4', title: 'Desert Oasis', location: 'Scottsdale, Arizona', price: '$195', priceUnit: 'night', rating: 4.9, reviews: 87, badges: ['Superhost'], amenities: ['Pool', 'Hot Tub', 'BBQ', 'Fire Pit'] },
  ],
  search: {
    location: 'California, USA',
    checkIn: 'Jan 20',
    checkOut: 'Jan 25',
    guests: 2,
  },
}

export const voltData: FitnessData = {
  todayWorkout: {
    name: 'Upper Body Strength',
    duration: '45 min',
    calories: 320,
    exercises: 8,
  },
  exercises: [
    { id: '1', name: 'Bench Press', sets: 3, reps: 12, weight: '135 lbs', completed: true },
    { id: '2', name: 'Shoulder Press', sets: 3, reps: 10, weight: '85 lbs', completed: true },
    { id: '3', name: 'Lat Pulldown', sets: 3, reps: 12, weight: '120 lbs', completed: false },
    { id: '4', name: 'Bicep Curls', sets: 3, reps: 15, weight: '30 lbs', completed: false },
    { id: '5', name: 'Tricep Dips', sets: 3, reps: 12, completed: false },
  ],
  streak: 14,
  weeklyProgress: 67,
}

export const medixData: HealthcareData = {
  appointments: [
    { id: '1', type: 'Follow-up Consultation', provider: 'Dr. James Wilson', date: 'Tomorrow, 2:30 PM', status: 'upcoming' },
    { id: '2', type: 'Annual Checkup', provider: 'Dr. Lisa Park', date: 'Jan 22, 10:00 AM', status: 'upcoming' },
    { id: '3', type: 'Lab Results Review', provider: 'Dr. James Wilson', date: 'Jan 10, 3:00 PM', status: 'completed' },
  ],
  providers: [
    { id: '1', name: 'Dr. James Wilson', specialty: 'General Practice', rating: 4.9, available: true },
    { id: '2', name: 'Dr. Lisa Park', specialty: 'Cardiology', rating: 4.8, available: true },
    { id: '3', name: 'Dr. Michael Chen', specialty: 'Dermatology', rating: 4.7, available: false },
  ],
  vitals: [
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal' },
    { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal' },
    { label: 'Temperature', value: '98.6', unit: '°F', status: 'normal' },
    { label: 'Weight', value: '165', unit: 'lbs', status: 'normal' },
  ],
}

// Variant configurations for each project
export const pulseVariants: MockupVariant[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'accounts', label: 'Accounts' },
]

export const bloomVariants: MockupVariant[] = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'detail', label: 'Product Detail' },
  { id: 'cart', label: 'Cart' },
]

export const atlasVariants: MockupVariant[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'contacts', label: 'Contacts' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'reports', label: 'Reports' },
]

export const nomadVariants: MockupVariant[] = [
  { id: 'search', label: 'Search' },
  { id: 'results', label: 'Results' },
  { id: 'detail', label: 'Property' },
  { id: 'booking', label: 'Booking' },
]

export const voltVariants: MockupVariant[] = [
  { id: 'home', label: 'Home' },
  { id: 'workout', label: 'Workout' },
  { id: 'exercise', label: 'Exercise' },
  { id: 'progress', label: 'Progress' },
]

export const medixVariants: MockupVariant[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'booking', label: 'Booking' },
  { id: 'consultation', label: 'Consultation' },
  { id: 'records', label: 'Records' },
]
