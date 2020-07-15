export const FETCH_PHOTOS = 'FETCH_PHOTOS'
export const ERROR_FETCH_PHOTO = 'FETCH_PHOTO_ERROR'
export const SUCCESS_FETCH_PHOTO = 'LOAD_SUCCESS'

export const fetchPhotos = () => {
  return dispatch => {
    dispatch({ type: FETCH_PHOTOS });
    axios.get('https://epic.gsfc.nasa.gov/api/natural')
    .then(response => {
      console.log(response.data)
      dispatch({type: SUCCESS_FETCH_PHOTO, payload: response.data})
    }).catch(response => {
      console.log(response)
      dispatch({type: ERROR_FETCH_PHOTO, payload: response.message})
    })
  }
}