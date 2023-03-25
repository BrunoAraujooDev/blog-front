import React from 'react'
import { getDayFormatted, getMonthFormatted } from '../../../utils/getRandomNumber';
import { CommentDiv, CommentItemContainer, CommentItemImg, SpanItem, UsernameCite } from './style'

const CommentItem = ({comment, day, month}) => {

    const dayFinal = getDayFormatted(day);
  const monthFinal = getMonthFormatted(month);
    
    return (
        <CommentItemContainer>
            <CommentItemImg src={`https://i.pravatar.cc/50?img=${comment.id}`} alt='random avatar pic' />
            <CommentDiv>
                <UsernameCite>{comment.name ?? 'Não foi possível encontrar o nome'}</UsernameCite>
                <SpanItem>{`${dayFinal}/${monthFinal}/2022`}</SpanItem>
                <p>{comment.body ?? 'Não foi possível carregar o comentário'}</p>
            </CommentDiv>

        </CommentItemContainer>
    )
}

export default CommentItem