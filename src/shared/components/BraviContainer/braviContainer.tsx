import { Container } from "./braviContainerStyle"

export function BraviContainer(props:any) {
  return (
    <Container 
      style={
        {
          flexDirection:props.flexDirection,
          justifyContent:props.justify,
          alignItems:props.align
        }
      }>
        {props.content}
    </Container>
  )
}