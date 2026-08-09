import agentOverlay from '../assets/agent-overlay.png';
import travelHotelSearch from '../assets/booking-tool/hotel-book.png';
import travelHotelRooms from '../assets/booking-tool/hotel-details.png';
import travelFlightDetails from '../assets/booking-tool/air-modal-details.png';
import travelReviewAndBook from '../assets/booking-tool/air-review-and-book.png';
import adidasByKorn from '../assets/adidas-by-korn.png';
import adidasBuyerProducts from '../assets/adidas-by-korn/buyer-products.png';
import adidasBuyerOrders from '../assets/adidas-by-korn/buyer-orders.png';
import adidasAdminStock from '../assets/adidas-by-korn/admin-stock.png';
import adidasAdminOrders from '../assets/adidas-by-korn/admin-orders.png';
import kireva from '../assets/kireva.png';
import kirevaDashboard from '../assets/kireva/dashboard.png';
import kirevaCreateStudent from '../assets/kireva/create-student.png';
import kirevaCreateGroup from '../assets/kireva/create-group.png';
import kirevaCreateScore from '../assets/kireva/create-score.png';
import tallied from '../assets/tallied.png';
import proterisCompliance from '../assets/proteris.png';
import tadigital from '../assets/ta-digital.png';
import incomelaboratory from '../assets/income-labs.png';
import cuemateTennis from '../assets/cuemate-tennis.png';

export const NAV_ITEMS = [
  { id: 'hero', label: 'Top' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Selected Work' },
  { id: 'sites', label: 'Sites' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT_STATS = [
  { label: 'Based in', value: 'Montevideo', sub: 'UY · UTC-3' },
  { label: 'Years', value: '5+', sub: 'building products' },
  { label: 'Languages', value: 'EN · ES', sub: 'intermediate · native' },
];

export const MARQUEE_ITEMS = [
  'React',
  'TypeScript',
  'Figma',
  'Webflow',
  'WordPress',
  'Mantine UI',
  'TanStack',
  'Zustand',
  'Vite',
];

export const STACK_CATEGORIES = [
  {
    num: '01',
    name: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Vite',
      'Ky',
      'Zustand',
      'TanStack Query',
      'TanStack Form',
      'Mantine UI',
    ],
  },
  {
    num: '02',
    name: 'CMS / No-code',
    items: ['WordPress', 'Custom Themes', 'ACF', 'Webflow', 'Visual Composer', 'Divi'],
  },
  {
    num: '03',
    name: 'Design',
    items: [
      'Figma',
      'Design Systems',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Photoshop',
      'Illustrator',
    ],
  },
  { num: '04', name: 'Other', items: ['PHP', 'SQL', 'Git / GitHub', 'Jira', 'Yoast SEO'] },
];

export const EXPERIENCE = [
  {
    dates: '11.2025 — Present',
    company: 'Paramek',
    role: 'Frontend Developer & Product Designer · Business Travel',
    description:
      "Lead end-to-end product design and frontend development across the company's applications. Partner with stakeholders to understand operational challenges, define requirements, and design intuitive solutions. Own the company-wide design system in Figma and implement scalable React applications, bridging the gap between design and engineering.",
    tags: ['React', 'TypeScript', 'Figma', 'Design Systems'],
  },
  {
    dates: '05.2022 — 10.2025',
    company: 'Qubika',
    role: 'Frontend Developer · Software Consultancy',
    description:
      'Front-end web developer specialized in building dynamic, responsive applications using React.js, TypeScript, Axios, Redux Toolkit, and Next.js. Custom WordPress theme development with seamless ACF integration. Webflow development. Focus on fully responsive, pixel-perfect web experiences.',
    tags: ['React', 'Next.js', 'Redux Toolkit', 'WordPress', 'ACF', 'Webflow'],
  },
  {
    dates: '06.2021 — 04.2022',
    company: 'Phone IQ',
    role: 'QA Analyst · Telecommunications',
    description:
      'Design and execution of test cases for quality assurance. Incident reporting and tracking using Jira. Foundation for thinking about products from the user perspective — what can break, what should work, what feels off.',
    tags: ['Jira', 'Test Cases', 'Functional Testing'],
  },
];

/**
 * React applications with a dedicated case study page.
 * `slug` drives the /work/:slug route — keep it stable, it is a public URL.
 * `shots` are the 2x2 screenshot grid. A shot with `src: null` renders a styled
 * placeholder naming the `file` to drop into src/assets to fill it in.
 * `shotBg` is optional: screenshots are shown with `object-fit: contain`, so it
 * fills the letterbox with the captured UI's own background. Omit it for
 * light-themed products, which sit fine on the default soft grey.
 */
export const PROJECTS = [
  {
    slug: 'kireva',
    n: '01',
    meta: 'Single-page app · 2026',
    title: 'School Management Platform',
    summary:
      'Role-aware platform centralizing students, staff, classes, grades and attendance for an educational institution.',
    intro:
      'Kireva centralizes student records, grading, attendance and reporting into one role-aware platform — so administrators, teachers and staff each see exactly the data relevant to their job.',
    problem:
      'Schools often juggle student records, grading, attendance, and reporting across spreadsheets and disconnected tools — creating manual work and inconsistent academic records.',
    myRole:
      'Led the design and frontend implementation end-to-end — from Figma design system to production React application.',
    solution: [
      'Kireva is a school management platform where administrators, teachers, and parents each see exactly what their role requires.',
      'Admins manage the full school structure — students, class groups, classrooms, subjects, staff users, and school cycles. Teachers see only their assigned groups and subjects, where they enter grades across evaluation areas, log attendance, and publish report cards. Parents get a read-only view of their children’s records and school notifications.',
      'A granular permissions system (+15 permissions, fully composable into custom roles) drives role-aware routing and UI throughout — no one lands on a screen they shouldn’t access.',
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'Radix UI', 'Redux', 'Axios', 'Figma'],
    cover: kireva,
    coverAlt: 'Kireva school management platform — admin dashboard',
    shots: [
      { src: kirevaDashboard, label: 'Admin dashboard — school-wide overview and quick actions' },
      { src: kirevaCreateStudent, label: 'Student record — profile, health details and guardians' },
      { src: kirevaCreateGroup, label: 'Group setup — subjects, teacher assignment and roster' },
      { src: kirevaCreateScore, label: 'Score group — grades and evaluation areas' },
    ],
  },
  {
    slug: 'travel-booking',
    n: '02',
    meta: 'Single-page app · 2025',
    title: 'Travel Booking for Agents',
    summary:
      'Internal corporate travel platform replacing a third-party booking system — flights, hotels, cars and invoices in one place.',
    intro:
      'An internal corporate travel management platform replacing a third-party booking system with transaction-based costs — flights, hotels, and rental cars for agents managing travel across multiple client organizations.',
    problem:
      'Agents relied on a third-party booking system with transaction-based costs, and lacked a centralized way to access traveler profiles, company information, itineraries, invoices and ticket statuses — creating constant context switching.',
    myRole:
      'Partnered with operational stakeholders to translate travel-agent workflows into product requirements. Owned user flows, interface design, design-system implementation and frontend development in React and TypeScript.',
    solution: [
      'End-to-end booking flows for flights, hotels, and rental cars, letting agents efficiently manage business travel for employees across multiple client organizations.',
      'A centralized experience brings traveler profiles, company info, itineraries, invoices and ticket statuses into a single place, reducing context switching and supporting more efficient travel operations.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Mantine', 'TanStack Router', 'TanStack Query', 'Figma'],
    cover: agentOverlay,
    coverAlt: 'Travel booking platform — agent dashboard',
    shots: [
      { src: travelFlightDetails, label: 'Flight detail — segments, amenities and fare' },
      { src: travelReviewAndBook, label: 'Review and book — cost breakdown and traveler info' },
      { src: travelHotelSearch, label: 'Hotel search — filters and results' },
      { src: travelHotelRooms, label: 'Property detail — room options and rates' },
    ],
  },
  {
    slug: 'adidas-by-korn',
    n: '03',
    meta: 'E-commerce · 2024',
    title: 'Adidas by Korn',
    summary:
      'Single-page e-commerce frontend with buyer/admin roles, catalog, product detail and stock management.',
    intro:
      'A small single-page e-commerce frontend built with plain HTML, CSS and JavaScript, implementing buyer/admin roles, a product catalog and stock management.',
    problem:
      'A demo e-commerce experience needed to show two distinct roles — buyers browsing and purchasing, and admins managing product and stock — without a backend framework.',
    myRole:
      'Designed the interface in Figma and built the frontend in vanilla JavaScript, HTML and CSS — including a preload dataset for demos.',
    solution: [
      'A single-page frontend implementing user roles (buyer/admin), a product catalog with detail pages, purchase orders, and admin tools for product and stock management — with a simple preload dataset so the whole flow can be demoed end to end.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Figma'],
    cover: adidasByKorn,
    coverAlt: 'Adidas by Korn — product catalog',
    shotBg: '#000000',
    shots: [
      { src: adidasBuyerProducts, label: 'Buyer — product catalog with on-sale filter' },
      { src: adidasBuyerOrders, label: 'Buyer — purchase orders by status' },
      { src: adidasAdminStock, label: 'Admin — stock, pricing and product status' },
      { src: adidasAdminOrders, label: 'Admin — purchase approval queue' },
    ],
  },
];

export const SITES = [
  {
    n: '04',
    title: 'Tallied',
    href: 'https://tallied.io',
    url: 'tallied.io',
    meta: 'Fintech · Webflow',
    summary:
      'Infrastructural fintech providing an end-to-end platform to build, launch and scale credit card programs.',
    tags: ['Webflow', 'CMS', 'Animations'],
    image: tallied,
  },
  {
    n: '05',
    title: 'Proteris Compliance',
    href: 'https://proteriscompliance.com',
    url: 'proteriscompliance.com',
    meta: 'F&I · Webflow',
    summary:
      'Compliance services for finance and insurance product contracts in automotive, marine and powersport industries.',
    tags: ['Webflow', 'CookieYes', 'Custom CMS'],
    image: proterisCompliance,
  },
  {
    n: '06',
    title: 'TA Digital Group',
    href: 'https://tadigitalgroup.com',
    url: 'tadigitalgroup.com',
    meta: 'Infrastructure · Webflow',
    summary: 'Digital infrastructure company specializing in large-scale data center development.',
    tags: ['Webflow', 'CookieYes', 'Animations'],
    image: tadigital,
  },
  {
    n: '07',
    title: 'Income Laboratory',
    href: 'https://incomelaboratory.com',
    url: 'incomelaboratory.com',
    meta: 'Fintech · WordPress',
    summary:
      'Advanced retirement income planning software. Custom theme with ACF Flexible Content, migrated from Divi.',
    tags: ['WordPress', 'ACF Pro', 'Flexible Content'],
    image: incomelaboratory,
  },
  {
    n: '08',
    title: 'CueMate Tennis',
    href: 'https://stage.tennis.cuemate.com',
    url: 'stage.tennis.cuemate.com',
    meta: 'Sports tech · WordPress',
    summary:
      'Movement skills training ecosystem with real-time feedback, shared login with the mobile app.',
    tags: ['WordPress', 'Custom Theme', 'Visual Composer'],
    image: cuemateTennis,
  },
];

export const EDUCATION = [
  {
    date: '03.2023',
    title: 'React Frontend Development Career',
    org: 'Coderhouse',
    tags: 'JS · React',
  },
  { date: '04.2022', title: 'WordPress', org: 'Coderhouse', tags: 'PHP · Themes' },
  { date: '12.2021', title: 'UX/UI Development Career', org: 'Coderhouse', tags: 'UX/UI · PS/AI' },
  { date: '04.2021', title: 'Software Testing Fundamentals — Certified', org: 'AICS', tags: 'QA' },
  { date: '01.2021 — 06.2021', title: 'Functional Testing', org: 'IBEC', tags: 'QA' },
  {
    date: '2015 — 2018',
    title: "Bachelor's Degree in Fashion Design",
    org: 'UDE — Universidad de la Empresa',
    tags: 'Composition',
  },
];

export const CONTACT = {
  email: 'tamarasancristobal@gmail.com',
  linkedin: 'https://linkedin.com/in/tamarasancristobal',
  location: 'Montevideo, Uruguay',
};
