import styled from 'styled-components'

export const CardTemplate = styled.div`
    @media (min-width: 523px) {
        margin: 0 30px;
    }

    @media (max-width: 768px) {
        width: 100%
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #2b2c34;
    background: ${props => props.theme.colors.secondary};
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff5e62, ${props => props.theme.colors.secondary});
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff5e62, ${props => props.theme.colors.secondary});
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 25px;
    width: 520px;
    padding: 0 20px;

    h1 {
        font-size: 2.5rem;
        padding-top: 50px;
    }
`