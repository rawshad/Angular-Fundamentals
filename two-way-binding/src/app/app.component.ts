import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `<div class="app">
  <h1 [innerHTML]="title"></h1>
  <button (click)="handleClick()">Change</button>
  <input type="text" 
  [ngModel]="name" (ngModelChange)= "handleChange($event)">
  <input type="text" 
  [(ngModel)]="name">
  <div>{{name}}</div>
</div>`
})
export class AppComponent {
  title: string;
  name: string = "Rawshad";
  handleClick() {
    this.name = "Mohammad";
  }
  handleChange(value: any) {
    this.name = value;
  }
  constructor () {
    this.title = "Event Binding"
  }
}
