import { Component } from '@angular/core';

interface Leader {
  name: string;
  position: string;
  image: string;
  color: string;
}

@Component({
  selector: 'app-leadership-and-team',
  templateUrl: './leadership-and-team.component.html',
  styleUrls: ['./leadership-and-team.component.css']
})
export class LeadershipAndTeamComponent{
  leaders: Leader[] = [
    { name: 'Krishnakumar Iyavoo', position: 'CEO, ETTIKSOFT', image: '../../../../assets/images/about/section2/person4.svg', color: '#FFB1BF' },
    { name: 'Carmelo Messina', position: 'General Manager, Ettiksoft Europe', image: '../../../../assets/images/about/section2/person3.svg', color: '#1DE2E1' },
    { name: 'Chidambaram Velusamy', position: 'General Manager, Ettiksoft Vietnam', image: '../../../../assets/images/about/section2/person2.svg', color: '#DDFFE7'}
  ];
  getLeaderClass(index: number) {
    return 'leader-' + (index + 1);
  }
  isVisible: boolean = false;
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  } 
}