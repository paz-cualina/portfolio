import { WorkHeader } from './work-header.jsx';
import { WorkCategory } from './work-category.jsx';
import agentOverlay from '../../assets/agent-overlay.png';
import adidasByKorn from '../../assets/adidas-by-korn.png';
// import tattooApp from '../../assets/tattoo-app.png';
import kireva from '../../assets/kireva.png';
import tallied from '../../assets/tallied.png';
import proterisCompliance from '../../assets/proteris.png';
import tadigital from '../../assets/ta-digital.png';
import incomelaboratory from '../../assets/income-labs.png';
import cuemateTennis from '../../assets/cuemate-tennis.png';

const REACT_PROJECTS = [
  {
    n: '01',
    title: 'School Management Platform',
    role: 'Frontend Development · Product Design',
    tag: 'Single-page app · 2026',
    desc: [
      `Led the design and frontend implementation of a school management platform created to streamline the day-to-day operations of an educational institution, giving schools a single place to manage students, staff, classes, grades, and attendance.`,
      `Schools often juggle student records, grading, attendance, and reporting across spreadsheets and disconnected tools. Kireva centralizes these workflows into one role-aware platform, so administrators, teachers, and staff each see exactly the data and actions relevant to their job — reducing manual work and keeping academic records accurate and consistent.`,
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'Radix UI', 'Redux', 'Axios', 'Figma'],
    link: {
      label: 'View demo',
      href: 'https://drive.google.com/file/d/18RHlmoOhndN4PJdbS7ycWEqk5dzaMC0L/view?usp=sharing',
    },
    label: 'School management · admin dashboard',
    image: kireva,
  },
  {
    n: '02',
    title: 'Travel Booking for Agents',
    role: 'Frontend Development · Product Design',
    tag: 'Single-page app · 2025',
    desc: [
      `Led the design and frontend implementation of an internal corporate travel management platform created to replace a third-party booking system with transaction-based costs.`,
      `Partnered with operational stakeholders to understand travel agents' workflows and translate business needs into intuitive product experiences. Designed end-to-end booking flows for flights, hotels, and rental cars, enabling agents to efficiently manage business travel for employees across multiple client organizations.`,
      `Created a centralized experience where agents could access traveler profiles, company information, itineraries, invoices, and ticket statuses in a single place, reducing context switching and supporting more efficient travel operations. Responsible for user flows, interface design, design system implementation, and frontend development using React and TypeScript.`,
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Mantine', 'TanStack Router', 'TanStack Query', 'Figma'],
    link: {
      label: 'View demo',
      href: 'https://drive.google.com/file/d/11xWYF8XakSigVNGkr16zqyecLSIquiq0/view?usp=sharing',
    },
    label: 'Travel booking · agent dashboard',
    image: agentOverlay,
  },
  {
    n: '03',
    title: 'Adidas by Korn',
    role: 'Figma → JavaScript',
    tag: 'E-commerce · 2024',
    desc: 'A small single-page e-commerce frontend built with plain HTML, CSS, and JavaScript. It implements user roles (buyer/admin), product catalog, product details, purchase orders, admin product/stock management, and a simple preload dataset for demos.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Figma'],
    link: {
      label: 'View demo',
      href: 'https://drive.google.com/file/d/1L3cGtLFr6G6k4zRk_3EyWjkITxI-Fs4p/view?usp=drive_link',
    },
    label: 'E-commerce · single-page app',
    image: adidasByKorn,
  },
  // {
  //   n: '03',
  //   title: 'Tattoo App',
  //   role: 'Figma — UX/UI only',
  //   tag: 'Mobile · 2023',
  //   desc: 'Mobile app for discovering tattoo designs and artists. Browse and save favorites, explore categorized styles, connect with artists through in-app chat to coordinate appointments, and receive scheduled notifications for upcoming sessions.',
  //   stack: ['Figma', 'UX Research', 'Prototyping', 'iOS / Android'],
  //   link: {
  //     label: 'View prototype',
  //     href: 'https://www.figma.com/proto/uGxGxRvZLqUoZpiChsTUKE/Prototipo-funcional--Microinteracciones-?node-id=931-2118&p=f&t=SBG37f3Z9SvQ7RfU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=931%3A2118',
  //   },
  //   label: 'Mobile · discovery + chat',
  //   image: tattooApp,
  // },
];

const WEBFLOW_SITES = [
  {
    n: '04',
    title: 'Tallied',
    url: 'tallied.io',
    tag: 'Fintech · Webflow',
    desc: 'Infrastructural fintech providing an end-to-end platform to build, launch and scale credit card programs for consumers and businesses.',
    stack: ['Webflow', 'CMS', 'Animations'],
    label: 'Marketing site · fintech',
    image: tallied,
  },
  {
    n: '05',
    title: 'Proteris Compliance',
    url: 'proteriscompliance.com',
    tag: 'F&I · Webflow',
    desc: 'Compliance services for finance and insurance product contracts in the automotive, marine and powersport industries.',
    stack: ['Webflow', 'CookieYes', 'Custom CMS'],
    label: 'Compliance services · F&I',
    image: proterisCompliance,
  },
  {
    n: '06',
    title: 'TA Digital Group',
    url: 'tadigitalgroup.com',
    tag: 'Infrastructure · Webflow',
    desc: 'Digital infrastructure company specializing in large-scale data center development for hyperscale and enterprise clients.',
    stack: ['Webflow', 'CookieYes', 'Animations'],
    label: 'Data center · enterprise',
    image: tadigital,
  },
];

const WP_SITES = [
  {
    n: '07',
    title: 'Income Laboratory',
    url: 'incomelaboratory.com',
    tag: 'Fintech · WordPress',
    desc: 'Advanced retirement income planning software for financial advisors. Custom theme with ACF Flexible Content for dashboard-driven page building. Migrated from Divi Builder to a tailored theme on a new server.',
    stack: ['WordPress', 'ACF Pro', 'Flexible Content', 'GTM', 'Yoast'],
    label: 'Retirement planning · fintech',
    image: incomelaboratory,
  },
  {
    n: '08',
    title: 'CueMate Tennis',
    url: 'stage.tennis.cuemate.com',
    tag: 'Sports tech · WordPress',
    desc: 'Movement skills training ecosystem helping tennis players enhance performance with real-time feedback and data-driven insights. Custom theme + Visual Composer page builder, login connected to an external DB shared with the mobile app.',
    stack: ['WordPress', 'Custom Theme', 'Visual Composer'],
    label: 'Sports tech · training platform',
    image: cuemateTennis,
  },
];

const Work = () => (
  <section id="work">
    <WorkHeader />
    <WorkCategory
      index="04"
      label="React Applications"
      kicker="Figma + Code · End-to-end design and development"
      projects={REACT_PROJECTS}
      showHero
    />
    <WorkCategory
      index="05"
      label="Webflow Sites"
      kicker="Frontend implementation · Designs from external designers"
      projects={WEBFLOW_SITES}
    />
    <WorkCategory
      index="06"
      label="WordPress Sites"
      kicker="Custom themes · ACF · Page builders"
      projects={WP_SITES}
    />
  </section>
);

export default Work;
