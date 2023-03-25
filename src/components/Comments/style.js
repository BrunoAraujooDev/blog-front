import styled from 'styled-components'

export const CommentsContainer = styled.section`
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 50px;
    gap: 2rem;
    border: 1px solid ${props => props.theme['text-primary-color']};
    
    &> ul {
        padding-left: 0px;
    }
    @media (max-width: 670px){
        padding: 20px;
        width: 100%;

    }
`

export const CommentsTitle = styled.span`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 700;
    font-size: 1.5rem;
    width: 90%;
    color: ${props => props.theme['text-primary-color']};
    border-bottom: 1px solid ${props => props.theme['text-paragraph-color']};
    `

export const FormComment = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    border-top: 1px solid ${props => props.theme['text-paragraph-color']};
`

export const FormTitle = styled.h3`
    color: ${props => props.theme['text-primary-color']};
    font-weight: 700;
    font-size: 1.8rem;
    margin-top: 1rem;

`

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > label{
        color: ${props => props.theme['text-primary-color']};
    }

    & > input {
        width: 100%;
        padding: 8px;
        font-size: .9rem;
    }

    & > textarea {
        width: 100%;
        padding: 8px;
        font-size: .9rem;
    }
`

export const FormButton = styled.button`
    color: ${props => props.theme['header-primary-color']};
    border: 1px solid ${props => props.theme['header-primary-color']};
    padding: 10px 8px;
    border-radius: 15px;
    font-size: 1.1rem;
    
    &:hover{
        background-color: ${props => props.theme['header-primary-color']};
        color: ${props => props.theme['white']};
    
    }
`