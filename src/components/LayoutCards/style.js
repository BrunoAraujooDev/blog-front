import styled from "styled-components";


export const LayoutCardContainer = styled.section`
    width: 100%;
    padding: 40px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    background-color: ${props => props.theme['white']};
    
    `
export const TitleSection = styled.h3`
    color: ${props => props.theme['header-primary-color']};
    font-size: 2.5rem;
    text-align: left;
    font-weight: 700;
    
    &::before{
        content: "";
        border-top: 3px solid ${props => props.theme['text-primary-color']};
        position: relative;
        top: 20%;
        width: 80rem;
        right: 0;
        display: block;
        left: 0;
        bottom: -50px;

        @media (max-width: 1360px) {
        width: 60rem;
        }

        @media (max-width: 1050px) {
            width: 40rem;
        }

        @media (max-width: 690px) {
            width: 30rem;
        }

        @media (max-width: 535px) {
            width: 20rem;
        }

        @media (max-width: 350px) {
            width: 100%;
        }
    }
    
`

export const SpanLine = styled.span`

`

export const LayoutCardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
    width: 100%;
    gap: 4rem;
    
`

export const ButtonCard = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: ${props => props.theme['brown-color-theme']};
    color: ${props => props.theme['white']};
    box-shadow: 0px 3px 40px -1px rgba(0,0,0,0.40);
    padding: 10px 20px;
    border-radius: 15px;
    width: 12rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    border: none;
    margin: 4rem auto;
    cursor: pointer;
`
