import styled from 'styled-components'
import { Container, SmallText } from '../assets/styles/elementStyles'

const SumContainer = styled(Container)`
    margin: 0 auto 1.4rem;
    padding: 2rem;
    line-height: .9;
    text-align: center;
    @media(min-width: 600px) {
        padding: 2rem 2.6rem;
        flex-direction: row;
        justify-content: flex-start;
    }
`
const StyledH3 = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
`
const Hr = styled.hr`
    width: 25%;
    border: .1px solid var(--light-gray);
    margin: .4rem;
    @media(min-width: 600px) {
        transform: rotate(90deg);
        width: 11%;
    }
`
const Bar = styled.div`
    width: 100%;
    height: .7rem;
    border-radius: 1.5rem;
    background-color: var(--light-gray);
    margin-top: 1rem;

`
const BarTop = styled.div`
    width: ${({percentage}) => percentage}%;
    height: .7rem;
    border-radius: 1.5rem;
    background-color: var(--moderate-cyan);
`

const Summary = ({money, backer}) => {
    const percentage = money / 100000 * 100
    return(
        <SumContainer id="discover">
            <div>
                <StyledH3>${money.toLocaleString()}</StyledH3>
                <SmallText>of $100,000 backed</SmallText>
            </div>
            <Hr />
            <div>
                <StyledH3>{backer.toLocaleString()}</StyledH3>
                <SmallText>total backers</SmallText>
            </div>
            <Hr />
            <div>
                <StyledH3>56</StyledH3>
                <SmallText>days left</SmallText>
            </div>
            <Bar>
                <BarTop percentage={percentage}></BarTop>
            </Bar>
        </SumContainer>
    )
}

export default Summary