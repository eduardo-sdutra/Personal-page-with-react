import { CardTemplate } from "../components/CardTemplate"
import { SectionContainer } from "../components/SectionContainer"
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;

    .contactInfo {
        margin: 30px 0;
    }

    .contactInfo ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        list-style: none;
        margin: 60px 0;
    }
    
    .contactInfo li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-size: 1.1rem;
        font-family: roboto;
        font-weight: 700;
        margin: 20px 0;
    }
    
    .contactInfo p {
        font-family: roboto;
        font-size: 1.2rem;
    }

    .contactIcon {
        margin: 0 8px;
    }
`

const Contact = props => {
    return (
        <SectionContainer id="contato">
            <CardTemplate>
                <Wrapper>
                    <div className="infoWrapper">
                        <h1>Contato</h1>
                        <hr />
                        <div className="contactInfo">
                            <p>Se precisar falar comigo, aqui estão meus contatos!</p>
                            <ul>
                                <li>
                                    <HiOutlineMail size={30} className="contactIcon" /><span>eduardosoaresdutra@gmail.com</span>
                                </li>
                                <li>
                                    <BsWhatsapp size={25} className="contactIcon" /><span>(28) 9 9917-0314</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            </CardTemplate>
        </SectionContainer>
    )
}

export default Contact;