import { MenuStyledComponent } from "./MenuStyledComponent"
import { BsSunFill } from 'react-icons/bs'
import { RiMoonFill } from 'react-icons/ri'
import { ToggleTheme } from "./ToggleTheme"

const Menu = props => {
    const icon = props.theme.title === 'light' ? <BsSunFill size={25} /> : <RiMoonFill size={25} />
    const name = 'eduardo'

    return (
        <MenuStyledComponent>
            <nav className='menu'>
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
                <ToggleTheme className="themeModeButton" onClick={props.toggleTheme}>{icon}</ToggleTheme>
            </nav>
        </MenuStyledComponent>
    )
}

export default Menu