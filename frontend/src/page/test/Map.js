import React from 'react';
import H from "@here/maps-api-for-javascript";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
    if (!this.map) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: '5sBMwlWaGv5EG1yaxjcIGjbuJ5MyLO08PPHDQqkEDBI'
      });
      const layers = platform.createDefaultLayers({
        lg: 'zh-tw'
      });
      const map = new H.Map(
        this.ref.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 25.040071298375924, lng: 121.51193410751563},
          zoom: 2,
        },
      );
      this.ref.current.style.width = '600px';
      this.ref.current.style.height = '600px';
      this.map = map;
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        map.setCenter({lat:position.coords.latitude, lng:position.coords.longitude});
        map.setZoom(14);
      });
    }
    
  }


  render() {
    return (
      <div
        style={{ width: '300px', height:'300px' }}
        ref={this.ref}
      />
    )
  }
}
