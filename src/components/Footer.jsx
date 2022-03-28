import react from 'react'
import styled from 'styled-components'
import { SiReact } from 'react-icons/si'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.secondary};

    p, a {
        color: #2b2c34;
    }

    a {
        font-size: 0.9rem;
    }

    div, a {
        margin: 4px 4px;
    }

    #reactIcon {
        color: #61dbfb;
        margin: 0px 8px;
    }

    .madeWith {
        display: flex;
        align-items: center;
    }
`

const Footer = props => {
    return (
        <footer>
            <Wrapper>
                <div className="madeWith">
                    <p>Feito com </p><SiReact id="reactIcon" size={30} />
                </div>
                <div>
                    <a href="https://storyset.com/work">Work illustrations by Storyset</a>
                    <a href="https://www.flaticon.com/br/icones-gratis/ui" title="ui ícones">Ui ícones criados por Circlon Tech - Flaticon</a>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer