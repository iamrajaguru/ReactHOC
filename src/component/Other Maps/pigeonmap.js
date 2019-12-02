import React, { Component } from 'react'
import Map from "pigeon-maps";
// import Marker from "pigeon-marker";
// import Overlay from "pigeon-overlay";
// export default class PigeonMap extends Component {
//     render() {
//         return (
//             <div>
//                 <Map center={[50.879, 4.6997]} zoom={12} width={600} height={400}>
//     <Marker
//       anchor={[50.874, 4.6947]}
//       payload={1}
//       onClick={({ event, anchor, payload }) => {}}
//     />

//     <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
//       <img src="pigeon.jpg" width={240} height={158} alt="" />
//     </Overlay>
//   </Map>
//             </div>
//         )
//     }
// }

// import Marker from "pigeon-marker";

// explicitly ask for the React version
import Marker from "pigeon-marker/react";

// // explicitly ask for the Inferno version
// import Marker from "pigeon-marker/inferno";

// choose the Inferno or React version based on BABEL_ENV
// import Marker from "pigeon-marker/infact";

class PigeonMap extends Component {
  handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor);
  };

  render() {
    return (
      <Map
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={12}
        width={600}
        height={400}
      >
        <Marker
          anchor={[50.879, 4.6997]}
          payload={1}
          onClick={this.handleMarkerClick}
        />
      </Map>
    );
  }
}
export default PigeonMap;

