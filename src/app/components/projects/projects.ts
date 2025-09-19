import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioData, Project } from '../../services/portfolio-data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioData: PortfolioData) {}

  ngOnInit() {
    this.projects = this.portfolioData.getFeaturedProjects();
  }
}
