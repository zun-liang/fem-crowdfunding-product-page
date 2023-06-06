import Bookmark from './children-components/Bookmark'
import Mastercraft from '../assets/images/logo-mastercraft.svg'
import styled from 'styled-components'
import { Container, Button, SmallText } from '../assets/styles/elementStyles'

const IntroContainer = styled(Container)`
    flex-direction: row;
    justify-content: space-between;
    margin: 10rem auto 1.4rem;
    padding: 2.5rem 2rem 2rem;
    @media (min-width: 600px) {
        padding: 2.5rem 2.5rem 2rem;
    }
`
const BrandIcon = styled.img`
    width: 3.1rem;   
    position: relative;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: -4rem;
`
const SubTitle = styled.h2`
    font-size: 1.1rem;
    text-align: center;
    line-height: 1.2;
    width: 100%;
`
const BrandInfo = styled(SmallText)`
    width: 100%;
    text-align: center;
`
const StyledButton = styled(Button)`
    width: 10rem;
    height: 2.9rem;
    margin-right: -0.5rem;
`

const Introduction = ({screenWidth, handleModalDisplay}) => {
    return (
        <>
            <IntroContainer id="get-started">
                <BrandIcon src={Mastercraft} alt='logo mastercraft' />
                <SubTitle>
                    Mastercraft Bamboo Monitor Riser
                </SubTitle>
                <BrandInfo>
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                </BrandInfo>
                <StyledButton onClick={handleModalDisplay}>Back this project</StyledButton>
                <Bookmark screenWidth={screenWidth}/>
            </IntroContainer>
        </>
        
    )
}

export default Introduction