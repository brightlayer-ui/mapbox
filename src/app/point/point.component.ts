import {Component, OnInit} from '@angular/core';
import {themeChange} from "../theme-toggle/theme-toggle.component";
import {Theme} from "../theme-toggle/themes";

declare var require;
const defaultTheme = require('@pxblue/mapbox/default.json');
const darkTheme = require('@pxblue/mapbox/dark.json');

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {

  mapTheme = defaultTheme;
  coordinates = [-79.98, 40.45];

  ngOnInit(): void {
    themeChange.subscribe((theme: Theme) => {
      if (theme === Theme.blueTheme) {
        this.mapTheme = defaultTheme;
      } else if (theme === Theme.darkBlueTheme) {
        this.mapTheme = darkTheme;
      }
    });
  }
}