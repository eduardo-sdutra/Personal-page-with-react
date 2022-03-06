import styled from 'styled-components'

export const MenuStyledComponent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');

    @media (max-width: 768px) {
        .menuLinks li a {
            display: none;
        }
    }

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        font-family: 'Roboto';
        font-size: 1.5rem;
        background-color: ${props => props.theme.colors.primary};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .menu ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .menu a {
        text-decoration: none;
        color: ${props => props.theme.elements.text};
        padding: 0px 10px;
    }

    .name {
        font-family: 'Ubuntu';
        padding: 0 40px;
    }

    .themeModeButton {
        padding: 0 30px;
    }
`