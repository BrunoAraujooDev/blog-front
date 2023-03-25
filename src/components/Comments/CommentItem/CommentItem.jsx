import React from 'react'
import { CommentDiv, CommentItemContainer, CommentItemImg, SpanItem, UsernameCite } from './style'

const CommentItem = ({comment}) => {
    return (
        <CommentItemContainer>
            <CommentItemImg src={`https://i.pravatar.cc/50?img=${comment.id}`} alt='random avatar pic' />
            <CommentDiv>
                <UsernameCite>{comment.name ?? 'Não foi possível encontrar o nome'}</UsernameCite>
                <SpanItem>30/03/2022</SpanItem>
                <p>{comment.body ?? 'Não foi possível carregar o comentário'}</p>
            </CommentDiv>

        </CommentItemContainer>
    )
}

export default CommentItem