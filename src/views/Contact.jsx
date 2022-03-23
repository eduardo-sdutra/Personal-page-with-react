import { CardTemplate } from "../components/CardTemplate"
import { SectionContainer } from "../components/SectionContainer"
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Contact = props => {
    return (
        <SectionContainer>
            <CardTemplate>
                <Wrapper>
                    <div className="infoWrapper">
                        <h1>Meus Contatos</h1>
                        <hr/>
                        
                    </div>
                </Wrapper>
            </CardTemplate>
        </SectionContainer>
    )
}

export default Contact