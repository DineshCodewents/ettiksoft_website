import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements AfterViewInit {
  navigationBack: boolean | undefined;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Subscribe to NavigationEnd events to detect future navigations
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if it's a back navigation
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.previousNavigation) {
        this.navigationBack = true;
        this.playVideo(); // Play video when navigating back
      } else {
        this.navigationBack = false;
      }
    });
  }

  playVideo() {
    // Play video logic, you might need to adjust this based on your video element
    const videoElement = document.getElementById('background-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  }

  video = '../../../../assets/images/intro_video.mp4';
}
