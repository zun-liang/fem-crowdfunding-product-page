import React, { useState } from 'react'
import ModalOption from './children-components/ModalOption'
import ModalCloseIcon from '../assets/images/icon-close-modal.svg'
import ModalCloseIconHover from '../assets/images/icon-close-modal-onhover.svg'
import { NoRewardInfo, BambooStandInfo, BlackStandInfo, MahoganyStandInfo, ModalWelcome } from './children-components/SmallComponents'
import styled from 'styled-components'
import { ViewportContainer, Container, SubTitle, Price, SmallText, Button } from '../assets/styles/elementStyles'

const ModalContainer = styled(Container)`
    padding: 1.5rem;
    margin: 7rem auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
    @media(min-width: 600px) {
        magrin: auto;
        padding: 2rem;
        height: 700px;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
`
const ModalClose = styled.img`
    align-self: flex-end;
    position: relative;
    bottom: 2.5rem;
    margin-bottom: -2.5rem;
    &:hover {
        cursor: pointer;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .7rem;
    @media(min-width: 600px) {
       > div {
            display: flex;
            flex-wrap: no-wrap;
            gap: 1rem;
        }
    }
    
`
const Wrapper2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media(min-width: 600px) {
       justify-content: space-between;
    }
`
const Wrapper3 = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(min-width: 600px) {
       justify-content: flex-end;
       width: 62%;
    }
`
const Wrapper4 = styled.div`
    @media(min-width: 600px) {
        margin-left: 1.9rem;
    }
`
const RadioButton = styled.input`
    appearance: none;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1.5px solid var(--light-gray);
    background-clip: content-box;
    background-color: white;
    &:disabled {
        cursor: auto;
        :hover {
            cursor: auto;
            border: 1.5px solid var(--light-gray);
        }
    }
    &:hover {
        cursor: pointer;
        border: 1px solid var(--moderate-cyan);
    }
    &:checked {
        background-color: var(--moderate-cyan);
        padding: 3.5px;
    }
`
const Label = styled.label`
    font-size: 0.85rem;
    font-weight: 800;
    &:hover {
        cursor: ${({numberLeft}) => numberLeft > 0 ? "pointer" : ""};
        color: ${({numberLeft}) => numberLeft > 0 ? "var(--moderate-cyan)" : ""}
    }
`
const Number = styled.p`
    font-size: 1.1rem;
    color: black;
    font-weight: 800;
    @media(min-width: 600px) {
        position: relative;
        left: 87%;
        bottom: 8.3rem;
        margin-bottom: -2.5rem;
    }
`
const Number2 = styled(Number)`
    @media(min-width: 628px) {
        bottom: 6.9rem;
    }
`
const TextLeft = styled(SmallText)`
    position: relative;
    left: .4rem;
    bottom: .05rem;
`
const Hr = styled.hr`
    border: .1px solid var(--light-gray);
    margin: 1rem -1.3rem 1.2rem;
`
const Enter = styled(SmallText)`
    width: 100%;
    text-align: center;
    @media(min-width: 600px) {
       width: 30%;
    }
`
const InputContainer = styled.div`
    width: 45%;
    max-width: 7rem;
    min-width: 5rem;
    height: 2.6rem;
    margin-right: 1rem;
    &:before {
        content: "$";
        font-family: 'Commissioner', sans-serif;
        font-size: .9rem;
        font-weight: 500;
        color: var(--dark-gray);
        position: relative;
        left: 27%;
        @media(min-width: 600px) {
            left: 25%;
        }
    }
`
const PledgeInput = styled.input`
    width: 90%;
    height: 100%;
    border: ${({error}) => error ? "1.5px solid red" : "1px solid var(--light-gray)"};
    border-radius: 30px;
    padding: 0 32%;
    font-family: 'Commissioner', sans-serif;
    font-size: .9rem;
    font-weight: 800;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        border: none;
        outline: 2px solid var(--moderate-cyan);
        caret-color: var(--moderate-cyan);
    }
    @media(min-width: 600px) {
        padding: 0 29%;
    }
`
const ContinueButton = styled(Button)`
    width: 45%;
    max-width: 7.5rem;
    min-width: 5rem;
`
const Error = styled(SmallText)`
    width: 100%;
    color: red;
    font-size: 0.7rem;
    text-align: center;
    position: relative;
    top: -0.6rem;
    margin-bottom: -1rem;
    @media(min-width: 600px) {
        text-align: right;
    }
`

const Modal = props => {
    const {handleModalDisplay, handleCompleteDisplay, selectPledge, setSelectPledge, handleSelectPledge, handleBacker, 
           setMoneyBacked, handleMoney, moneyBacked, handleMoneyBacked, numberLeft, handleNumberLeft} = props

    const handleCloseButton = () => {
        handleModalDisplay()
        setSelectPledge({
            pledge: ''
        })
        setMoneyBacked({
            bamboo: '',
            black: '',
            mahogany: ''
        })
    }

    const messages = {
        notNumber: "Error: please enter a valid number!",
        notMultiple: "Error: please enter a positive multiple of pledge!"
    }
    const [errorMessage, setErrorMessage] =  useState({
        noreward: "",
        bamboo: "",
        black: "",
        mahogany: ""
    })
    
    const handleErrorMessage = () => {
        if (selectPledge.pledge === "noreward") {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    noreward: messages.notNumber
                }
            })
        } 
        if (selectPledge.pledge === "bamboo" && moneyBacked.bamboo === "") {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    bamboo: messages.notNumber
                }
            })
        } else if (selectPledge.pledge === "bamboo" && (moneyBacked.bamboo % 25 !== 0 || moneyBacked.bamboo <= 0)) {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    bamboo: messages.notMultiple
                }
            })
        } 
        if (selectPledge.pledge === "black" && moneyBacked.black === "") {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    black: messages.notNumber
                }
            })
        } else if (selectPledge.pledge === "black" && (moneyBacked.black % 75 !== 0 || moneyBacked.black <= 0)) {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    black: messages.notMultiple
                }
            })
        }  
        if (selectPledge.pledge === "mahogany") {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    mahogany: messages.notNumber
                }
            })
        } else if (selectPledge.pledge === "mahogany" && (moneyBacked.mahogany % 200 !== 0 || moneyBacked.mahogany <= 0)) {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    mahogany: messages.notMultiple
                }
            })
        }  
    }

    const handleContinueButton = () => {
        if((selectPledge.pledge === "noreward" && moneyBacked.noreward > 0) 
            || (selectPledge.pledge === "bamboo" && moneyBacked.bamboo > 0 && moneyBacked.bamboo % 25 === 0)
            || (selectPledge.pledge === "black" && moneyBacked.black > 0 && moneyBacked.black % 75 === 0)
            || (selectPledge.pldge === "mahogany" && moneyBacked.mahogany > 0 && moneyBacked.mahogany % 200 === 0)
            ) {
            handleModalDisplay()
            handleCompleteDisplay()
            handleMoney()
            handleBacker()
            handleNumberLeft()
            setSelectPledge({
                pledge: ''
            })
            setMoneyBacked({
                bamboo: '',
                black: '',
                mahogany: ''
            })
        } else {
            handleErrorMessage()
            setMoneyBacked({
                bamboo: '',
                black: '',
                mahogany: ''
            })
        }
        
    }

    const modals = [
        {
            id: 'noreward',
            content: 
                <>
                    <Wrapper>
                        <RadioButton 
                            type='radio' 
                            id='noreward' 
                            name="pledge" 
                            value="noreward" 
                            checked={selectPledge.pledge === "noreward"}
                            onChange={handleSelectPledge}
                        />
                        <Label htmlFor='noreward' numberLeft={numberLeft.noreward}>Pledge with no reward</Label>
                    </Wrapper>
                    <Wrapper4>
                        <NoRewardInfo/>
                    </Wrapper4>
                    {selectPledge.pledge === "noreward" &&
                        <>
                        <Hr />
                        <Wrapper2>
                            <Enter>Enter your pledge</Enter>
                            <Wrapper3>
                                <InputContainer>
                                    <PledgeInput 
                                        type="text"
                                        name="noreward"
                                        value={moneyBacked.noreward}
                                        onChange={handleMoneyBacked}
                                        error={errorMessage.noreward}
                                    />
                                </InputContainer>
                                <ContinueButton onClick={handleContinueButton}>Continue</ContinueButton>
                            </Wrapper3>
                            <Error>{errorMessage.noreward}</Error>
                        </Wrapper2>
                    </>
                    }
                </>
        },
        {
            id: 'bamboo',
            content: 
                <>
                    <Wrapper>
                        <RadioButton 
                            type='radio' 
                            id='bamboo'
                            name="pledge" 
                            value="bamboo" 
                            checked={selectPledge.pledge === "bamboo"}
                            onChange={handleSelectPledge}
                            disabled={!numberLeft.bamboo}
                        />
                        <div>
                            <Label htmlFor='bamboo' numberLeft={numberLeft.bamboo}>Bamboo Stand</Label>
                            <Price>Pledge $25 or more</Price>
                        </div>
                    </Wrapper>
                    <Wrapper4>
                        <BambooStandInfo />
                    </Wrapper4>
                    <Number>{numberLeft.bamboo}<TextLeft as='span'>left</TextLeft></Number>
                    {selectPledge.pledge === "bamboo" &&
                        <>
                            <Hr />
                            <Wrapper2>
                                <Enter>Enter your pledge</Enter>
                                <Wrapper3>
                                    <InputContainer>
                                        <PledgeInput 
                                            type="text"
                                            name="bamboo"
                                            value={moneyBacked.bamboo}
                                            onChange={handleMoneyBacked}
                                            error={errorMessage.bamboo}
                                        />
                                    </InputContainer>
                                    <ContinueButton onClick={handleContinueButton}>Continue</ContinueButton>
                                </Wrapper3>
                                <Error>{errorMessage.bamboo}</Error>
                            </Wrapper2>
                        </>
                    }
                </>
        },
        {
            id: 'black',
            content: 
                <>
                    <Wrapper>
                        <RadioButton 
                            type='radio' 
                            id='black' 
                            name="pledge" 
                            value="black" 
                            checked={selectPledge.pledge === "black"}
                            onChange={handleSelectPledge}
                            disabled={!numberLeft.black}
                        />
                        <div>
                            <Label htmlFor='black' numberLeft={numberLeft.black}>Black Edition Stand</Label>
                            <Price>Pledge $75 or more</Price>
                        </div>
                    </Wrapper>
                    <Wrapper4>
                        <BlackStandInfo />
                    </Wrapper4>
                    <Number2>{numberLeft.black}<TextLeft as='span'>left</TextLeft></Number2>
                    {selectPledge.pledge === "black" &&
                        <>
                            <Hr />
                            <Wrapper2>
                                <Enter>Enter your pledge</Enter>
                                <Wrapper3>
                                    <InputContainer>
                                        <PledgeInput 
                                            type="text"
                                            name="black"
                                            value={moneyBacked.black}
                                            onChange={handleMoneyBacked}
                                            error={errorMessage.black}
                                        />
                                    </InputContainer>
                                    <ContinueButton onClick={handleContinueButton}>Continue</ContinueButton>
                                </Wrapper3>
                                <Error>{errorMessage.black}</Error>
                            </Wrapper2>
                        </>
                    }
                </>
        },
        {
            id: 'mahogany',
            content: 
                <>
                    <Wrapper>
                        <RadioButton 
                            type='radio' 
                            id='mahogany' 
                            name="pledge" 
                            value="mahogany" 
                            checked={selectPledge.pledge === "mahogany"}
                            onChange={handleSelectPledge}
                            disabled={!numberLeft.mahogany}
                        />
                        <div>
                            <Label htmlFor='mahogany' numberLeft={numberLeft.mahogany}>Mahogany Special Edition</Label>
                            <Price>Pledge $200 or more</Price>
                        </div>
                    </Wrapper>
                    <Wrapper4>
                        <MahoganyStandInfo/>
                    </Wrapper4>
                    <Number>{numberLeft.mahogany}<TextLeft as='span'>left</TextLeft></Number>
                    {selectPledge.pledge === "mahogany" &&
                        <>
                            <Hr />
                            <Wrapper2>
                                <Enter>Enter your pledge</Enter>
                                <Wrapper3>
                                    <InputContainer>
                                        <PledgeInput 
                                            type="text"
                                            name="mahogany"
                                            value={moneyBacked.mahogany}
                                            onChange={handleMoneyBacked}
                                            error={errorMessage.mahogany}
                                        />
                                    </InputContainer>
                                    <ContinueButton onClick={handleContinueButton}>Continue</ContinueButton>
                                </Wrapper3>
                                <Error>{errorMessage.mahogany}</Error>
                            </Wrapper2>
                        </>
                    }
                </>
        }
    ]
    return (
        <ViewportContainer>
            <ModalContainer>
                <SubTitle>Back this project</SubTitle>
                <ModalClose
                    src={ModalCloseIcon}
                    alt="modal close icon"
                    onClick={handleCloseButton}
                    onMouseOver={e => (e.currentTarget.src = `${ModalCloseIconHover}`)}
                    onMouseOut={e => (e.currentTarget.src = `${ModalCloseIcon}`)}
                />
                <ModalWelcome/>
                <ModalOption 
                    modals={modals} 
                    numberLeft={numberLeft} 
                    selectPledge={selectPledge.pledge}
                />
            </ModalContainer>
        </ViewportContainer>
    )
}
export default Modal