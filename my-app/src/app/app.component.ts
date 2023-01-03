import { Component } from "@angular/core";

@Component ({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h1>{{title + '!'}}</h1>
      <h3>Playing with Number: <p>1 + 2 = {{NumberOne + NumberTwo}}</p></h3>
      <h3>if the boolean is true the smily comes in or sad emoji appears <p>{{isHappy ? ':)' : ':(' }}</p></h3>
      <h3>if the boolean is true the smily comes in or sad emoji appears <p>{{isHappy ? ':)' : ':(' }}</p></h3>
    </div> 
  `
})

export class AppComponent {
  title: string;
  isHappy: boolean = true;
  NumberOne: number = 1;
  NumberTwo: number = 2;
  constructor () {
    this.title = "Welcome to Angualr Fundamentals";
  }
}