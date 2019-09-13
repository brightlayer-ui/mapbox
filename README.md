# Mapbox Themes
This package contains various Mapbox themes for use with PX Blue. 

## Installation
Install with npm
```
npm install --save @pxblue/mapbox
```
or yarn
```
yarn add @pxblue/mapbox
```
## Usage
To use the PX Blue themes for Mapbox, you simply need to pass the theme file into the configuration object for mapbox initialization.

### Angular
Import the theme into your target typescript file:
```
// app.component.ts
declare var require;
const defaultTheme = require('@pxblue/mapbox/default.json');
const darkTheme = require('@pxblue/mapbox/dark.json');
```

Bind the theme to the style attribute of the ```<mgl-map>```:
```
// app.component.html
<mgl-map
    [style]="theme" // bind to your theme variable here
    [zoom]="[10]"
    [center]="coordinates"
>
```

### React
Import the theme into your target file:
```
// App.js
const defaultTheme = require('@pxblue/mapbox/default.json');
const darkTheme = require('@pxblue/mapbox/dark.json');
```

Apply the theme variable to the style parameter of the mapboxgl configuration:
```
// App.js
const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: darkTheme, // add the theme variable here
    center: [lng, lat],
    zoom
});
```

For more information on using Mapbox in your application, see our [Mapping Mapbox](https://pxblue.github.io/patterns/visualizations) design pattern page.

## Demos
| Framework           | Live Examples  |
| ---------------- |------------------|
| Angular | [View on Stackblitz](https://stackblitz.com/github/pxblue/mapbox/tree/master/angular-demo)
| React | [View on Code Sandbox](https://codesandbox.io/s/github/pxblue/mapbox/tree/master/react-demo)