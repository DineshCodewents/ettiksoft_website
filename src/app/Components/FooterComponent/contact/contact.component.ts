import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  phoneNumbers: string[] = ["+91 73736 89304", "+91 97898 81190"];
  emails: string[] = ["info@ettiksoft.com"];
  address: string[] = ["No:6/1116-1/3, Paramathi Road, C E B Colony, Namakkal, Tamil Nadu 637001."]
}
