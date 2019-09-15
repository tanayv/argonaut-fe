import React, {Component} from 'react';
import {StaticMap} from 'react-map-gl';
import DeckGL, {ScreenGridLayer} from 'deck.gl';
import {isWebGL2} from '@luma.gl/core';

import austin_data from "./assets/maps/austin_deckgl.json";

// Set your mapbox token here
const MAPBOX_TOKEN = "pk.eyJ1IjoiYWJoaXNoZWtkcHNlb2siLCJhIjoiY2swa2ltcno2MGx4bjNsbnd2bWZseDhyNSJ9.0g7Ey_9_CZ5vbQrRa7NOCQ"; // eslint-disable-line


const INITIAL_VIEW_STATE = {
  longitude: -90.75,
  latitude: 30.73,
  zoom: 4,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};

const colorRange = [
  [255, 255, 178, 25],
  [254, 217, 118, 85],
  [254, 178, 76, 127],
  [253, 141, 60, 170],
  [240, 59, 32, 212],
  [189, 0, 38, 255]
];

export default class DeckGLVisualizer extends Component {
  _renderLayers() {
    const {data = austin_data, cellSize = 20, gpuAggregation = true, aggregation = 'Sum'} = this.props;

    return [
      new ScreenGridLayer({
        id: 'grid',
        data,
        getPosition: d => [d[0], d[1]],
        //getWeight: d => d[2],
        cellSizePixels: cellSize,
        colorRange,
        gpuAggregation,
        aggregation
      })
    ];
  }

  _onInitialized(gl) {
    if (!isWebGL2(gl)) {
      console.warn('GPU aggregation is not supported'); // eslint-disable-line
      if (this.props.disableGPUAggregation) {
        this.props.disableGPUAggregation();
      }
    }
  }

  render() {
    const {mapStyle = 'mapbox://styles/mapbox/dark-v9'} = this.props;

    return (
      <DeckGL
        layers={this._renderLayers()}
        initialViewState={INITIAL_VIEW_STATE}
        onWebGLInitialized={this._onInitialized.bind(this)}
        controller={true}
      >
        <StaticMap
          reuseMaps
          mapStyle={mapStyle}
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </DeckGL>
    );
  }
}
