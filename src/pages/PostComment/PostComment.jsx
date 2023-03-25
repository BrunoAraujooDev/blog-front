import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CommentList from '../../components/Comments/CommentList';
import PostDetails from '../../components/PostDetails/PostDetails';
import { getCommentsById, getPostById, getUsersById } from '../../services/httpRequest';
import { PostCommentContainer } from './style';

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
    setComments(commentsData.response);
  }

  useEffect(() => {
    handleRequest();
  }, [])

  return (
    <PostCommentContainer>
      <PostDetails  post={post} user={user}/>
      <CommentList comments={comments}/>
    </PostCommentContainer>
  )
}

export default PostCommentPage