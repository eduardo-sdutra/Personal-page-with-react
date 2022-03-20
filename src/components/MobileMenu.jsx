import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const MobileMenuDiv = styled.div`
    background-color: ${props => props.theme.elements.background_mobile_menu};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 65%;
    height: 100%;
    position:fixed;
    z-index: 1;

    a {
        font-family: 'Roboto';
        font-weight: 700;
        text-decoration: none;
        color: ${props => props.theme.elements.text}
    }

    .mobileMenuWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mobileMenuWrapper ul {
        list-style: none;
    }

    .mobileMenuWrapper li {
        font-size: 2rem;
        margin: 20px 10px;
    }
`

const MobileMenu = props => {
    return (
        <CSSTransition
        in={props.openMobileMenu}
        timeout={300}
        classNames="mobile-menu"
        unmountOnExit
        >
            <MobileMenuDiv>
                <ul className="mobileMenuWrapper">
                    <li>
                        <a href="#inicio">Início</a>
                    </li>
                    <li>
                        <a href="#sc-dkPtRN cmlbRe">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Habilidades</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </MobileMenuDiv>
        </CSSTransition>
    )
}

export default MobileMenu