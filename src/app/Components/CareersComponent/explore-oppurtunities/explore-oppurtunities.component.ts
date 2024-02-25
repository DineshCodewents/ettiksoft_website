import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

interface Job {
  role: string;
  experience: string;
  location: string;
  iconClass?: string; 
}

@Component({
  selector: 'app-explore-oppurtunities',
  templateUrl: './explore-oppurtunities.component.html',
  styleUrls: ['./explore-oppurtunities.component.css']
})
export class ExploreOppurtunitiesComponent {
  jobOpenings: Job[] = [
    { role: 'Python Developer', experience: '1-2 years', location:'Namakkal' },
    { role: 'Embedded developer', experience: 'Fresher', location:'Coimbatore' },
    { role: 'Python Developer', experience: '1-2 years', location:'Namakkal' },
    { role: 'Embedded developer', experience: 'Fresher', location:'Coimbatore' },
    { role: 'Python Developer', experience: '1-2 years', location:'Namakkal' },
    { role: 'Embedded developer', experience: 'Fresher', location:'Coimbatore' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.handleNavigation();
    });
  }

  navigateToFormMain() {
    this.router.navigate(['/form-page']);
  }

  private handleNavigation() {
    const fragment = this.route.snapshot.fragment;
    if (fragment !== 'noscroll') {
      this.scrollToTop();
    }
  }

  private scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  isVisible: boolean = false;

  changeIcon(index: number) {
    this.jobOpenings[index].iconClass = 'fa fa-arrow-right';
  }

  resetIcon(index: number) {
    this.jobOpenings[index].iconClass = 'fa fa-angle-right';
  }
}
