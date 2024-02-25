import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-ettiksoft-map-section',
  templateUrl: './ettiksoft-map-section.component.html',
  styleUrls: ['./ettiksoft-map-section.component.css']
})
export class EttiksoftMapSectionComponent implements AfterViewInit {
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
    const videoElement = document.getElementById('backgroundVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
    }
  }

  video = '../../../../assets/images/map1.mp4';
}
