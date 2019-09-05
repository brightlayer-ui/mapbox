import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatChipsModule, MatListModule, MatRadioModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { PointComponent } from './point/point.component';
import { LayoutComponent } from './layout/layout.component';

import { AppComponent } from './app.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatSidenavModule,
    MatCardModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiaW50ZXJnYWxhY3RpY2tyYWlnb3IiLCJhIjoiY2ptN3ZkeW9oNGxoNzNxb2dpNG9rcHZ2cyJ9.k0yACuymc3N9deSV0b6g3A'
    }),
  ],
  declarations: [ AppComponent, PointComponent, LayoutComponent, ThemeToggleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
