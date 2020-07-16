import React from 'react';
import { connect } from "react-redux";

import Photo from './photo'

const PhotoList = (props) => {
const { photos, dayOfPhotos } = props;

  return (
    <div>
      <h2>{`${dayOfPhotos.year}/${dayOfPhotos.month}/${dayOfPhotos.day}`}</h2>
      {photos.map( photo => {
        return <Photo photo={photo} key={photo.image}/>
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    dayOfPhotos: state.dayOfPhotos
  }
}

export default connect(
  mapStateToProps,
  {  }
)(PhotoList);