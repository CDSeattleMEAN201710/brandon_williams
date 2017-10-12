import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  boxes: string[];
  random_num: number;

  constructor() { }

  ngOnInit() {
    this.boxes = ['red','green','brown','beige','blue','yellow','orange','aqua','pink','olive'];
    for(let idx = 0; idx<this.boxes.length; idx++){
      this.random_num = Math.floor(Math.random()*10)
      let temp = this.boxes[idx];
      this.boxes[idx] = this.boxes[this.random_num];
      this.boxes[this.random_num] = temp;
    }


  }
}
