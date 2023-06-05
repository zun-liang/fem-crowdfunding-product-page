import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    :root {
        --moderate-cyan: hsl(176, 50%, 47%);
        --dark-cyan: hsl(176, 72%, 28%);
        --dark-gray: hsl(0, 0%, 48%);
        --light-gray: hsl(240, 3%, 90%);
    }
    
    html {
        width: 100%;
        height: 100%;
        font-size: 16px;
    }
    
    body {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-family: 'Commissioner', sans-serif;
        background-color: hsl(0, 0%, 97%);
        overflow-x: hidden;
        overflow-y: ${({modalDisplay, completeDisplay}) => modalDisplay || completeDisplay ? "hidden" : "auto"};
    }
    
    body::-webkit-scrollbar {
        display: none;
    }
`

export default GlobalStyles