import actionType from "./types";

export const play = (flag) => ({
  type: actionType.PLAYING,
  flag,
});

export const currentSong = (sid) => ({
  type: actionType.CUR_SONG,
  sid,
});

export const screen = (flag) => ({
  type: actionType.SCREEN,
  flag,
});

export const sectionTypePlaylist = (stp) => ({
  type: actionType.SECTION_TYPE_PLAYLIST,
  stp,
});

export const sectionTypeDisplay = (std) => ({
  type: actionType.SECTION_TYPE_DISPLAY,
  std,
});

export const setVolume = (flag) => ({
  type: actionType.VOLUME,
  flag,
});

export const rain = (flag) => ({
  type: actionType.RAIN,
  flag,
});

export const setValueVolume = (value) => ({
  type: actionType.VOLUME_VALUE,
  value,
});
