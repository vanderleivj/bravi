import { 
  SET_THEME,
  GET_THEME_SETTINGS,
  ADD_THEME,
  API_TRUE
} from './themeConstants';


export const setTheme = (data:any) => {
  console.log({data})
  return (dispatch: (arg0: { type: string; data: any; }) => void) => {
    dispatch({type: SET_THEME, data});
  }
}

export const addTheme = (data:any) => {
  return (dispatch: (arg: { type: string; data: any; }) => void) => {
    dispatch({type: ADD_THEME, data});
  }
}

export const isApiTrue = (data:any) => {
  return (dispatch: (arg: { type: string; data: any; }) => void) => {
    dispatch({type: API_TRUE, data});
  }
}


export const getThemeSettings = () => {
  return (dispatch: (arg0: { type: string; data: any; }) => any) => {
    fetch('htto://localhost:3000/api/themeSettings')
    .then(response => response.json())
    .then(data => dispatch({type: GET_THEME_SETTINGS, data}))
  }
}