import styled from 'styled-components'
import { CardTemplate } from '../components/CardTemplate'
import { SectionContainer } from '../components/SectionContainer'

const Wrapper = styled.div`
    .infoWrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
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
        max-width: 400px;
        padding: 30px 15px;
    }
`

const About = props => {
    return (
        <SectionContainer>
            <CardTemplate>
                <Wrapper>
                    <div className="infoWrapper">
                        <h1>Um pouco sobre mim :)</h1>
                        <div className="info">
                            <img src="src\media\eduardoSoaresDutra.jpg" alt="Eduardo Soares Dutra" />
                            <p>
                                Oi, meu nome é Eduardo, sou estudante do quinto período de Ciência da Computação,
                                possuo
                                raciocínio
                                lógico e criativo desenvolvidos,
                                além de conhecimento e domínio da lógica de programação, conceitos de programação e
                                desenvolvimento de software. Atualmente estou me aventurando no desenvolvimento web
                                utilizando tecnologias como React, ao mesmo tempo que procuro por uma oportunidade
                                para
                                mostrar minhas habilidades como desenvolvedor.
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </CardTemplate>
        </SectionContainer>
    )
}

export default About