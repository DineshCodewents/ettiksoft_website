import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-media-nav',
  templateUrl: './language-media-nav.component.html',
  styleUrls: ['./language-media-nav.component.css']
})
export class LanguageMediaNavComponent {
  menuItems: { label: string, path: string, imagePath?: string }[] = [
    { label: "English", path: "", imagePath: "../../../../assets/images/england.svg" },
    { label: "German", path: "ge", imagePath: "../../../../assets/images/germany.svg" },
  ];
}
