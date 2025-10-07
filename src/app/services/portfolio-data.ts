import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resume: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioData {
  private personalInfo: PersonalInfo = {
    name: 'Moustafa Khaled',
    title: 'Frontend Developer',
    bio: 'Passionate frontend developer with experience in creating beautiful, responsive web applications. I love turning complex problems into simple, elegant solutions.',
    email: 'MoustafaKaled.ux@gmail.com',
    phone: '+201066649848',
    location: 'Alexandria / Cairo, Egypt',
    github: 'https://github.com/MoustafaKhaled1998',
    linkedin: 'https://www.linkedin.com/in/moustafa-khaled-a4ab4622a/',
    resume: '/assets/resume.pdf',
    photo: 'assets/images/personal_image.jpg'
  };

  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Tawredah is a B2B e-commerce platform that connects SMEs and startups with factories and suppliers. It offers bulk and tiered pricing and allows businesses to request new products directly from manufacturers.',
      image: 'assets/images/tawredah.png',
      technologies: ['Angular', 'Firebase', 'Sass', 'PrimeNG','Responsive Design','Angular Reactive Forms'],
      liveUrl: 'https://tawredah-e-commerce-fzwk-delta.vercel.app/',
      githubUrl: 'https://github.com/MoustafaKhaled1998/Tawredah-E-Commerce',
      featured: true
    },
    {
      id: 2,
      title: 'Booking App',
      description: 'An hotel booking app with live search, login and register with authentication and complete booking system with history and payment, all with gaurded routes and a beautiful UI.',
      image: 'assets/images/bookler.png',
      technologies: ['React', 'Tailwind CSS','REST API', 'React Router', 'Redux' , 'React Hook Form'],
      liveUrl: 'https://booking-react-fawn.vercel.app/',
      githubUrl: 'https://github.com/MoustafaKhaled1998/booking-react',
      featured: true
    },
    {
      id: 3,
      title: 'Movie EX',
      description: 'A movie web app built with JavaScript, powered by public movie APIs to fetch real-time data on films. It features live search and uses Local Storage to save favorite movies for quick access. The app demonstrates strong API integration, dynamic DOM manipulation, and smooth user experience design.',
      image: 'assets/images/MovieEX.png',
      technologies: ['JavaScript', 'CSS', 'HTML', 'REST API','Ai integration (ChatBot)'],
      liveUrl: 'https://moustafakhaled1998.github.io/Movie-Ex/',
      githubUrl: 'https://github.com/MoustafaKhaled1998/Movie-Ex',
      featured: true
    },
    {
      id: 4,
      title: 'FashionHub',
      description: 'An e-commerce web app for browsing and purchasing fashion items online. Built with React and integrated with REST APIs for dynamic product data, it features responsive design, live product search, and Local Storage to manage the shopping cart and user preferences.',
      image: 'assets/images/fashionHub.png',
      technologies: ['React', 'Vite', 'Tailwind', 'React Router','State Management','Axios','Local Storage'],
      liveUrl: 'https://e-commerce-react-sable-two.vercel.app/',
      githubUrl: 'https://github.com/MoustafaKhaled1998/e-commerce-react',
      featured: true
    },
    {
      id: 5,
      title: 'Movies Angular',
      description: 'A responsive movie app built with Angular, using public APIs to display real-time data on movies and TV shows. It includes live search and favorites saved in Local Storage.',
      image: 'assets/images/movieAngular.png',
      technologies: ['Angular', 'Angular Signals', 'Angular Router', 'Angular HttpClient','RxJS','PrimeNG UI','Tailwind','FormsModule','API Integration'],
      liveUrl: 'https://moustafakhaled1998.github.io/Movies-Angular/',
      githubUrl: 'https://github.com/MoustafaKhaled1998/Movies-Angular',
      featured: true
    },
    {
      id: 6,
      title: 'Landing Page',
      description: 'A fully responsive landing page built with HTML and Sass, designed with a modern, clean layout and smooth animations. It adapts perfectly to all screen sizes, showcasing strong front-end structure, reusable Sass components, and attention to responsive design best practices.',
      image: 'assets/images/sass.png',
      technologies: ['Sass', 'HTML'],
      liveUrl: 'https://moustafakhaled1998.github.io/sass-e-commerce/',
      githubUrl: 'https://github.com/MoustafaKhaled1998/sass-e-commerce',
      featured: true
    }
  ];

  private skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 5, category: 'frontend' },
    { name: 'React', level: 4, category: 'frontend' },
    { name: 'TypeScript', level: 5, category: 'frontend' },
    { name: 'JavaScript', level: 5, category: 'frontend' },
    { name: 'HTML5', level: 5, category: 'frontend' },
    { name: 'CSS3', level: 5, category: 'frontend' },
    { name: 'SCSS/Sass', level: 4, category: 'frontend' },
    { name: 'Tailwind CSS', level: 4, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 2, category: 'backend' },
    { name: 'PostgreSQL', level: 3, category: 'backend' },
    { name: 'REST APIs', level: 4, category: 'backend' },
    { name: 'C#', level: 3, category: 'backend' },
    
    // Tools
    { name: 'Git', level: 4, category: 'tools' },

    
    // Design
    { name: 'Figma', level: 5, category: 'design' },
    { name: 'Adobe XD', level: 4, category: 'design' },
    { name: 'UI/UX Design', level: 5, category: 'design' },
    { name: 'Responsive Design', level: 5, category: 'design' }
  ];

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
