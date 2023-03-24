import styled from 'styled-components';

export const PostCommentContainer = styled.div`
    display: flex;
    width: 100%;
    min-height:90vh;
    justify-content: center;
    align-items: center;
    padding: 250px 50px;
    background-color: ${props => props.theme['primary-color-theme']};
`