/* eslint-disable import/no-anonymous-default-export */
import { 
  SET_THEME,
  GET_THEME_SETTINGS,
  ADD_THEME,
  API_TRUE
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
  newThemesSettings: null,
  isCallApi:true
}

export default (state = INITIAL_STATE, action:any) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
    case SET_THEME:
      let _themeSettings:any
      let storageSettings:any

      _themeSettings = localStorage.setItem(
          '@settings/themeSettings', 
          JSON.stringify(action.data)
        );
      storageSettings = localStorage.getItem('@settings/themeSettings')

      return {
        ...state,
        themeSettings: JSON.parse(storageSettings)
      };
      
    case GET_THEME_SETTINGS:
      let _newThemesSettings:any
      let newStorageTheme:any

      _newThemesSettings = action.data
      localStorage.setItem('@settings/newTheme',JSON.stringify(_newThemesSettings));
      newStorageTheme = localStorage.getItem('@settings/newTheme');
      
      return {
        ...state,
        newThemesSettings: JSON.parse(newStorageTheme)
       
      };
      
    case ADD_THEME:
      let _addThemesSettings:any
      let addThemesSettings:any

      _addThemesSettings = action.data
      localStorage.setItem('@settings/newTheme',JSON.stringify(_addThemesSettings));
      addThemesSettings = localStorage.getItem('@settings/newTheme');
      
      return {
        ...state,
        newThemesSettings: JSON.parse(addThemesSettings)
       
      };

    case API_TRUE:
      let _isCallApi

      _isCallApi = action.data
     
      return {
        ...state,
        isCallApi: _isCallApi
       
      };
  }
  
  return state;
}