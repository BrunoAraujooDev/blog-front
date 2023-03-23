export const HighlightedSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme['primary-color-theme']};
    
    `

export const MainTopicDiv = styled.div`
    background-color: ${props => props.theme['secondary-color-theme']};
    box-shadow: 0px 5px 40px -1px rgba(0,0,0,0.40);
    display: flex;
    width: 55rem;
    height: 25rem;
    position: relative;
    top: -50px;

    @media (max-width: 1550px) {
        width: 55rem;
  }


    @media (max-width: 972px) {
        width: 95%; 
  }


    @media (max-width: 768px) {
        flex-direction: column-reverse;
        height: 500px;
  }

  @media (max-width: 425px) {
        width: 90%; 
  }

`

export const TextDiv = styled.div`
    padding: 40px 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px) {
      width: 100%;
      height: 40%;
  }

  @media (max-width: 425px) {
    padding: 40px 20px;
  }
`

export const TextTitle = styled.h3`
    font-size: 2rem;
    line-height: 1.1;
    color: ${props => props.theme['text-primary-color']};

    @media (max-width: 768px) {
      font-size: 1.8rem;
  }
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

    @media (max-width: 768px) {
      width: 100%;
      height: 60%;
  }
`