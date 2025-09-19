import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData, PersonalInfo } from '../../services/portfolio-data';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  personalInfo: PersonalInfo | null = null;

  constructor(private portfolioData: PortfolioData) {}

  ngOnInit() {
    this.personalInfo = this.portfolioData.getPersonalInfo();
  }
}
