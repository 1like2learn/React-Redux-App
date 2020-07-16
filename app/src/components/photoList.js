import React from 'react';

import Photo from './photo'

const PhotoList = (props) => {
const { photos } = props;

  return (
    <div>
      <h2>PhotoList</h2>
      {photos.map( photo => {
        return <Photo photo={photo} key={photo.image}/>
      })}
    </div>
  )
}

export default PhotoList