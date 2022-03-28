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

    div, p {
        margin: 4px 0;
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
                <p>Ilustrações fornecidas por <a href="https://storyset.com/work">Storyset</a></p>
            </Wrapper>
        </footer>
    )
}

export default Footer