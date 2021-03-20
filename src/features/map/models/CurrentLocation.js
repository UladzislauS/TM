import { Map } from 'mapbox-gl';
import Point from 'shared/models/Point';

const DEFAULT_TITLE = 'You are here';

export default class CurrentLocation extends Point {
    /**
     * Represents current geolocation and sets it to Map
     * @extends Point
     * @param {Map} map - the map used for current location
     */
    constructor(map, pointsLayer) {
        super(null, null, DEFAULT_TITLE);
        this.point = null;
        this.map = map;
        this.pointsLayer = pointsLayer;

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => this.setCurrentLocation(coords),
            () => this.onGetCurrentLocationError(),
        );
    }

    setCurrentLocation(coordinates) {
        this.latitude = coordinates.latitude;
        this.longitude = coordinates.longitude;
        this.map.setCenter([this.longitude, this.latitude]);
        this.pointsLayer.addPoint(this);
    }

    onGetCurrentLocationError() {
        this.latitude = null;
        this.longitude = null;

        console.warn('CurrentLocation', '_onError', 'Cannot get current location');
    }
}
