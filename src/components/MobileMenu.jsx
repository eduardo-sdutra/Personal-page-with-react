import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import { useEffect } from 'react'

const MobileMenuDiv = styled.div`
    background-color: #eee;
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

    .mobileMenuWrapper ul {
        display: flex;
        flex-direction: column;
        justify-content: center;

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