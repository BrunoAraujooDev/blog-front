import styled from 'styled-components';



export const PostContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme['secondary-color-theme']};
    box-shadow: 0px 5px 40px -1px rgba(0,0,0,0.40);
    width: 55rem;
    height: 20rem;
    border-radius: 15px;
    overflow: hidden;

    @media (max-width: 1550px) {
        width: 55rem;
  }


    @media (max-width: 976px) {
        width: 60%; 
        flex-direction: column;
        height: 35rem;
  }


    @media (max-width: 790px) {
        width: 90%;
  }

  @media (max-width: 570px) {
        height: 50rem; 
  }

`

export const PostContent = styled.div`
    padding: 40px 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 976px) {
      width: 100%;
      height: 60%;
  }
`

export const PostTitle = styled.h3`
    font-size: 1.8rem;
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
    align-self: flex-end;
    justify-self: flex-end;
    cursor: pointer;
`

export const PostImg = styled.img`
    width: 50%;
    height: 100%;

    @media (max-width: 976px) {
      width: 100%;
      height: 40%;
  }
`