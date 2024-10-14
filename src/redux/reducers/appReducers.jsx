import actionType from "../actions/types";

const initialState = {
  isPlaying: false,
  currentSong: null,
  isScreen: false,
  isVolume: false,
  typePlaylist: null,
  typeDisplay: null,
  isRain: false,
  isValueVolume: 0,
};

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PLAYING:
      return {
        ...state,
        isPlaying: action.flag || false,
      };
    case actionType.SCREEN:
      return {
        ...state,
        isScreen: action.flag || false,
      };
    case actionType.SECTION_TYPE_PLAYLIST:
      return {
        ...state,
        typePlaylist: action.stp || false,
      };

    case actionType.CUR_SONG:
      return {
        ...state,
        currentSong: action.sid || null,
      };

    case actionType.SECTION_TYPE_DISPLAY:
      return {
        ...state,
        typeDisplay: action.std || false,
      };

    case actionType.VOLUME:
      return {
        ...state,
        isVolume: action.flag || false,
      };

    case actionType.RAIN:
      return {
        ...state,
        isRain: action.flag || false,
      };
    case actionType.VOLUME_VALUE:
      return {
        ...state,
        isValueVolume: action.value || 0,
      };
    default:
      return state;
  }
};

export default appReducers;
