import { FETCH_PHOTOS } from '../actions'
import { ERROR_FETCH_PHOTO } from '../actions'
import { SUCCESS_FETCH_PHOTO } from '../actions'

export const initialState = {
  photos: [
    {
      image: '',
      date: ''
    }
  ],
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
        error: action.payload
      }
    case SUCCESS_FETCH_PHOTO:
      return {
      ...state,
      loading: false,
        ...photos,
          url: action.payload.image,
          date: action.payload.date
      }
    default:
      return state;
  }
};