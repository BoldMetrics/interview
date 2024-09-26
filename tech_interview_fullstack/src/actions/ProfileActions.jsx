export const SAVE_PROFILE = 'SAVE_PROFILE';
export const LOAD_PROFILE = 'LOAD_PROFILE';
export const SET_PROFILE_ID = 'SET_PROFILE_ID';
export const SET_LOADING = 'SET_LOADING';
export const LOAD_PROFILE_FAILURE = 'LOAD_PROFILE_FAILURE';

export const saveProfile = (profile) => {
  return { type: SAVE_PROFILE, payload: profile };
};

export const loadProfile = (profile) => {
  return { type: LOAD_PROFILE, payload: profile };
};

export const setProfileId = (id) => {
  return { type: SET_PROFILE_ID, payload: id };
};

export const loadProfileFailure = () => ({
  type: LOAD_PROFILE_FAILURE,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
});