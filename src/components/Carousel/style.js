import styled from 'styled-components';

export const CarouselImg = styled.img`
    width: 80rem;
    height: 30rem;

    @media (max-width: 1360px) {
        width: 100%;
    }
`


export const CarouselText = styled.p`
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['white']}
`