import React from 'react';
import mapboxgl, { Map as Mapbox } from 'mapbox-gl';
import './Map.css';

export class Map extends React.Component {
    constructor() {
        super();
        mapboxgl.accessToken = 'pk.eyJ1IjoidWxhZHppc2FsdXMiLCJhIjoiY2s1NGZjMGxhMGg4NDNrbGw1dm1iazM1ciJ9.wtjmdFMVuKjYtkQRQTkQdg';
    }

    render() {
        return (
            <div id="map" className='Map'></div>
        );
    }

    componentDidMount() {
        const map = new Mapbox({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9'
        });
    }
} 
