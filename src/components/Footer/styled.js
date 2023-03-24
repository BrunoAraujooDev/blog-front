import styled from 'styled-components';


export const FooterContainer = styled.footer`
    height: 7rem;
    width: 100%;
    background-color: ${props => props.theme['header-primary-color']};
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
    color: ${props => props.theme['white']};

    &:hover{
        color: ${props => props.theme['white']};
    }

`