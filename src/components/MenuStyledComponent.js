import styled from 'styled-components'

export const MenuStyledComponent = styled.div`
    @media (max-width: 769px) {
        .menuLinks li a {
            display: none;
        }
    }

    @media (min-width: 769px) {
        .mobileMenu {
            display:none;
        }
    }

    position: fixed;
    width: 100%;

    .menu {
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        font-family: 'Roboto';
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1px;
        background-color: ${props => props.theme.colors.primary};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .menu ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .menu li {
        margin: 4px;
    }

    .menu a {
        text-decoration: none;
        color: ${props => props.theme.elements.text};
        padding: 0px 6px;
    }

    .name {
        font-family: 'Ubuntu';
        padding: 0 40px;
    }

    .themeModeButton {
        padding: 0 30px;
    }
`