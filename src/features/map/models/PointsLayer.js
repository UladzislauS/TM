import { Map } from 'mapbox-gl';

import Point from 'shared/models/Point';

const LAYER_ID = 'points';
const LAYER_DOT_TYPE = 'circle';
const LAYER_TEXT_TYPE = 'symbol';
const SOURCE_TYPE = 'geojson';
const SOURCE_DATA_TYPE = 'FeatureCollection';

export default class PointsLayer {
    /**
     * Creates map layer for displaying points
     * @param {Map} map
     */
    constructor(mapContainer) {
        /** @type {string} */
        this.id = LAYER_ID;
        /** @type {string} */
        this.dotType = LAYER_DOT_TYPE;
        /** @type {string} */
        this.symbolType = LAYER_TEXT_TYPE;
        /** @type {string} */
        this.sourceType = SOURCE_TYPE;
        /** @type {string} */
        this.sourceDataType = SOURCE_DATA_TYPE;
        /** @type {Object} */
        this.source = null;
        /** @type {Object} */
        this.layer = null;
        /** @type {Set} */
        this.points = new Set();
        /** @type {Map} */
        this.map = mapContainer;
    }

    /**
     * Adds point to the list and displays it on layer
     * @param {Point} point - point to be added
     */
    addPoint(point) {
        if (!(point instanceof Point)) {
            return;
        }

        this.points.add(point);
        this.updateLayer();
    }

    /**
     * Removes point from the list and updates layer
     * @param {Point} point - point to be deleted
     */
    removePoint(point) {
        this.points.delete(point);
        this.updateLayer();
    }

    /**
     * Removes all points in the list and updates layer
     */
    cleanPoints() {
        this.points = new Set();
    }

    /**
     * Creates Mapbox Source (https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/) for displaying points
     */
    createSource() {
        if (!this.points) {
            return;
        }

        if (this.map.getSource(this.id)) {
            this.map.removeSource(this.id);
        }

        const features = [];

        this.points.forEach((point) => {
            const feature = point.getFeature();
            features.push(feature);
        });

        this.source = {
            type: this.sourceType,
            data: {
                type: this.sourceDataType,
                features,
            },
        };
        this.map.addSource(this.id, this.source);
    }

    /**
     * Updates Mapbox Layer (https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#symbol) for displaying points
     */
    updateLayer() {
        const dotId = `${this.id}_dot`;
        const dotOutlineId = `${this.id}_dot-outline`;
        const textId = `${this.id}_text`;

        this.createSource();

        if (this.map.getLayer(dotId)) {
            this.map.removeLayer(dotId, this.source);
        }

        if (this.map.getLayer(textId)) {
            this.map.removeLayer(textId, this.source);
        }

        if (this.map.getLayer(dotOutlineId)) {
            this.map.removeLayer(dotOutlineId, this.source);
        }


        const dotLayer = {
            id: dotId,
            source: this.id,
            type: this.dotType,
            paint: {
                'circle-color': '#6ee5cf',
                'circle-radius': 4,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#fff',
            },
        };

        const dotOutlineLayer = {
            id: dotOutlineId,
            source: this.id,
            type: this.dotType,
            paint: {
                'circle-color': '#6365c2',
                'circle-radius': 8,
            },
        };

        const textLayer = {
            id: textId,
            source: this.id,
            type: this.symbolType,
            layout: {
                'text-field': ['get', 'title'],
                'text-offset': [0, 0.5],
                'text-anchor': 'top',
                'text-size': 24,
            },
            paint: {
                'text-color': '#2f3b91',
                'text-opacity': 1,
                'text-halo-blur': 0,
                'text-halo-color': '#fff',
                'text-halo-width': 1,
            },
        };

        this.map.addLayer(dotOutlineLayer);
        this.map.addLayer(dotLayer);
        this.map.addLayer(textLayer);
    }
}
