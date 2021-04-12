import { Component, OnInit } from '@angular/core';
import { themeChange } from '../theme-toggle/theme-toggle.component';
import { Theme } from '../theme-toggle/themes';
import { Map } from 'mapbox-gl';

declare var require;
const defaultTheme = require('@pxblue/mapbox/default.json');
const darkTheme = require('@pxblue/mapbox/dark.json');

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    map: Map;
    mapTheme = defaultTheme;
    coordinates = ['-79.98', '40.45'];
    zoom = '10';

    ngOnInit(): void {
        themeChange.subscribe((theme: Theme) => {
            if (theme === Theme.blueTheme) {
                this.mapTheme = defaultTheme;
            } else if (theme === Theme.darkBlueTheme) {
                this.mapTheme = darkTheme;
            }
        });
    }

    setMap(map): void {
        this.map = map;
    }

    onMove() {
        const { lng, lat } = this.map.getCenter();

        this.coordinates[0] = lng.toFixed(4);
        this.coordinates[1] = lat.toFixed(4);
        this.zoom = this.map.getZoom().toFixed(4);
    }
}
