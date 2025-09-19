import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData, PersonalInfo } from '../../services/portfolio-data';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  personalInfo: PersonalInfo | null = null;
  currentYear = new Date().getFullYear();

  constructor(private portfolioData: PortfolioData) {}

  ngOnInit() {
    this.personalInfo = this.portfolioData.getPersonalInfo();
  }
}
