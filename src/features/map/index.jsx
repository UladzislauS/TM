import React from 'react';
import mapboxgl, { Map as Mapbox } from 'mapbox-gl';

import CurrentLocation from './models/CurrentLocation';
import PointsLayer from './models/PointsLayer';

import './Map.css';

const ACCESS_TOKEN = 'pk.eyJ1IjoidWxhZHppc2FsdXMiLCJhIjoiY2s1NGZjMGxhMGg4NDNrbGw1dm1iazM1ciJ9.wtjmdFMVuKjYtkQRQTkQdg';
const MAPBOX_STYLE = 'mapbox://styles/mapbox/light-v10';
const INITIAL_ZOOM = 5;

export default class Map extends React.Component {
    constructor() {
        super();
        this.map = null;
        this.geolocateControl = null;
        this.currentLocation = null;
        this.pointsLayer = null;
        mapboxgl.accessToken = ACCESS_TOKEN;
    }


    componentDidMount() {
        this.map = this.createMap();
        this.map.once('load', () => {
            this.pointsLayer = new PointsLayer(this.map);
            this.currentLocation = new CurrentLocation(this.map, this.pointsLayer);
        });
    }

    createMap() {
        return new Mapbox({
            container: 'map',
            style: MAPBOX_STYLE,
            zoom: INITIAL_ZOOM,
        });
    }

    render() {
        return (
            <div id="map" className="Map" />
        );
    }
}
