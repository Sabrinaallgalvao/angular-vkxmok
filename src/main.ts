import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JurosComponentComponent } from './app/component/juros-component/juros-component.component';
import { JurosSimplesComponent } from './app/component/juros-simples/juros-simples.component';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, JurosComponentComponent, JurosSimplesComponent, AppComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
