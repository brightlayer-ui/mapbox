
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <app-layout></app-layout>
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