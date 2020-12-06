import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  paragraphText = '';
  toggleCount = 0;
  toggleStack = [this.toggleCount];

  constructor() { }

  ngOnInit(): void {
  }

  toggleText(){
    this.toggleCount++;
    this.toggleStack.push(this.toggleCount);

    if (this.toggleCount % 2 === 0){
      this.paragraphText = 'Button click stack: ' + this.getStack();
    } else {
      this.paragraphText = 'Secret password: cod, button click stack: ' + this.getStack();
    }
  }

  getStack(){
    var temp = '';
    this.toggleStack.forEach(element => {
      temp += element + ' ';
    });
    return temp;
  }

  getBkgColor(){
    return this.toggleCount > 4 ? 'blue' : '';
  }

  getFontColor(){
    return this.toggleCount > 4 ? 'white' : 'black';
  }
}
