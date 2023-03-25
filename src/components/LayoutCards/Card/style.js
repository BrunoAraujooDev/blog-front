import styled from "styled-components";

export const CardContainer = styled.div`
    height: 500px;
    width: 300px;
    max-width: 300px;
    border-radius: 15px;
    border: 1px solid ${props => props.theme['border-primary-color']};
    box-shadow: 0px 5px 40px -1px rgba(0,0,0,0.40);
    overflow: hidden;
`
export const CardImg = styled.img`
    width: 100%;
    height: 40%;
`

export const CardContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    height: 50%;

    & > p{
        height: 7rem;
        word-break: break-all;
    }

    & > a {
        justify-self: flex-end;
    }
`



export const CardTitle = styled.span`
    font-size: 1.3rem;
    line-height: 1.1;
    word-break: break-all;
    color: ${props => props.theme['text-primary-color']};
    height: 5rem;
`