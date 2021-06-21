//React imports
import { useHistory } from 'react-router-dom'

import { Container } from "./braviHeaderStyle"

export function BraviHeader(props:any) {
  const history = useHistory()
  
  return (
    <Container style={{background:props.background}}>
      <h1 style={{color:props.color}}>{props.name ?? 'Default'}</h1>
      <button onClick={() => history.push(props.buttonRef)}>
          {props.buttonName}
      </button>
    </Container>
  )
}