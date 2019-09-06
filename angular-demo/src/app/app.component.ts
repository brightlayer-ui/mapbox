
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <app-map></app-map>
    <app-theme-toggle></app-theme-toggle>
  `,
  styles: [`
  :host {
    display: flex;
    min-height: 100vh;
  }
  `]
})
export class AppComponent {
}