import styled from "styled-components";


export const LayoutCardContainer = styled.section`
    width: 100%;
    padding: 40px 50px;
    background-color: ${props => props.theme['white']};

`
export const TitleSection = styled.h3`
    color: ${props => props.theme['brown-color-theme']};
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    margin: 50px 0px;
`

export const LayoutCardDiv = styled.div`
    display: flex;
    /* flex-direction: column; */
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
