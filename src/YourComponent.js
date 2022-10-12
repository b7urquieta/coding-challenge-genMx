import React, { Component } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

/*
* Use this component as a launching-pad to build your functionality.
*
*/

const loader = new Loader({
  apiKey: "AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A",
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

export default class YourComponent extends Component {
  
  render() {
    return (
      
      <div style={divStyle}>
		  <h1> Put your solution here!</h1>
      <p>As a student, I want to see a map of Mexico City</p> <button onClick={fetch.store_directory}>Map</button>
      <p>As a student, I want to see a map that has all the stores represented as markers/pins on the map.</p> <button>Store markers</button>
      <p>As a student, I want to be able to click on a store and add it to a list of 'My Favorite Stores'</p> <button>My favorite stores</button>
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};