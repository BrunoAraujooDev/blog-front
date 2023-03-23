import React from 'react'
import { useNavigate } from 'react-router-dom'
import {TextParagraph, TextButton, PostContainer, PostTitle, PostImg, PostContent } from './styled'

const PostComponent = ({post, index}) => {

  const navigate = useNavigate();

  return (
   
        <PostContainer>
          <PostImg src={`https://source.unsplash.com/random/300x130?sign=${index + 50}`} alt="Imagem do Cristo Redentor no fim da tarde" />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <TextParagraph>
              {post.body}
            </TextParagraph>
            <TextButton onClick={() => navigate(`/post/${post.id}`)}>Ver mais</TextButton>
          </PostContent>
        </PostContainer>
      
  )
}

export default PostComponent