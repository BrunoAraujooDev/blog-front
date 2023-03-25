import { Calendar, PencilLine } from 'phosphor-react';
import React from 'react'
import { getDayFormatted, getMonthFormatted } from '../../utils/getRandomNumber';
import { CarouselImg } from '../Carousel/style';
import { CommentItemImg } from '../Comments/CommentItem/style';
import { CommentsTitle } from '../Comments/style';
import { AuthorName, PostArticle, PostAuthorContainer, PostAvatarContainer, PostContent, PostSpan, PostTitle, WrittenByContainer } from './style'

const PostDetails = ({ post, user }) => {
  console.log('user', user)


  const day = getDayFormatted();
  const month = getMonthFormatted();



  return (
    <PostArticle>
      <CarouselImg src='https://source.unsplash.com/random/?trip' alt='Imagem aleatória' />
      <section>
        <PostTitle>{post.title != undefined ?
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
              <Calendar size={25} />{`${day}/${month}/2022`}
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
      <WrittenByContainer>
        <CommentsTitle>Escrito por</CommentsTitle>
        <PostAvatarContainer>
          <CommentItemImg src='https://i.pravatar.cc/60' alt='random avatar pic' />
          <PostAuthorContainer>
            <AuthorName>{user.name}</AuthorName>
            <PostSpan>
              {`Redator e criador de conteúdo pela ${user.company.name}, mais conhecido como ${user.username}, moro em ${user.address.city} e 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque diam, aliquet a mauris sit amet, efficitur placerat arcu. 
              `}
            </PostSpan>
          </PostAuthorContainer>
        </PostAvatarContainer>
      </WrittenByContainer>

    </PostArticle>
  )
}

export default PostDetails