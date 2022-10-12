import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Loader } from "@googlemaps/js-api-loader"

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

ReactDOM.render(<App />, document.getElementById('root'));
