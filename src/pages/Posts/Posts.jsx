import React, { useEffect, useState } from 'react'
import CarouselComponent from '../../components/Carousel/CarouselComponent';
import { TitleSection } from '../../components/LayoutCards/style';
import PostComponent from '../../components/Post/PostComponent';
import { getPosts } from '../../services/httpRequest';
import { PostsContainer, PostSection } from './styled';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const handlePosts = async () => {

    const result = await getPosts();

    if (result.status != 400) {
      setPosts(result.response);
    }
  }


  useEffect(() => {
    handlePosts();

  }, [])
  return (
    <PostsContainer>
      <CarouselComponent/>
      <div>
        <TitleSection>Guias e posts</TitleSection>
      </div>
      <PostSection>
        {
          posts.map((post, index) => {     
              return (
                <PostComponent post={post} key={post.id} index={index} />
              )
          })
        }
      </PostSection>
    </PostsContainer>


  )
}

export default Posts