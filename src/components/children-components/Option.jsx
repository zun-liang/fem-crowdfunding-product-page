import styled from 'styled-components'
import { SmallContainer } from '../../assets/styles/elementStyles'

const OptionContainer = styled(SmallContainer)`
    margin: 1rem auto -0.5rem;
    opacity: ${({numberLeft}) => numberLeft > 0 ? "1" : "0.5"};
    @media(min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1.5rem;
    }
`

const Option = ({options, numberLeft}) => {
    return(
        <>
            {options.map(option => (
                <OptionContainer key={option.id} numberLeft={numberLeft[option.id]}>
                    {option.content}
                </OptionContainer>
            ))
            }
        </>
    )
}

export default Option