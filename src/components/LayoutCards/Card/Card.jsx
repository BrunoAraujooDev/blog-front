import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TextButton, TextParagraph } from '../../../pages/Home/style'
import { getImgKind } from '../../../utils/getImgType';
import { CardContainer, CardContent, CardImg, CardTitle } from './style'

const Card = ({post, index}) => {

  const kind = getImgKind(index);

  const navigate = useNavigate();

  return (
    <CardContainer>
      <CardImg src={`https://source.unsplash.com/random/300x130?${kind}`} alt="Random picture" />
      <CardContent>
        <CardTitle>{post.title.substring(0,27)}</CardTitle>
        <TextParagraph>{post.body.substring(0, 130)}...</TextParagraph>
        <TextButton onClick={() => navigate(`/post/${post.id}`)}>Ver mais</TextButton>
      </CardContent>
    </CardContainer>
  )
}

export default Card