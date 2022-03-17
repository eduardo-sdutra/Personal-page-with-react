import styled from 'styled-components'
import { CardTemplate } from '../components/CardTemplate'
import { SectionContainer } from '../components/SectionContainer'

const Wrapper = styled.div`
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

    .info div {
        text-align: justify;
        max-width: 400px;
        padding: 30px 15px;
        font-weight: 200;
        font-family: 'Roboto';
    }
`

const About = props => {
    return (
        <SectionContainer>
            <CardTemplate>
                <Wrapper>
                    <div className="infoWrapper">
                        <h1>Um pouco sobre mim :)</h1>
                        <hr/>
                        <div className="info">
                            <img src="src\media\eduardoSoaresDutra.jpg" alt="Eduardo Soares Dutra" />
                            <div>
                                Oi, meu nome é Eduardo, sou estudante do quinto período de Ciência da Computação,
                                possuo
                                raciocínio
                                lógico e criativo desenvolvidos,
                                além de conhecimento e domínio da lógica de programação, conceitos de programação e
                                desenvolvimento de software. Atualmente estou me aventurando no desenvolvimento web
                                utilizando tecnologias como React, ao mesmo tempo que procuro por uma oportunidade
                                para
                                mostrar minhas habilidades como desenvolvedor.
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </CardTemplate>
        </SectionContainer>
    )
}

export default About