import {
  FETCH_SCHOOLS_PENDING,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_ERROR,
} from "../actions/fetchSchoolsActions";

const initialState = {
  pending: false,
  schools: [],
  error: null,
};

export default function FetchSchoolsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHOOLS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SCHOOLS_SUCCESS:
      return {
        ...state,
        pending: false,
        schools: action.payload,
      };
    case FETCH_SCHOOLS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getSchools = (state) => state.schools;
export const getSchoolsPending = (state) => state.pending;
export const getSchoolsError = (state) => state.error;
