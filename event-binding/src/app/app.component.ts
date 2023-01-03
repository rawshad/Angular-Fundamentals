import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `<div class="app">
    <h1 [innerHTML]="title"></h1>
    <button (click)="handleClick()">Change</button>
    <input type="text" 
    [value]="name" (blur) = "handleBlur($event)" (input)= "handleInput($event)">
    <div>{{name}}</div>
  </div>`
})
export class AppComponent {
  title: string;
  name: string = "Rawshad";
  handleClick() {
    this.name = "Mohammad";
  }
  handleBlur(event: any) {
    this.name = event.target.value;
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  constructor () {
    this.title = "Event Binding"
  }
}
