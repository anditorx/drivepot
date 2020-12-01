const mainColors = {
  yellow1: '#FFBD12',
  yellowLight: '#FDDD8A',
  yellowDark: '#D39A04',
  yellow: 'yellow',
  brown: '#59221D',
  white: 'white',
  black: '#000000',
  blackLowOppacity: 'rgba(0,0,0,0.5)',
  greyDark: '#858587',
  greyLight: '#dfe4ea',
  blue: '#0599ED',
  lightBlue: '#98C8DB',
  indigo: '#0c2461',
  skyblue: '#ACCEFF',
};

export const colors = {
  primary: mainColors.yellow1,
  yellowLight: mainColors.yellowLight,
  yellowDark: mainColors.yellowDark,
  brown: mainColors.brown,
  indigo: mainColors.indigo,
  white: 'white',
  black: 'black',
  yellow: 'yellow',
  greyDark: mainColors.greyDark,
  greyLight: mainColors.greyLight,
  blue: mainColors.blue,
  indigo: mainColors.indigo,
  skyblue: mainColors.skyblue,
  lightBlue: mainColors.lightBlue,
  blackLowOppacity: mainColors.blackLowOppacity,
  text: {
    default: mainColors.black,
    grey: mainColors.greyDark,
  },
  button: {
    disable: {
      background: mainColors.greyLight,
      text: mainColors.greyDark,
    },
    primary: {
      background: mainColors.primary,
      text: mainColors.white,
    },
  },
  loadingBackground: mainColors.blackLowOppacity,
};
