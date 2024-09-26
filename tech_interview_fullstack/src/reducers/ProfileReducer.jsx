import {  LOAD_PROFILE_FAILURE, SAVE_PROFILE, LOAD_PROFILE, SET_PROFILE_ID, SET_LOADING } from '../actions/profileActions';

const initialState = {
  profileData: null,
  profileId: '',
  isLoading: false,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        profileData: action.payload,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        profileData: action.payload,
      };
    case LOAD_PROFILE_FAILURE:
      return {
        ...state,
        profileData: null,
        error: action.payload,
      };
    case SET_PROFILE_ID:
      return {
        ...state,
        profileId: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};