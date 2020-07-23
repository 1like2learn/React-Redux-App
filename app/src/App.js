import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { fetchPhotos } from './actions'

import PhotoList from './components/photoList'
import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchPhotos()
  }, [])

  return (
    <div className="App">
      <h1>Yesterday's Earth</h1>
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