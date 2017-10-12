import { Component, OnInit } from '@angular/core';

import { Email } from './email'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponentComponent implements OnInit {
  emails: Array<Email>;

  constructor() { }
  ngOnInit() {
    this.emails = [
      {
        email: 'bill@gates.com',
        importance: true,
        subject: 'New Windows',
        content: 'Windows Xi will launch in year 2100',
      },
      {
        email: 'ada@lovelace.com',
        importance: true,
        subject: 'Programming',
        content: 'Enchantress of numebrs',
      },
      {
        email: 'john@carmac.com',
        importance: false,
        subject: 'Updates Algo',
        content: 'New Algorithm',
      },
      {
        email: 'gabe@newel.com',
        importance: false,
        subject: 'HL3!',
        content: 'Just kidding',
      }
    ];
  }
}
