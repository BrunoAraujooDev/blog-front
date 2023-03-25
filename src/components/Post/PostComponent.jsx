import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getImgKind } from '../../utils/getImgType';
import {TextParagraph, PostContainer, PostTitle, PostImg, PostContent, TextButtonPost } from './styled'

const PostComponent = ({post, index}) => {

  const kind = getImgKind(index);

  const navigate = useNavigate();

  return (
   
        <PostContainer>
          <PostImg src={`https://source.unsplash.com/random/300x130?${kind}`} alt="Imagem do Cristo Redentor no fim da tarde" />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <TextParagraph>
              {post.body}
            </TextParagraph>
            <TextButtonPost onClick={() => navigate(`/post/${post.id}`)}>Ver mais</TextButtonPost>
          </PostContent>
        </PostContainer>
      
  )
}

export default PostComponent