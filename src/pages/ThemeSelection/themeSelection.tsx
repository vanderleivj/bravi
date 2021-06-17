/* eslint-disable react-hooks/exhaustive-deps */
//Css
import { ThemeHeader,ThemeCards,Background,Row } from './themeSelectionStyle'

//Local Imports
import { BraviContainer } from '../../shared/components/BraviContainer/braviContainer'
import { BraviHeader } from '../../shared/components/BraviHeader/braviHeader'

//Redux
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getThemeSettings,setTheme } from '../../shared/redux/themeActions'

export function ThemeSelection() {
  const dispatch = useDispatch()
  const initialSettings = useSelector((state:RootStateOrAny) => state.ThemeReducer.initialSettings ?? [] )
  const themeConfig = useSelector((state:RootStateOrAny) => state.ThemeReducer.themeSettings)
  const newThemes = useSelector((state:RootStateOrAny) => state.ThemeReducer.newThemesSettings ?? [])

  useEffect(() => {
    dispatch(setTheme(initialSettings))
    dispatch(getThemeSettings())
  }, [])
  console.log({initialSettings})
  return (
    <Background style={{background:themeConfig ? themeConfig.background_color : initialSettings.background_color }}>
      <BraviHeader 
        background={themeConfig ? themeConfig.accent_color : initialSettings.accent_color }
        name={themeConfig ? themeConfig.name : initialSettings.name}
        color={themeConfig ? themeConfig.primary_text_color : initialSettings.primary_text_color}
      />
      <BraviContainer 
        flexDirection='column'
        justify='flex-start'
        align='flex-start'
        content={
        <>
          <ThemeHeader>
            <h1>Feel the colors!</h1>
            <p style={{color:themeConfig ? themeConfig.secondary_text_color : initialSettings.secondary_text_color}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
            </p>
          </ThemeHeader>
          <Row>
            <ThemeCards onClick={() => dispatch(setTheme(initialSettings))} style={{background: initialSettings.background_color}}>
              <div style={{background:initialSettings.accent_color}}>
                <p style={{color:initialSettings.primary_text_color}}>Primary Text</p>
              </div>
              <p style={{color:initialSettings.secondary_text_color}}>
                Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,sed<br/> 
                do eiusmod tempor
              </p>
              <p style={{color: initialSettings.primary_text_color}}>
                Name: <b>{initialSettings.name}</b>
              </p>
            </ThemeCards>
            {newThemes.map((item:any) => (
              <ThemeCards onClick={() => dispatch(setTheme(item))} style={{background: item.background_color}}>
                <div style={{background:item.accent_color}}>
                  <p style={{color:item.primary_text_color}}>Primary Text</p>
                </div>
                <p style={{color:item.secondary_text_color}}>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,sed<br/> 
                  do eiusmod tempor
                </p>
                <p style={{color: item.primary_text_color}}>
                  Name: <b>{item.name}</b>
                </p>
              </ThemeCards>
            ))}
          </Row>
        </>
      }/>
    </Background>
  )
}