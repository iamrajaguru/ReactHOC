import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  GoogleMapReact,
  Marker,
  GoogleApiWrapper
} from "google-maps-react";

// const Location = () => <img src="../markerpin.png"></img>;

class LocationCode extends Component {
  static defaultProps = {
    center: {
      lat: 11.0494,
      lng: 77.0094
    },
    zoom: 11
  };

  render() {
    const style = {
      width: "50%",
      height: "50%",
    };
    console.log(this.props.google);
    console.log(this.props.center);
    return (
      // Important! Always set the container height explicitly
      // <div style={{ height: "100vh", width: "100%" }}>
      //   <GoogleMapReact
      //     bootstrapURLKeys={{ key: "AIzaSyDFi3En28D2VLarCZyukSuSCUzmOABp9V0" }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //     <Location lat={11.0494} lng={77.0094}  />
      //   </GoogleMapReact>
      // </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Map
          google={this.props.google}
          style={{ width: "50%", height: "50%", position: "relative" }}
          initialCenter={this.props.center}
          zoom={15}
          // onClick={this.onMapClicked}
        >
          {/* {this.props.google} */}
          {/* //<Map
      //   google={this.props.google}
      //   style={style}
      //   center={this.props.center}
      //   zoom={15}
      //   onClick={this.onMapClicked}
      // > */}
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}
          {/*</div>
             </InfoWindow> */}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDFi3En28D2VLarCZyukSuSCUzmOABp9V0"
})(LocationCode);
// export default LocationCode;
