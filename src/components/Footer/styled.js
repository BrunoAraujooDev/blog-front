import styled from 'styled-components';


export const FooterContainer = styled.footer`
    height: 7rem;
    width: 100%;
    background-color: ${props => props.theme['fourth-color-theme']};
    padding: 30px;

    display: flex;
    justify-content: center;
    gap: 10rem;
    align-items: center;

 `

export const FooterList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10rem;
    align-items: center;
    `

export const FooterItemLink = styled.a`
    color: ${props => props.theme['text-primary-color']};

`