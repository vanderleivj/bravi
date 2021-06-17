import { 
  SET_THEME,
  GET_THEME_SETTINGS
} from './themeConstants';


export const setTheme = (data:any) => {
  return (dispatch: (arg0: { type: string; data: any; }) => void) => {
    dispatch({type: SET_THEME, data});
  }
  
}

export const getThemeSettings = () => {
  return (dispatch: (arg0: { type: string; data: any; }) => any) => {
    fetch('htto://localhost:3000/api/themeSettings')
    .then(response => response.json())
    .then(data => dispatch({type: GET_THEME_SETTINGS, data}))
  }
}