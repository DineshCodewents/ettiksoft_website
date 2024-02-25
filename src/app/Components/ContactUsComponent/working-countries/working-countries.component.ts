import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-countries',
  templateUrl: './working-countries.component.html',
  styleUrls: ['./working-countries.component.css']
})
export class WorkingCountriesComponent implements OnInit {
  selectedCountry: string | null = null;

  countries = [
    { name: 'India', address: 'No:6/1116-1/3, Paramathi Road, C E B Colony, Namakkal, Tamil Nadu 637001.' },
    { name: 'Europe', address: 'Suurstoffi 37, 6343 Risch-Rotkreuz, Zug, Switzerland' },
    { name: 'Vietnam', address: '114 Dien Bien Phu street,  Da Kao ward, dicstrict 1 , Ho Chi Minh city.' }
  ];

  ngOnInit() {
    this.selectedCountry = 'India';
  }

  showCountry(country: any): void {
    this.selectedCountry = country.name;
  }
}
