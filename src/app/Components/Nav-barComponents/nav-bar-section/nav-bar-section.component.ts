

import { Component, OnInit } from '@angular/core';

interface NavLink {
  title: string;
  links: { title: string }[];
}
@Component({
  selector: 'app-nav-bar-section',
  templateUrl: './nav-bar-section.component.html',
  styleUrls: ['./nav-bar-section.component.css']
})
export class NavBarSectionComponent implements OnInit{
  navLinks: NavLink[] = [
    { title: 'Nav Link 1', links: [
      { title: 'Link 1.1' }, { title: 'Link 1.2' }, { title: 'Link 1.3' },
      { title: 'Link 1.4' }, { title: 'Link 1.5' }
    ]},
    // Define other NavLinks with their links
  ];

  constructor() { }

  ngOnInit() { }
}