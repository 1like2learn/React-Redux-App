import React from 'react';
import { connect } from "react-redux";

const Photo = (props) => {
  const { date, image } = props.photo
  const urlBase = 'https://epic.gsfc.nasa.gov/archive/natural/'
  const formattedDate = new Date(date)
  const dateForLink = {
    day: formattedDate.getDate().toLocaleString('en', {minimumIntegerDigits:2}),
    month: (formattedDate.getMonth()+1).toLocaleString('en', {minimumIntegerDigits:2}),
    year: formattedDate.getFullYear()
  }
  return (
    <div>
      {props.loading && (<h3>Content is loading...</h3>)}
      {props.errorMessage && (
        <div>
          <h3>Something went wrong</h3>
          <p className='error'>{props.errorMessage}</p>
        </div>  
      )}
      {image.length && (
        <div>
          <h3>{formattedDate.getHours()}</h3>
          <img src={`${urlBase}${dateForLink.year}/${dateForLink.month}/${dateForLink.day}/png/${image}.png`}/>
        </div>
      )}
    </div>
  )
}
//https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png

const mapStateToProps = state => {
  return{
    loading: state.loading,
    errorMessage: state.errorMessage
  }
}

export default connect(
  mapStateToProps,
  {  }
)(Photo);