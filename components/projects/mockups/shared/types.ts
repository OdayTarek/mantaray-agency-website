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
// B2B (Barista Pro) data types
export interface B2BData {
  equipment: Equipment[]
  services: Service[]
  brands: Brand[]
}

export interface Equipment {
  id: string
  name: string
  brand: string
  price: string
  rating: number
  badge?: string
  category: string
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
}

export interface Brand {
  id: string
  name: string
}

// Fashion (Luxe Threads) data types
export interface FashionData {
  products: FashionProduct[]
  cart: CartItem[]
}

export interface FashionProduct {
  id: string
  name: string
  price: string
  sizes: string[]
  brand: string
  badge?: string
  category: string
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  size: string
}

// Retail (Bazaar Hub) data types
export interface RetailData {
  categories: RetailCategory[]
  products: RetailProduct[]
  branches: Branch[]
}

export interface RetailCategory {
  id: string
  name: string
  productCount: number
  icon: string
}

export interface RetailProduct {
  id: string
  name: string
  price: string
  badge?: string
  category: string
}

export interface Branch {
  id: string
  name: string
  area: string
  city: string
}

// Hospitality (Haven Retreats + Alpine Lodge) data types
export interface HospitalityData {
  cabins: Cabin[]
  amenities: Amenity[]
}

export interface Cabin {
  id: string
  name: string
  bedrooms: number
  pricePerNight: string
  features: string[]
  badge?: string
}

export interface Amenity {
  id: string
  name: string
  description: string
  icon: string
}

// Seeded data for all new mockups
export const baristaData: B2BData = {
  equipment: [
    { id: '1', name: 'Verde 2-Group Espresso Machine', brand: 'Sanremo', price: 'EGP 185,000', rating: 5.0, badge: 'Best Seller', category: 'Espresso Machines' },
    { id: '2', name: 'Verde 3-Group Commercial', brand: 'Sanremo', price: 'EGP 210,000', rating: 4.5, badge: 'New', category: 'Espresso Machines' },
    { id: '3', name: 'M200 2-Group Espresso Machine', brand: 'La Cimbali', price: 'EGP 165,000', rating: 4.0, badge: 'Sale', category: 'Espresso Machines' },
    { id: '4', name: 'Major V Electronic Grinder', brand: 'Mazzer', price: 'EGP 38,900', rating: 5.0, badge: 'Best Seller', category: 'Grinders' },
    { id: '5', name: 'Professional Blender Pro', brand: 'Vitamix', price: 'EGP 12,500', rating: 4.8, category: 'Blenders' },
  ],
  services: [
    { id: '1', name: 'Equipment Sales', description: 'Wide range of premium coffee machines, grinders, blenders', icon: 'store' },
    { id: '2', name: 'Maintenance & Repair', description: 'Regular maintenance contracts and emergency repairs', icon: 'tools' },
    { id: '3', name: 'Barista Training', description: 'Professional barista training programs', icon: 'graduation-cap' },
  ],
  brands: [
    { id: '1', name: 'Sanremo' },
    { id: '2', name: 'La Cimbali' },
    { id: '3', name: 'Wega' },
    { id: '4', name: 'Mazzer' },
    { id: '5', name: 'Vitamix' },
  ],
}

export const luxeData: FashionData = {
  products: [
    { id: '1', name: 'Silk Evening Dress', price: '2,499 EGP', sizes: ['S', 'M', 'L'], brand: 'Luxe', badge: 'Best Seller', category: 'Dresses' },
    { id: '2', name: 'Cashmere Sweater', price: '1,899 EGP', sizes: ['S', 'M', 'L', 'XL'], brand: 'Luxe', badge: 'New', category: 'Tops' },
    { id: '3', name: 'Leather Handbag', price: '3,299 EGP', sizes: ['One Size'], brand: 'Luxe', category: 'Accessories' },
    { id: '4', name: 'Tailored Blazer', price: '2,799 EGP', sizes: ['S', 'M', 'L'], brand: 'Luxe', category: 'Outerwear' },
  ],
  cart: [
    { id: '1', productId: '1', quantity: 1, size: 'M' },
    { id: '2', productId: '3', quantity: 1, size: 'One Size' },
  ],
}

export const bazaarData: RetailData = {
  categories: [
    { id: '1', name: 'اكسسوارات', productCount: 250, icon: 'accessories' },
    { id: '2', name: 'أدوات منزلية', productCount: 180, icon: 'home' },
    { id: '3', name: 'ديكور', productCount: 120, icon: 'decor' },
    { id: '4', name: 'ميكب', productCount: 95, icon: 'makeup' },
    { id: '5', name: 'ألعاب', productCount: 140, icon: 'toys' },
  ],
  products: [
    { id: '1', name: 'Wireless Headphones', price: '299 EGP', badge: 'Best Seller', category: 'اكسسوارات' },
    { id: '2', name: 'Kitchen Organizer Set', price: '149 EGP', badge: 'New', category: 'أدوات منزلية' },
    { id: '3', name: 'Wall Art Canvas', price: '399 EGP', category: 'ديكور' },
    { id: '4', name: 'Makeup Brush Set', price: '249 EGP', badge: 'Sale', category: 'ميكب' },
  ],
  branches: [
    { id: '1', name: 'فرع مصر الجديدة', area: 'Heliopolis', city: 'Cairo' },
    { id: '2', name: 'فرع المعادي', area: 'Maadi', city: 'Cairo' },
    { id: '3', name: 'فرع الدقي', area: 'Dokki', city: 'Giza' },
    { id: '4', name: 'فرع المقطم', area: 'Mokattam', city: 'Cairo' },
    { id: '5', name: 'فرع عباس العقاد', area: 'Nasr City', city: 'Cairo' },
  ],
}

export const havenData: HospitalityData = {
  cabins: [
    { id: '1', name: 'Cabin 1', bedrooms: 3, pricePerNight: '12,000 EGP', features: ['Indoor Heated Pool', 'Outdoor Heated Pool', '100% Privacy'], badge: 'Best Seller' },
    { id: '2', name: 'Cabin 2', bedrooms: 4, pricePerNight: '7,000 EGP', features: ['5 Bathrooms', 'Swimming Pool', '100% Privacy'], badge: 'Best Value' },
    { id: '3', name: 'Cabin 3', bedrooms: 3, pricePerNight: '11,000 EGP', features: ['Indoor Heated Pool', '100% Privacy'] },
    { id: '4', name: 'Cabin 4', bedrooms: 4, pricePerNight: '15,000 EGP', features: ['Heated Glass Pool', 'Jacuzzi', '100% Privacy'], badge: 'Premium' },
  ],
  amenities: [
    { id: '1', name: 'Heated Pools', description: 'Indoor & outdoor options', icon: 'pool' },
    { id: '2', name: '100% Privacy', description: 'Fully private compounds', icon: 'lock' },
    { id: '3', name: 'European Design', description: 'Stylish interiors', icon: 'home' },
    { id: '4', name: 'Families Welcome', description: 'Up to 8 guests', icon: 'users' },
  ],
}

export const alpineData: HospitalityData = {
  cabins: [
    { id: '1', name: 'Alpine Suite', bedrooms: 2, pricePerNight: '9,500 EGP', features: ['Mountain View', 'Heated Pool', 'Fireplace'], badge: 'Best Seller' },
    { id: '2', name: 'Mountain Lodge', bedrooms: 3, pricePerNight: '12,500 EGP', features: ['Panoramic View', 'Hot Tub', 'Ski Storage'], badge: 'Premium' },
    { id: '3', name: 'Forest Cabin', bedrooms: 2, pricePerNight: '8,000 EGP', features: ['Forest View', 'Outdoor Deck', 'BBQ Area'], badge: 'Best Value' },
  ],
  amenities: [
    { id: '1', name: 'Mountain Views', description: 'Breathtaking scenery', icon: 'mountain' },
    { id: '2', name: 'Heated Pools', description: 'Year-round swimming', icon: 'pool' },
    { id: '3', name: 'Ski Access', description: 'Direct slope access', icon: 'ski' },
    { id: '4', name: 'Cozy Fireplaces', description: 'Wood-burning warmth', icon: 'fire' },
  ],
}

// Variant configurations for new projects
export const baristaVariants: MockupVariant[] = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
]

export const luxeVariants: MockupVariant[] = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'cart', label: 'Cart' },
  { id: 'checkout', label: 'Checkout' },
]

export const bazaarVariants: MockupVariant[] = [
  { id: 'home', label: 'Home' },
  { id: 'categories', label: 'Categories' },
  { id: 'products', label: 'Products' },
  { id: 'branches', label: 'Branches' },
]

export const havenVariants: MockupVariant[] = [
  { id: 'home', label: 'Home' },
  { id: 'cabins', label: 'Cabins' },
  { id: 'experience', label: 'Experience' },
  { id: 'booking', label: 'Booking' },
]

export const alpineVariants: MockupVariant[] = [
  { id: 'home', label: 'Home' },
  { id: 'cabins', label: 'Cabins' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]
