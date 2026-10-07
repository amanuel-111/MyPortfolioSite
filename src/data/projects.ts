export interface Project {
  id: string;
  title: string;
  category: 'AI & Web' | 'Logistics' | 'Full-Stack' | 'Systems';
  subtitle: string;
  description: string;
  detailedOverview: string;
  imageUrl: string;
  technologies: string[];
  features: string[];
  codeLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Study Coach',
    category: 'AI & Web',
    subtitle: 'Practical Full-Stack Project',
    description: 'Developed as a practical project: an interactive study platform that assists students with chat-based topic assistance, study planning, and learning resources.',
    detailedOverview: 'Developed as a practical project to explore web development and API integration. Implemented interactive study chat for topic assistance, personalized study tracking, and automated summaries using React, Node.js, and API services.',
    imageUrl: '/images/ai-study-coach.webp',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Framer Motion', 'Node.js'],
    features: [
      'Interactive study chat for topic assistance',
      'Personalized study plans & progress tracking',
      'Educational resource recommendations',
      'Adaptive learning schedule & topic summaries'
    ],
    codeLink: 'https://github.com/amanuel-111/AI-Study-Coach',
  },
  {
    id: '2',
    title: 'Cargo Management System',
    category: 'Logistics',
    subtitle: 'Practical Full-Stack Project',
    description: 'Designed and developed as a practical full-stack project for managing shipments, customer records, and logistics tracking.',
    detailedOverview: 'Designed and developed as a practical full-stack project for managing shipments, customer accounts, and logistics operations. Implemented cargo status tracking, customer account dispatching, freight records, and role-based administration using React, Node.js, Express, and MySQL.',
    imageUrl: '/images/cargo-management-system.webp',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    features: [
      'Shipment tracking & operational status management',
      'Customer and order management dashboard',
      'Freight calculations and shipping records',
      'Role-based user and administrative access'
    ],
    codeLink: 'https://github.com/amanuel-111/Cargo-Management-System',
  },
  {
    id: '3',
    title: 'Book Rental Application',
    category: 'Full-Stack',
    subtitle: 'Practical Full-Stack Project',
    description: 'Built as a practical web application that enables users to browse, rent, and manage book collections.',
    detailedOverview: 'Built as a practical project featuring book catalog browsing, online rental tracking, return date management, and admin inventory management using PHP, MySQL, and responsive frontend styling.',
    imageUrl: '/images/book-rental-application.webp',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    features: [
      'Browse & search book collections by genre or title',
      'Online book rental request & active lease tracking',
      'Return period tracking and calculation',
      'Admin portal for catalog inventory management'
    ],
    codeLink: 'https://github.com/amanuel-111/Book_Rental_Application',
  }
];
