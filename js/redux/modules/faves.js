import realm, { queryFaves, createFave, deleteFave } from "../../config/model";

GET_FAVES = "GET_FAVES";
TOGGLE_FAVES = "TOGGLE_FAVES";

const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});
export const toggleFave = (session_id, onOrOff) => ({
  type: TOGGLE_FAVES,
  session_id: session_id,
  onOrOff: onOrOff
});

export const fetchFaves = () => dispatch => {
  const data = queryFaves();
  const faves = {};
  data.map((item, key) => (faves[item.id] = "true"));
  dispatch(getFaves(faves));
};

//reducer

export default (
  state = {
    loading: false,
    // NOTE 
    faves: {},
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_FAVES: {
      return {
        ...state,
        faves: action.payload
      };
    }
    case TOGGLE_FAVES: {
      // console.log("toggle fave is running");
      if (action.onOrOff) createFave(action.session_id);
      else deleteFave(action.session_id);
      const data = queryFaves();
      const faves = {};
      data.map((item, key) => (faves[item.id] = "true"));
      return { ...state, loading: false, faves, error: "" };
    }
    default:
      return state;
  }
};
