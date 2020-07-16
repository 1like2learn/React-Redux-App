import { FETCH_PHOTOS } from '../actions'
import { ERROR_FETCH_PHOTO } from '../actions'
import { SUCCESS_FETCH_PHOTO } from '../actions'

export const initialState = {
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
      loading: false,
      photos: action.payload
      }
    default:
      return state;
  }
};