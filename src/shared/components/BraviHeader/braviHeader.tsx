import { Container } from "./braviHeaderStyle"

export function BraviHeader(props:any) {
  return (
    <Container style={{background:props.background}}>
      <h1 style={{color:props.color}}>{props.name ?? 'Default'}</h1>
    </Container>
  )
}