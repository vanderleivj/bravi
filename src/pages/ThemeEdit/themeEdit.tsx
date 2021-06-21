//React imports
import Grid from '@material-ui/core/Grid';
import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { ChromePicker } from 'react-color';

//Css
import { ThemeHeader,ThemeCards,Background,Column,ColorRow,ColorSelected } from './themeEditStyle'

//Local Imports
import { BraviContainer } from '../../shared/components/BraviContainer/braviContainer'
import { BraviHeader } from '../../shared/components/BraviHeader/braviHeader'

//Redux
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { addTheme } from '../../shared/redux/themeActions'
import { colors } from '@material-ui/core';

export function ThemeEdit() {
  const dispatch = useDispatch()
  const history = useHistory()

  const initialSettings = useSelector((state:RootStateOrAny) => state.ThemeReducer.initialSettings ?? [] )
  const themeConfig = useSelector((state:RootStateOrAny) => state.ThemeReducer.themeSettings)
  const newThemes = useSelector((state:RootStateOrAny) => state.ThemeReducer.newThemesSettings ?? [])

  const [addNewTheme,setAddNewTheme] = useState([]);

  const [name, setName] =useState('')
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [backgroundColorPicker, setBackgroundColorPicker] = useState(false)

  const [primaryTextColor, setPrimaryTextColor] = useState('#fff');
  const [primaryTextColorPicker, setPrimaryTextColorPicker] = useState(false)

  const [secondaryTextColor, setSecondaryTextColor] = useState('#fff');
  const [secondaryTextColorPicker, setSecondaryTextColorPicker] = useState(false)

  const [accentColor, setAccentColor] = useState('#fff');
  const [accentColorPicker, setAccentColorPicker] = useState(false)


  const handleChangeComplete = (color:any, event:any,colorName:string) => {
    switch(colorName){
      case 'background-color': return (
        setBackgroundColor(color.hex),
        setBackgroundColorPicker(false)
      )
      case 'primary-text-color': return (
        setPrimaryTextColor(color.hex),
        setPrimaryTextColorPicker(false)
      )
      case 'secondary-text-color': return (
        setSecondaryTextColor(color.hex),
        setSecondaryTextColorPicker(false)
      )
      case 'accent-color': return (
        setAccentColor(color.hex),
        setAccentColorPicker(false)
      )
    }
  }

  const saveTheme = async() =>{
    console.log({newThemes})
    const _newObj = await newThemes
    const newObj ={
      "id": newThemes.length + 1,
      "name": name,
      "background_color": backgroundColor,
      "primary_text_color": primaryTextColor,
      "secondary_text_color": secondaryTextColor,
      "accent_color": accentColor
    }
    const finalObj = [..._newObj,newObj]
    console.log('finalObj',finalObj)
    dispatch(addTheme(finalObj))
    history.push('/')
  }

  return (
    <Background style={{background:themeConfig ? themeConfig.background_color : initialSettings.background_color, height:'100%'}}>
      <BraviHeader 
        background={themeConfig ? themeConfig.accent_color : initialSettings.accent_color }
        name={themeConfig ? themeConfig.name : initialSettings.name}
        color={themeConfig ? themeConfig.primary_text_color : initialSettings.primary_text_color}
        buttonRef='/'
        buttonName='Voltar para seleção'
      />
      <BraviContainer 
        flexDirection='column'
        justify='flex-start'
        align='flex-start'
        content={
        <>
          <ThemeHeader>
            <h1>Add new theme</h1>
            <button 
              disabled={
                name !== '' &&
                backgroundColor !== '#fff' && 
                primaryTextColor !== '#fff' && 
                secondaryTextColor !== '#fff' && 
                accentColor !== '#fff' 
                ? false : true
              }
              onClick={() => saveTheme()}
            >
                Save Theme
            </button>
          </ThemeHeader>
          <Grid container spacing={10}>
            <Grid item xs={12} md={8}>
              <TextField onChange={(event) => setName(event.target.value)} fullWidth={true} id="outlined-basic" label="Name" />
              <ColorRow>
                <div>
                  <p>Background Color</p>
                </div>
                <ColorSelected 
                  onClick={() => setBackgroundColorPicker(true)}
                  style={{background:backgroundColor}} 
                />
                {backgroundColorPicker ?
                  <ChromePicker 
                    color={backgroundColor} 
                    onChangeComplete={(color,event) => handleChangeComplete(color,event,'background-color')} 
                  /> : ' '
                }
              </ColorRow>

              <ColorRow>
                <div>
                  <p>Primary Text Color</p>
                </div>
                <ColorSelected 
                  onClick={() => setPrimaryTextColorPicker(true)}
                  style={{background:primaryTextColor}} 
                />
                {primaryTextColorPicker ?
                  <ChromePicker 
                    color={primaryTextColor} 
                    onChangeComplete={(color,event) => handleChangeComplete(color,event,'primary-text-color')} 
                  /> : ' '
                }
              </ColorRow>

              <ColorRow>
                <div>
                  <p>Secondary Text Color</p>
                </div>
                <ColorSelected 
                  onClick={() => setSecondaryTextColorPicker(true)}
                  style={{background:secondaryTextColor}} 
                />
                {secondaryTextColorPicker ?
                  <ChromePicker 
                    color={secondaryTextColor} 
                    onChangeComplete={(color,event) => handleChangeComplete(color,event,'secondary-text-color')} 
                  /> : ' '
                }
              </ColorRow>

              <ColorRow>
                <div>
                  <p>Accent Color</p>
                </div>
                <ColorSelected 
                  onClick={() => setAccentColorPicker(true)}
                  style={{background:accentColor}} 
                />
                {accentColorPicker ?
                  <ChromePicker 
                    color={accentColor} 
                    onChangeComplete={(color,event) => handleChangeComplete(color,event,'accent-color')} 
                  /> : ' '
                }
              </ColorRow>

            </Grid>
            <Grid item xs={12} md={2}>
              <ThemeCards style={{background: backgroundColor}}>
                <div style={{background:accentColor}}>
                  <p style={{color:primaryTextColor}}>Primary Text</p>
                </div>
                <p style={{color:secondaryTextColor}}>
                  Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,sed<br/> 
                  do eiusmod tempor
                </p>
                <p style={{color: primaryTextColor}}>
                  Name: <b>{name ?? ''}</b>
                </p>
              </ThemeCards>
            </Grid>
          </Grid>
        </>
      }/>
    </Background>
  )
}