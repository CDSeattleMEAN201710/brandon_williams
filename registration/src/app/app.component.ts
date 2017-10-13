import { Component, OnInit } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  new_user: User;
  msg: string;
  constructor (){};

  ngOnInit(){
    this.new_user = new User;
  };

  createUser(){
    console.log("Create User")
    this.msg = `Thank you for registering with us ${this.new_user.first_name}`
  }

}
