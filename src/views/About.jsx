import styled from 'styled-components'
import { CardTemplate } from '../components/CardTemplate'
import { SectionContainer } from '../components/SectionContainer'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Wrapper = styled.div`
    a, a:hover, a:focus, a:active {
        color: ${props => props.theme.colors.primary};
    }

    .info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        font-size: 1.3rem;
        padding-top: 30px;
    }

    .info img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .info p {
        text-align: justify;
        padding: 30px 15px;
        font-weight: 200;
        font-family: 'Roboto';
    }

    .aboutMedia {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-itens: center;
    }

    .social {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-itens: center;
        margin: 0 30px;
    }

    .social a {
        margin: 6px 0;
    }

    .icon {
        color: ${props => props.theme.colors.primary}
    }
`

const About = props => {
    return (
        <SectionContainer id="sobre">
            <CardTemplate>
                <Wrapper>
                    <div className="infoWrapper">
                        <h1>Um pouco sobre mim :)</h1>
                        <hr />
                        <div className="info">
                            <div className="aboutMedia">
                                <div className="social">
                                    <a href="https://github.com/eduardo-sdutra" target="_blank">
                                        <SiGithub size={30} className="icon" />
                                    </a>
                                    <a href="https://linkedin.com/in/eduardo-soares-dutra-b00273217" target="_blank">
                                        <SiLinkedin size={30} className="icon" />
                                    </a>
                                </div>
                                <img src="src\media\eduardoSoaresDutra.jpg" alt="Eduardo Soares Dutra" />
                            </div>
                            <p>
                                Oi, meu nome é Eduardo, sou estudante de Ciência da Computação,
                                apaixonado por tecnologia, programação e desenvolvimento de software. Possuo conhecimento e
                                domínio de lógica de programação, conceitos e paradigmas de programação
                                e desenvolvimento de software, como programação orientada a objetos e funcional.
                                Atualmente estou me aventurando no desenvolvimento web
                                utilizando tecnologias como React, ao mesmo tempo que procuro por oportunidades
                                para
                                aprimorar meus conhecimentos e mostrar minhas habilidades como desenvolvedor.
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </CardTemplate>
        </SectionContainer>
    )
}

export default About