import styled from 'styled-components'
import { PostSpan } from '../../PostDetails/style'

export const CommentItemContainer = styled.li`
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
`

export const CommentItemImg = styled.img`
    width: 50px;
    max-width: 50px;
    height: 50px;
    border-radius: 50px;
` 

export const CommentDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color:  ${props => props.theme['third-color-theme']};
    padding: 20px;
    border-radius: 15px;
`
export const SpanItem = styled(PostSpan)`
    margin-top: -1rem;
`

export const UsernameCite = styled.cite`
    font-weight: 700;
    font-size: 1.1rem;
`