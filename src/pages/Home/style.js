import styled from "styled-components";


export const HomeMain = styled.main`
    min-height: 100vh;
    width: 100%;
`

export const BannerSection = styled.section`
    background-image: url('man-sky.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    width: 100%;
    color: ${props => props.theme['white']};
    padding: 40px 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    
    & > h1 {
        font-size: 2.5rem;
        line-height: 1.2;
    }

    & > p {
        margin-bottom: 150px;
        margin-top: 10px;
        font-size: 1.1rem;
    }
`


export const HighlightedSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme['primary-color-theme']};
    
    `

export const MainTopicDiv = styled.div`
    background-color: ${props => props.theme['primary-color-theme']};
    display: flex;
    width: 50%;
    height: 25rem;
    position: relative;
    top: -50px;

`

export const TextDiv = styled.div`
    padding: 40px 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const TextTitle = styled.h3`
    font-size: 2rem;
    line-height: 1.1;
    color: ${props => props.theme['text-primary-color']};
    `

export const TextParagraph = styled.p`
    color: ${props => props.theme['text-paragraph-color']};
    font-size: 1rem;
    `

export const TextButton = styled.a`
    background-color: ${props => props.theme['button-primary-color']};
    color: ${props => props.theme['text-primary-color']};
    padding: 10px 20px;
    border-radius: 15px;
    width: 8rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
`

export const TextImg = styled.img`
    width: 50%;
    height: 100%;
`

