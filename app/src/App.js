import React, { useEffect } from 'react';
import { connect } from "react-redux";

import fetchPhotos from './actions'

import PhotoList from './components/photoList'
import './App.css';

function App() {
  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <div className="App">
      <h1>App</h1>
      <PhotoList photos= {props.photos}/>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}
export default connect(
  mapStateToProps,
  { fetchPhotos }
)(App);