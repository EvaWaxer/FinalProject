export const FETCH_SCHOOLS_PENDING = "FETCH_SCHOOLS_PENDING";
export const FETCH_SCHOOLS_SUCCESS = "FETCH_SCHOOLS_SUCCESS";
export const FETCH_SCHOOLS_ERROR = "FETCH_SCHOOLS_ERROR";

export function fetchSchoolsPending() {
  return {
    type: FETCH_SCHOOLS_PENDING,
  };
}

export function fetchSchoolsSuccess(schools) {
  return {
    type: FETCH_SCHOOLS_SUCCESS,
    payload: schools,
  };
}

export function fetchSchoolsError(error) {
  return {
    type: FETCH_SCHOOLS_ERROR,
    error: error,
  };
}
