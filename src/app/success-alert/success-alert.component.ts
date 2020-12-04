import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  username: string = '';
  usernameEmpty = true;

  constructor() { }

  ngOnInit(): void {
  }

  onTypeText(){
    if (this.username === ''){
      this.usernameEmpty = true;
    } else {
      this.usernameEmpty = false;
    }
  }

  addUser(){
    console.log("User added to database");
    this.username = '';
    this.usernameEmpty = true;
  }
}
