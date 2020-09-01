const COLOR = {
  white: '#FFFFFF',
  dark: '#2A2A2A',
  main_color_bold: '#38761D',
  main_color: '#6AA84F',
  main_color_light: '#D9EAD3',
  main_color_bold_2: '#A61C00',
  main_color_2: '#F71701',
  main_color_light_2: '#F4CCCC',
  inactive_tab: '#EFEFEF',
  active: 'blue',
  main_background: '#FFFDF6',
  text_app: '#000000',
  text_app_light: '#656565',
  text_registration: '#676767',
  color_bottom_app1: '#6AA84F',
  color_bottom_app2: '#A61C00',
  TRANSPARENT: 'transparent',
  BG_TRANSPARENT_30: 'rgba(0,0,0,0.3)',
  BG_TRANSPARENT_40: 'rgba(0,0,0,0.4)',
  BG_TRANSPARENT_50: 'rgba(0,0,0,0.5)',
  BG_TRANSPARENT_20: 'rgba(0,0,0,0.2)',
  BG_TRANSPARENT_90: 'rgba(0,0,0,0.9)',
  BG_TRANSPARENT_70: 'rgba(0,0,0,0.7)',
  white_transparent_30: 'rgba(255,255,255,0.3)',
  white_transparent_50: 'rgba(255,255,255,0.5)',
  white_transparent_80: 'rgba(255,255,255,0.8)',
  white_transparent_90: 'rgba(255,255,255,0.9)',
  grey: '#D9D9D9',
  grey_0: '#E0E0E0',
  grey_100: '#F0F0F0',
  grey_300: '#d9d9d9',
  grey_400: '#BFBFBF',
  grey_500: '#9E9E9E',
  grey_700: '#6D7174',
  grey_800: '#424242',
  grey_900: '#1D262C',
  gray_light: '#BFBFBF',
  black_light: '#1D262C',
  black: '#000000',
  pink_light: '#EC5569',
  pink_light_0: '#F56868',
  red: '#FF0000',
  red_light: '#E5075A',
  yellowLight: '#EDC55D',
  blue_light_0: '#E1ECF8',
  blue_light_1: '#8FD3F4',
  blue_light_2: '#1E95C1',
  blue_light_3: '#1272C4',
  blue_light_4: '#187AC3',
  inactive_color: '#8D8D8D',
  STATUS_BAR_ERROR: '#f23e3e',
  COLOR_BROWN: '#693013',
  COLOR_BLACK: '#000000',
  COLOR_GRAY: '#7D7D7D',
  COLOR_BORDER: '#707070',
  COLOR_WHITE: '#FFFFFF',
  COLOR_GRAY_LIGHT: '#F2F2F2',
  COLOR_RED_LIGHT: '#D94343',
  COLOR_RED: '#F70001',
  COLOR_GREEN: '#56AF45',
  COLOR_VIOLET: '#c730c7',
  COLOR_BLUE: '#1B32FF',
  COLOR_BLUE_LIGHT: '#4C68D9',
  COLOR_ORANGE: '#EC7105',
  COLOR_YELLOW: '#ECBE05',
  COLOR_YELLOW_LIGHT: '#FCEDCB',
  COLOR_GRAY_300: '#E0E0E0',
  COLOR_GRAY_900: '#656565',
  COLOR_GREEN_LIGHT: '#56AF4520',
  app_orange: 'rgba(232,100,43,1)',
  app_yellow: 'rgba(246,185,63,1)',
  app_cerulean: 'rgba(89,125,154,1)',
  orange: '#E39821',
  app_border: '#FEC77C',

  shadow: (color) => ({
    shadowColor: color || '#272C33',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.3,
  }),
};
export {COLOR};
