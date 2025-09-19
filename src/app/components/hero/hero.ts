import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData, PersonalInfo } from '../../services/portfolio-data';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  personalInfo: PersonalInfo | null = null;

  constructor(private portfolioData: PortfolioData) {}

  ngOnInit() {
    this.personalInfo = this.portfolioData.getPersonalInfo();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
