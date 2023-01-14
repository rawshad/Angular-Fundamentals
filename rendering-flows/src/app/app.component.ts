import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `<div class="app">
    <input type="text" 
    [value]="name" (input)= "handleInput($event)">
    <!-- <template [ngIf]="name.length > 2"]>
    <div>Searching for ... {{name}}</div>
    </template> -->
    <div *ngIf="name.length > 2">Searching for ... {{name}}</div>
  </div>`
})
export class AppComponent {
  name: string = "";
  handleInput(event: any) {
    this.name = event.target.value;
  }
}
