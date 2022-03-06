import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@500&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${props => props.theme.elements.background};
        color: ${props => props.theme.elements.text};
        font-family: 'Ubuntu';
    }
    .App {
        display: flex;
        flex-direction: column;
    }
`