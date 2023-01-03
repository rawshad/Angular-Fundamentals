import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `<div class="app">
    <h1 [innerHTML]="title"></h1>
  </div>`
})
export class AppComponent {
  title: string;
  constructor () {
    this.title = "Two way data binding";
  }
}
