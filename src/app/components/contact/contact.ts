import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioData, PersonalInfo } from '../../services/portfolio-data';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  personalInfo: PersonalInfo | null = null;
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private portfolioData: PortfolioData) {}

  ngOnInit() {
    this.personalInfo = this.portfolioData.getPersonalInfo();
  }

  onSubmit() {
    // In a real application, you would send this data to a backend service
    console.log('Contact form submitted:', this.contactForm);
    alert('Thank you for your message! I will get back to you soon.');
    this.contactForm = { name: '', email: '', subject: '', message: '' };
  }
}
