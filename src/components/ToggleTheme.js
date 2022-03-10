import styled from 'styled-components'

export const ToggleTheme = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.elements.text};
    &: focus {
        border: none;
    }
    transition: all .3s ease-in-out;
`