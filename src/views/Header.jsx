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
            width: 320px;
            height: 320px;
        }
    }

    @media (max-width: 1024px) {
        .imageTwo img {
            display: none;
        }
    }

    height: 100vh;
    text-align: center;
    overflow: hidden;

    h1 {
        font-size: 2.8rem;
        padding-top: 120px;
        padding-left: 10px;
    }

    h2 {
        font-family: 'Roboto';
        font-size: 1rem;
        padding: 0 10px;
    }

    .images {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: nowrap;
    }
`

const Header = props => {
    return (
        <SectionContainer>
            <Wrapper className='header'>
                    <h1>Eduardo Soares Dutra</h1>
                    <h2>Estudante de Ciência da Computação e Desenvolvedor Web</h2>
                    <div className='images'>
                        <div className='imageOne'>
                            <img src="src\media\Code typing-pana.svg" alt="Developer 1" />
                        </div>
                        <div className='imageTwo'>
                            <img src="src\media\Mobile development-pana.svg" alt="Developer 2" />
                        </div>
                    </div>
            </Wrapper>
        </SectionContainer>
    )
}

export default Header