import styled from 'styled-components'
import { SectionContainer } from '../components/SectionContainer'

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    @media (min-width: 501px) {
        img {
            width: 500px;
            height: 550px;
        }
    }

    @media (max-width: 500px) {
        img {
            width: 70%
            height: 70%
        }
    }

    height: 670px;
    text-align: center;
    overflow: hidden;

    h1 {
        font-size: 2.8rem;
        padding-top: 90px;
        padding-left: 10px;
    }

    h2 {
        font-family: 'Roboto';
        font-size: 1rem;
        padding: 0 10px;
    }

`

const Header = props => {
    return (
        <SectionContainer>
            <Wrapper className='header'>
                    <h1>Eduardo Soares Dutra</h1>
                    <h2>Estudante de Ciência da Computação | Desenvolvedor front-end</h2>
                    <img src="src\media\Code typing-bro.svg" alt="Front-end Dev" />
            </Wrapper>
        </SectionContainer>
    )
}

export default Header