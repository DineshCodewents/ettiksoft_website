// our-leaders-section.component.ts

import { Component } from '@angular/core';

interface LeaderCard {
  name: string;
  position: string;
  company: string;
  path_f:string;
  path_b:string;
  flipped: boolean;
  backContent: {
    quoteIcon: string;
    description: string;
  };
}

@Component({
  selector: 'app-our-leaders-section',
  templateUrl: './our-leaders-section.component.html',
  styleUrls: ['./our-leaders-section.component.css']
})
export class OurLeadersSectionComponent {
  cards: LeaderCard[] = [
    { 
      name: 'Krishnakumar Iyavoo',
      position: 'CEO',
      company: 'ETTIKSOFT',
      flipped: false,
      backContent: {
        quoteIcon: 'fa-solid fa-quote-left',
        description: 'At our company, we foster a culture of innovation and collaboration, empowering every employee to contribute their best ideas and talents. Together, we\'re not just shaping the future; we\'re redefining it.'
      },
      path_f: 'kk-f',
      path_b: 'kk-b',
      
    },
    { 
      name: 'Carmelo Messina',
      position: 'General Manager, Europe',
      company: 'ETTIKSOFT, Europe',
      flipped: false,
      backContent: {
        quoteIcon: 'fa-solid fa-quote-left',
        description: 'At our company, we foster a culture of innovation and collaboration, empowering every employee to contribute their best ideas and talents. Together, we\'re not just shaping the future; we\'re redefining it.'
      },
      path_f: 'melo-f',
      path_b: 'melo-b',
      
    },
    { 
      name: 'Chidamparam Velusamy',
      position: 'CEO',
      company: 'ETTIKSOFT',
      flipped: false,
      backContent: {
        quoteIcon: 'fa-solid fa-quote-left',
        description: 'At our company, we foster a culture of innovation and collaboration, empowering every employee to contribute their best ideas and talents. Together, we\'re not just shaping the future; we\'re redefining it.'
      },
      path_f: 'chidambaram-f',
      path_b: 'chidambaram-b',
      
    },
    // Add more cards as needed
  ];

  flipCard(card: LeaderCard) {
    card.flipped = !card.flipped;
  }
}
