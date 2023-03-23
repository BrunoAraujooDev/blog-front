import React, { useEffect, useState } from 'react'
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
      <TitleSection>Posts</TitleSection>

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