import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import styled from 'styled-components'
import GlobalStyles from './globalStyles'

const StyledApp = styled.div`
  width: 100%;
  min-width: 320px;
  background-image: url('./assets/images/image-hero-mobile.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 1.3rem 1rem;
  @media (min-width: 600px) {
      background-image: url('./assets/images/image-hero-desktop.jpg');
      background-repeat: no-repeat;
      background-size: 100%;
  }
`

const App = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [screenWidth])
    const [modalDisplay, setModalDisplay] = useState(false)
    const handleModalDisplay = () => setModalDisplay(prev => !prev)
    const [completeDisplay, setCompleteDisplay] = useState(false)
    const handleCompleteDisplay = () => {
        setCompleteDisplay(prev => !prev)
    }
    return(
      <>
        <GlobalStyles
          modalDisplay={modalDisplay}
          completeDisplay={completeDisplay}/>
        <StyledApp>
          <Navbar screenWidth={screenWidth} />
          <Main
            screenWidth={screenWidth}
            modalDisplay={modalDisplay}
            handleModalDisplay={handleModalDisplay}
            completeDisplay={completeDisplay}
            handleCompleteDisplay={handleCompleteDisplay}
          />
        </StyledApp>
      </>
    )
}

export default App
