import { Calendar, PencilLine } from 'phosphor-react';
import React from 'react'
import {  getDayFormatted, getMonthFormatted } from '../../utils/getRandomNumber';
import {CarouselImg} from '../Carousel/style';
import { PostArticle, PostAuthorContainer, PostAvatarContainer, PostContent, PostSpan, PostTitle } from './style'

const PostDetails = ({ post, user }) => {

  const day = getDayFormatted();
  const month = getMonthFormatted();



  return (
    <PostArticle>
      <CarouselImg src='https://source.unsplash.com/random/?trip' alt='Imagem aleatória'/>
      <section>
      <PostTitle>{post.title != undefined  ? 
        post.title[0].toUpperCase() + post.title.substring(1, post.title.length) :
       'Sem título disponível'}
       </PostTitle>
      <PostAvatarContainer>
        <img src='https://i.pravatar.cc/60' alt='random avatar pic' />
        <PostAuthorContainer>
          <PostSpan>
          <PencilLine size={25} />   {user.name}
          </PostSpan>
          <PostSpan>
            <Calendar size={25} />{ `${day}/${month}/2022`}
          </PostSpan>
        </PostAuthorContainer>
      </PostAvatarContainer>
      </section>


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