import styled from 'styled-components'
import { TitleSection } from '../LayoutCards/style'

export const PostArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PostTitle = styled(TitleSection)`
    font-weight: 700;
    margin-bottom: 1.5rem;
    width: 100%;
    margin-top: 5rem;
`


export const PostAvatarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.7rem;
    width: 100%;

    & > img {
        border: 2px solid #000;
    }
`

export const PostAuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PostSpan = styled.span`
    color: ${props => props.theme['text-paragraph-color']};
    font-size: 0.9rem;
`

export const PostContent = styled.p`
    width: 75%;
    margin: 10rem 0;

    @media (max-width: 670px){
        width: 100%;

    }
`

export const WrittenByContainer = styled.section `
    border: 1px solid ${props => props.theme['text-paragraph-color']};
    padding: 30px;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 75%;

    @media (max-width: 670px){
        width: 100%;

    }
`

export const AuthorName = styled.span`
    color: ${props => props.theme['text-primary-color']};
    font-weight: 700;
`