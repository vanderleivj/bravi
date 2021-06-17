import { BraviContainer } from '../../shared/components/braviContainer'
import { ThemeHeader,ThemeCards } from './themeSelectionStyle'

export function ThemeSelection() {
  return (
    <BraviContainer 
      flexDirection='column'
      justify='flex-start'
      align='flex-start'
      content={
      <>
        <ThemeHeader>
          <h1>Discover Your Worlds</h1>
        </ThemeHeader>
        <ThemeCards style={{background: '#006494'}}>
          <div style={{background:'#DC493A'}}>
            <p style={{color:'#FFFFFF'}}>Primary Text</p>
          </div>
          <p style={{color:'#4392F1'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,sed<br/> do eiusmod tempor</p>
          <p style={{color: '#262626'}}>Name: <b>Theme 01</b></p>
        </ThemeCards>
      </>
    }>
    </BraviContainer>
  )
}