/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './map/map.component';

import { AppComponent } from './app.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatCardModule,
        NgxMapboxGLModule.withConfig({
            accessToken:
                'pk.eyJ1IjoiaW50ZXJnYWxhY3RpY2tyYWlnb3IiLCJhIjoiY2ptN3ZkeW9oNGxoNzNxb2dpNG9rcHZ2cyJ9.k0yACuymc3N9deSV0b6g3A',
        }),
    ],
    declarations: [AppComponent, MapComponent, ThemeToggleComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
