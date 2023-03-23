import React from 'react'
import { TextButton, TextParagraph } from '../../../pages/Home/style'
import { CardContainer, CardContent, CardImg, CardTitle } from './style'

const Card = ({post, index}) => {
  return (
    <CardContainer>
      <CardImg src={`https://source.unsplash.com/random/300x130?sign=${index + 50}`} alt="Random picture" />
      <CardContent>
        <CardTitle>{post.title.substring(0,27)}</CardTitle>
        <TextParagraph>{post.body.substring(0, 130)}...</TextParagraph>
        <TextButton>Ver mais</TextButton>
      </CardContent>
    </CardContainer>
  )
}

export default Card