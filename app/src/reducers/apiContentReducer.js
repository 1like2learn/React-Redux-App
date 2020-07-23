import { FETCH_PHOTOS } from '../actions'
import { ERROR_FETCH_PHOTO } from '../actions'
import { SUCCESS_FETCH_PHOTO } from '../actions'

export const initialState = {
  dayOfPhotos: {
    day: '',
    month: '',
    year: ''
  },
  photos: [],
  loading: false,
  errorMessage: ''
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        loading: true
      }
    case ERROR_FETCH_PHOTO:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case SUCCESS_FETCH_PHOTO:
      return {
      ...state,
        dayOfPhotos: {
          day: new Date(action.payload[0].date).getDate().toLocaleString('en', {minimumIntegerDigits:2}),
          month: (new Date(action.payload[0].date).getMonth()+1).toLocaleString('en', {minimumIntegerDigits:2}),
          year: `${new Date(action.payload[0].date).getFullYear()}`
        },
        loading: false,
        photos: action.payload
      }
    default:
      return state;
  }
};