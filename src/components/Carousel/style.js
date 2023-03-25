import styled from 'styled-components';

export const CarouselImg = styled.img`
    width: 80rem;
    height: 30rem;
    object-fit: cover;
    border: 1px solid #000;
    
    @media (max-width: 1360px) {
        width: 100%;
    }
    `


export const CarouselText = styled.p`
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['transparent-background']};
`