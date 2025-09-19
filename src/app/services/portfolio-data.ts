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
    resume: '/assets/resume.pdf'
  };

  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Angular and Node.js. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://via.placeholder.com/400x300/4f46e5/ffffff?text=E-Commerce+Platform',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/400x300/059669/ffffff?text=Task+Management',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/johndoe/taskmanager',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with interactive charts.',
      image: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Weather+Dashboard',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: 'https://weather-demo.com',
      githubUrl: 'https://github.com/johndoe/weather',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular featuring smooth animations and a clean design.',
      image: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Portfolio+Website',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'GSAP'],
      liveUrl: 'https://johndoe-portfolio.com',
      githubUrl: 'https://github.com/johndoe/portfolio',
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
