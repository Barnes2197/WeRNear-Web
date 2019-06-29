import React, {Component} from 'react';
import MapGL, {GeolocateControl} from 'react-map-gl';
import './map.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmFybmVzMjE5NyIsImEiOiJjanhoNWJwemQwYzNyM3lxdGttZmN5d212In0.RyLKAA5P-J9TFaVkbP4e8w'; // Set your mapbox token here

const geolocateStyle = {
  position: 'fixed',
  right: 0,
  bottom: 0
};
class Map extends Component{

     state = {
    viewport: {
      latitude: 37.8,
      longitude: 96,
      zoom: 3,
      bearing: 0,
      pitch: 0
    }
  };
    
      _onViewportChange = viewport => this.setState({viewport});
    
      render() {
        const {viewport} = this.state;
    
        return (
            
          <MapGL 
            {...viewport}
            width="75%"
            height="75%"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            <GeolocateControl 
              style={geolocateStyle}
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
            />
          </MapGL>
         
        );
      }
    
}

export default Map