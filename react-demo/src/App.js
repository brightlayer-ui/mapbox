/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React from 'react';
import mapboxgl from 'mapbox-gl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as PXBThemes from '@pxblue/react-themes';
import Fab from '@material-ui/core/Fab';
import FlipIcon from '@material-ui/icons/FlipToBack';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles/styleClasses';

const defaultMapTheme = require('@pxblue/mapbox/default.json');
const darkMapTheme = require('@pxblue/mapbox/dark.json');

mapboxgl.accessToken =
    'pk.eyJ1IjoiaW50ZXJnYWxhY3RpY2tyYWlnb3IiLCJhIjoiY2ptN3ZkeW9oNGxoNzNxb2dpNG9rcHZ2cyJ9.k0yACuymc3N9deSV0b6g3A';

const appThemes = [
    { title: 'Blue', theme: createMuiTheme(PXBThemes.blue) },
    { title: 'Blue Dark', theme: createMuiTheme(PXBThemes.blueDark) },
];

const mapThemes = [
    { title: 'Blue', theme: defaultMapTheme },
    { title: 'Blue Dark', theme: darkMapTheme },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -79.98,
            lat: 40.45,
            zoom: 10,
            themeToggle: 0,
        };
    }

    drawMap = () => {
        const { lng, lat, zoom, themeToggle } = this.state;
        this.mapContainer.textContent = '';
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: mapThemes[themeToggle].theme,
            center: [lng, lat],
            zoom,
        });

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lng: lng.toFixed(2),
                lat: lat.toFixed(2),
                zoom: map.getZoom().toFixed(2),
            });
        });
    };

    componentDidMount() {
        this.drawMap();
    }

    toggleTheme() {
        this.setState({ themeToggle: (this.state.themeToggle + 1) % appThemes.length }, this.drawMap);
    }

    render() {
        const { lng, lat, zoom } = this.state;

        return (
            <MuiThemeProvider theme={appThemes[this.state.themeToggle].theme}>
                <CssBaseline />
                <div style={{ height: '100vh' }} ref={(el) => (this.mapContainer = el)} />
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography variant="h6">Coordinates</Typography>
                        Longitude: {lng} Latitude: {lat} Zoom: {zoom}
                    </CardContent>
                </Card>
                <Fab
                    color="primary"
                    className={this.props.classes.fab}
                    variant="extended"
                    onClick={() => this.toggleTheme()}
                >
                    <FlipIcon style={{ marginRight: 5 }} />
                    Toggle Theme
                </Fab>
                <Chip
                    className={this.props.classes.themeChip}
                    label={appThemes[this.state.themeToggle].title + ' Theme'}
                    variant="default"
                    color="default"
                />
            </MuiThemeProvider>
        );
    }
}
export default withStyles(styles)(App);
