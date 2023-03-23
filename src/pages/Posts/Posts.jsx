import React, { useEffect, useState } from 'react'
import PostComponent from '../../components/Post/post';
import { getPosts } from '../../services/httpRequest';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const handlePosts = async () => {

    const result = await getPosts();

    if (result.status != 400) {
      setPosts(result.response);
    }

    console.log(response);
  }


  useEffect(() => {
    handlePosts();

  }, [])
  return (
    <div>
      <h3>Posts</h3>

      <section>
        {
          posts.map((post, index) => {

            if (index <= 3) {
              return (
                <PostComponent post={post} key={post.id} index={index} />
              )
            }
          })
        }
      </section>
    </div>


  )
}

export default Posts