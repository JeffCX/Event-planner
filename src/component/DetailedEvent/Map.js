import React, { Component } from 'react';
import { withGoogleMap, GoogleMap,Marker  } from 'react-google-maps';
class Map extends Component {
   render() {
  const {latitude,longitude} = this.props
  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter = { { lat: latitude, lng: longitude} }
      defaultZoom = { 13 }
    >
    <Marker position={{ lat: latitude, lng: longitude}} />
    </GoogleMap>
  ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `400px`, width: 'auto' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default Map;