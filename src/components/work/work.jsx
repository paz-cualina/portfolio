import { WorkHeader } from './work-header.jsx';
import { WorkCategory } from './work-category.jsx';
import agentOverlay from '../../assets/agent-overlay.png';
import adidasByKorn from '../../assets/adidas-by-korn.png';
import tattooApp from '../../assets/tattoo-app.png';
import tallied from '../../assets/tallied.png';
import proterisCompliance from '../../assets/proteris.png';
import tadigital from '../../assets/ta-digital.png';
import incomelaboratory from '../../assets/income-labs.png';
import cuemateTennis from '../../assets/cuemate-tennis.png';

const REACT_PROJECTS = [
  {
    n: '01',
    title: 'Travel Booking for Agents',
    role: 'Frontend Development · Figma',
    tag: 'Single-page app · 2025',
    desc: 'Single-page React + TypeScript frontend for a travel booking platform. Agents search, filter and compare flights, hotels and cars; view paginated multi-leg results, inspect fare alternatives via modals, and select flights to proceed to a review-and-book flow.',
    stack: ['React', 'TypeScript', 'Vite', 'Mantine', 'TanStack Router', 'TanStack Query', 'Figma'],
    link: {
      label: 'View demo',
      href: 'https://drive.google.com/file/d/1w831IfKZeMq2I48vGr2cdqnHz1iAOIVq/view?usp=drive_link',
    },
    label: 'Travel booking · agent dashboard',
    image: agentOverlay,
  },
  {
    n: '02',
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
  {
    n: '03',
    title: 'Tattoo App',
    role: 'Figma — UX/UI only',
    tag: 'Mobile · 2023',
    desc: 'Mobile app for discovering tattoo designs and artists. Browse and save favorites, explore categorized styles, connect with artists through in-app chat to coordinate appointments, and receive scheduled notifications for upcoming sessions.',
    stack: ['Figma', 'UX Research', 'Prototyping', 'iOS / Android'],
    link: {
      label: 'View prototype',
      href: 'https://www.figma.com/proto/uGxGxRvZLqUoZpiChsTUKE/Prototipo-funcional--Microinteracciones-?node-id=931-2118&p=f&t=SBG37f3Z9SvQ7RfU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=931%3A2118',
    },
    label: 'Mobile · discovery + chat',
    image: tattooApp,
  },
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
