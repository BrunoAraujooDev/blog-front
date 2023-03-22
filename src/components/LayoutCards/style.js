import styled from "styled-components";


export const CardContainer = styled.section`
    width: 100%;
`
export const TitleSection = styled.p`
    color: ${props => props.theme['text-primary-color']};
    font-size: 2rem;
    text-align: center;
    margin-top: 50px;
    text-decoration: underline;
    text-decoration-thickness: 5px;
`

export const LayoutCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
    width: 100%;
    gap: 4rem;
    
    `
