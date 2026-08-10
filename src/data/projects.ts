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
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bc51d99a-ad4a-4033-a9c9-f7db41bd481b/ai-study-coach-7e7fc645-1783598306960.webp',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Framer Motion', 'Node.js'],
    features: [
      'Interactive AI study chat for instant topic assistance',
      'Personalized study plans & progress tracking',
      'Educational resource recommendations',
      'Adaptive learning schedule & topic summaries'
    ],
    codeLink: 'https://github.com/amanuel-111/AI-Study-Coach',
    liveLink: 'https://github.com/amanuel-111/AI-Study-Coach',
  },
  {
    id: '2',
    title: 'Cargo Management System',
    category: 'Logistics',
    subtitle: 'Full-Stack Web Application',
    description: 'Designed and developed a cargo management system for managing shipments, customers, and logistics operations.',
    detailedOverview: 'Designed and developed a cargo management system for managing shipments, customers, and logistics operations. Features real-time cargo status tracking, customer account dispatching, freight records, and automated operations administration.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bc51d99a-ad4a-4033-a9c9-f7db41bd481b/cargo-management-system-8ce61440-1783598307718.webp',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    features: [
      'Full shipment tracking & operational status management',
      'Customer and order management dashboard',
      'Automated freight logistics calculations',
      'Secure multi-role admin & user operations'
    ],
    codeLink: 'https://github.com/amanuel-111/Cargo-Management-System',
    liveLink: 'https://github.com/amanuel-111/Cargo-Management-System',
  },
  {
    id: '3',
    title: 'Book Rental Application',
    category: 'Full-Stack',
    subtitle: 'Full-Stack Web Application',
    description: 'Developed an online book rental platform that enables users to browse, rent, and manage book collections.',
    detailedOverview: 'Developed an online book rental platform that enables users to browse, rent, and manage book collections. Complete digital library circulation solution featuring dynamic book filtering, rental history, return management, and admin oversight.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bc51d99a-ad4a-4033-a9c9-f7db41bd481b/book-rental-application-9dca33c7-1783598307257.webp',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    features: [
      'Browse & search book collections by genre or title',
      'Online book rental request & active lease tracking',
      'Automated return period calculations',
      'Admin portal for catalog inventory management'
    ],
    codeLink: 'https://github.com/amanuel-111/Book_Rental_Application',
    liveLink: 'https://github.com/amanuel-111/Book_Rental_Application',
  }
];
