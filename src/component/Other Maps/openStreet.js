 import React, { Component } from 'react'

 import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class OpenStreet extends Component {
    render() {
        const position = [11.0494, 77.0094];
        return (
          <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
    </Marker>
  </Map>
        )
    }
}
// // import React from "react";
// // import { render } from "react-dom";
// import Map from 'react-leaflet';

// const { LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

// class OpenStreet extends Component {
//   constructor() {
//     super();
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13
//     };
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <LeafletMap center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </LeafletMap>
//     );
//   }
// }
// export default OpenStreet;

// ReactDOM.render(<OpenStreet />, document.getElementById("container"));