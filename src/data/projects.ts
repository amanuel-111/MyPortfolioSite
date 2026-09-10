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
    subtitle: 'Full-Stack Web Application',
    description: 'Developed an AI-powered study platform that helps students learn through interactive chat, personalized study assistance, and educational resources.',
    detailedOverview: 'Developed an AI-powered study platform that helps students learn through interactive chat, personalized study assistance, and educational resources. Built with React and modern AI integrations to create custom learning pathways, instant automated summaries, and interactive context-aware study chat.',
    imageUrl: '/images/ai-study-coach.webp',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Framer Motion', 'Node.js'],
    features: [
      'Interactive AI study chat for instant topic assistance',
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
    subtitle: 'Full-Stack Web Application',
    description: 'Designed and developed a cargo management system for managing shipments, customers, and logistics operations.',
    detailedOverview: 'Designed and developed a cargo management system for managing shipments, customers, and logistics operations. Features cargo status tracking, customer account dispatching, freight records, and automated operations administration.',
    imageUrl: '/images/cargo-management-system.webp',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    features: [
      'Shipment tracking & operational status management',
      'Customer and order management dashboard',
      'Automated freight logistics calculations',
      'Secure multi-role admin & user operations'
    ],
    codeLink: 'https://github.com/amanuel-111/Cargo-Management-System',
  },
  {
    id: '3',
    title: 'Book Rental Application',
    category: 'Full-Stack',
    subtitle: 'Full-Stack Web Application',
    description: 'Developed an online book rental platform that enables users to browse, rent, and manage book collections.',
    detailedOverview: 'Developed an online book rental platform that enables users to browse, rent, and manage book collections. Complete digital library circulation solution featuring dynamic book filtering, rental history, return management, and admin oversight.',
    imageUrl: '/images/book-rental-application.webp',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    features: [
      'Browse & search book collections by genre or title',
      'Online book rental request & active lease tracking',
      'Automated return period calculations',
      'Admin portal for catalog inventory management'
    ],
    codeLink: 'https://github.com/amanuel-111/Book_Rental_Application',
  }
];
