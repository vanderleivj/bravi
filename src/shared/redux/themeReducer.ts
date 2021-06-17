/* eslint-disable import/no-anonymous-default-export */
import { 
  SET_THEME,
  GET_THEME_SETTINGS
} from './themeConstants'

const INITIAL_STATE = {
  initialSettings:{
    "id": 0,
    "name": "Tema padrão",
    "background_color": "#8869AD",
    "primary_text_color": "#B9A5D0",
    "secondary_text_color": "#FDF531",
    "accent_color": "#FBA54E"
  },
	themeSettings:null,
  newThemesSettings: null
}

export default (state = INITIAL_STATE, action:any) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
    case SET_THEME:
      let _themeSettings

      _themeSettings = action.data

      return {
        ...state,
        themeSettings: _themeSettings
      };

    case GET_THEME_SETTINGS:
      let _newThemesSettings

      _newThemesSettings = action.data

      return {
        ...state,
        newThemesSettings: _newThemesSettings
       
      };
  }
  
  return state;
}