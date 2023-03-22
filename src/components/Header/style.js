import styled from "styled-components";


export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    `

export const LogoImg = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    `

export const HeaderList = styled.ul`
    display: flex;
    width: 20rem;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
`

export const HeaderListItems = styled.li`

    padding: 10px 15px;
    
    &:hover{
            background-color: ${props => props.theme['button-secondary-color']};
        }

    & > a{
        color: ${props => props.theme['white']};
        
    }
`