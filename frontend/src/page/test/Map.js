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

      this.ref.current.style.width = '100%';
      this.ref.current.style.height = '700px';

      const map = new H.Map(
        this.ref.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 25.04, lng: 121.52},
          zoom: 14,
        },
      );
      this.map = map;

      window.addEventListener('resize', () => map.getViewPort().resize());

      // var marker = new H.map.Marker({lat: 25.04, lng: 121.52});
      // map.addObject(marker);

      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      var ui = H.ui.UI.createDefault(map, layers);
      
      map.addEventListener('pointerup', function (evt) {
        var cnt = map.getCenter();
        console.log('Center at ', cnt.lat, cnt.lng);
      });

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