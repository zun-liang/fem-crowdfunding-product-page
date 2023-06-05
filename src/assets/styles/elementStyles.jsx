import styled from "styled-components"

export const ViewportContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    oveflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    background-color: hsl(0, 0%, 0%, 0.3);
    @media(min-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Container = styled.div`
    width: 88vw;
    max-width: 600px;
    background-color: white;
    border-radius: .6rem;
    line-height: 1.8;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
export const SmallContainer = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 7px;
    border: 1px solid var(--light-gray);
    margin: 0 auto 0.4rem;
    padding: 1.3rem;
`
export const SubTitle = styled.h4`
    font-size: 1.15rem;
    color: black;
    align-self: flex-start;
`
export const Price = styled.p`
    color: var(--moderate-cyan);
    font-size: 0.85rem;
    font-weight: 500;
`
export const Button = styled.button`
    height: 2.6rem;
    border-radius: 30px;
    border: none;
    background-color: var(--moderate-cyan);
    color: white;
    font-family: 'Commissioner', sans-serif;
    font-size: .85rem;
    font-weight: 500;
    &:hover {
        background-color: var(--dark-cyan);
        cursor: pointer;
    }
`
export const SmallText = styled.p`
    color: var(--dark-gray);
    font-size: .85rem;
    font-weight: 400;
`