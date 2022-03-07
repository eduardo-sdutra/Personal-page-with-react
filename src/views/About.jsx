import styled from 'styled-components'
import { SectionContainer } from '../components/SectionContainer'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #2b2c34;
    background: #6246ea;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6246ea, #512DA8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6246ea, #512DA8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    h1 {
        font-size: 2.5rem;
        padding-top: 50px;
    }

    .info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        font-size: 1.3rem;
        padding: 50px 0;
    }

    .info img {
        width: 300px;
        height: 300px;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }

    .info p {
        text-align: justify;
        width: 400px;
        padding-top: 50px;
    }
`

const About = props => {
    return (
        <SectionContainer>
            <Wrapper>
                <h1>Um pouco sobre mim :)</h1>
                <div className="info">
                    <img src="src\media\eduardoSoaresDutra.jpg" alt="Eduardo Soares Dutra" />
                    <p>
                        Oi, meu nome é Eduardo, sou estudante do quinto período de Ciência da Computação, possuo
                        raciocínio
                        lógico e criativo desenvolvidos,
                        além de conhecimento e domínio da lógica de programação, conceitos de programação e
                        desenvolvimento de software. Atualmente estou me aventurando com desenvolvimento web front-end
                        utilizando ReactJS.
                    </p>
                </div>
            </Wrapper>
        </SectionContainer>
    )
}

export default About