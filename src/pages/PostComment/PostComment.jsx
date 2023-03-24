import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCommentsById, getPostById, getUsersById } from '../../services/httpRequest';

const PostCommentPage = () => {

  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);
  
  const handleRequest = async () => {
    
    const content = await getPostById(postId)
    setPost(content.response);
    
    const userData = await getUsersById(content.response.userId);
    setUser(userData.response);
    
    const commentsData = await getCommentsById(postId);
    setComments(commentsData);
    
    console.log('post', post)
    console.log('user', user)
    console.log('comments', comments)
  }

  useEffect(() => {
    handleRequest();
  }, [])

  return (
    <div>
    </div>
  )
}

export default PostCommentPage