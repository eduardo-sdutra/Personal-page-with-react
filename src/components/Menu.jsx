import { MenuStyledComponent } from "./MenuStyledComponent"
import { BsSunFill } from 'react-icons/bs'
import { RiMoonFill } from 'react-icons/ri'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { ToggleTheme } from "./ToggleTheme"
import MobileMenu from "./MobileMenu"

import { useState } from "react"

const Menu = props => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const mobileMenuIcon = openMobileMenu ? <GrClose size={25} /> : <FiMenu size={25} />
    const switchThemeIcon = props.theme.title === 'light' ? <BsSunFill size={25} /> : <RiMoonFill size={25} />
    const name = 'eduardo'

    return (
        <MenuStyledComponent>
            <nav className='menu'>
                <a href="#" className="mobileMenu" onClick={() => setOpenMobileMenu(!openMobileMenu)}>{mobileMenuIcon}</a>
                <span className="name">{name}</span>
                <ul className="menuLinks">
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
                <ToggleTheme className="themeModeButton" onClick={props.toggleTheme}>{switchThemeIcon}</ToggleTheme>
            </nav>
            <MobileMenu openMobileMenu={openMobileMenu} />
        </MenuStyledComponent>
    )
}

export default Menu