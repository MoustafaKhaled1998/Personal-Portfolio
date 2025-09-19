import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData, Skill } from '../../services/portfolio-data';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {
  skills: Skill[] = [];
  skillCategories = ['frontend', 'backend', 'tools', 'design'];

  constructor(private portfolioData: PortfolioData) {}

  ngOnInit() {
    this.skills = this.portfolioData.getSkills();
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getSkillLevel(level: number): string {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  }
}
