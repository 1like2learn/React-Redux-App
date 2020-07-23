import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'

const Card = styled.div`
  margin: 0 auto;
  width: 80%;
  img{
    width: 80%;
  }
`;
const Photo = (props) => {
  const { date, image } = props.photo
  const { loading, errorMessage, dayOfPhotos } = props
  const urlBase = 'https://epic.gsfc.nasa.gov/archive/natural/'
  return (
    <div>
      {loading && (<h3>Content is loading...</h3>)}
      {errorMessage && (
        <div>
          <h3>Something went wrong</h3>
          <p className='error'>{props.errorMessage}</p>
        </div>  
      )}
      {image.length && (
        <Card>
          <h3>{(new Date(date).getHours()+1)}</h3>
          <img src={`${urlBase}${dayOfPhotos.year}/${dayOfPhotos.month}/${dayOfPhotos.day}/png/${image}.png`} alt={new Date(date).getHours()+1}/>
        </Card>
      )}
    </div>
  )
}
//https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png

const mapStateToProps = state => {
  return{
    loading: state.loading,
    errorMessage: state.errorMessage,
    dayOfPhotos: state.dayOfPhotos
  }
}

export default connect(
  mapStateToProps,
  {  }
)(Photo);