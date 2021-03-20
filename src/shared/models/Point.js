import { Map, Point as MapboxPoint } from 'mapbox-gl';

const FEATURE_TYPE = 'Feature';
const GEOMETRY_TYPE = 'Point';
const DEFAULT_TITLE = 'Point';

export default class Point {
    /**
    * Creates point on map
    */
    constructor(latitude, longitude, location) {
        this.featureType = FEATURE_TYPE;
        this.geometryType = GEOMETRY_TYPE;
        this.latitude = latitude || null;
        this.longitude = longitude || null;
        this.title = location || DEFAULT_TITLE;
    }

    getFeature() {
        return {
            type: this.featureType,
            geometry: {
                type: this.geometryType,
                coordinates: [
                    this.longitude,
                    this.latitude,
                ],
            },
            properties: {
                title: this.title,
            },
        };
    }
}
