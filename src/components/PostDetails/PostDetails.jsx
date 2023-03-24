import React from 'react'
import {CarouselImg} from '../Carousel/style';
import { PostArticle, PostAuthorContainer, PostAvatarContainer, PostContent, PostSpan, PostTitle } from './style'

const PostDetails = ({ post, user }) => {


  return (
    <PostArticle>
      <section>
      <PostTitle>{post.title != undefined  ? 
        post.title[0].toUpperCase() + post.title.substring(1, post.title.length) :
       'Sem título disponível'}
       </PostTitle>
      <PostAvatarContainer>
        <img src='https://i.pravatar.cc/60' alt='random avatar pic' />
        <PostAuthorContainer>
          <PostSpan>
            <strong>Autor:</strong>   {user.name}
          </PostSpan>
          <PostSpan>
            <strong>Atualizado em:</strong>  30/03/2023
          </PostSpan>
        </PostAuthorContainer>
      </PostAvatarContainer>
      </section>

      <CarouselImg src='https://source.unsplash.com/random/?trip' alt='Imagem aleatória'/>

      <PostContent>
        {post.body?.charAt(0).toUpperCase()}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}
        {post.body}.
      </PostContent>


    </PostArticle>
  )
}

export default PostDetails