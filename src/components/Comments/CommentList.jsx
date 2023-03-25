import { ChatsCircle } from 'phosphor-react'
import React from 'react'
import { useState } from 'react'
import CommentItem from './CommentItem/CommentItem'
import { CommentsContainer, CommentsTitle, FormButton, FormComment, FormDiv, FormTitle } from './style'

const CommentList = ({ comments }) => {
    console.log('comments', comments)

    const [dataComments, setDataComments] = useState([...comments]);
    console.log('dataComments', dataComments)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <CommentsContainer>
            <CommentsTitle><ChatsCircle size={32} weight={'bold'} />{comments.length} Comentários</CommentsTitle>

            <ul>
                {
                    comments.map(comment => {
                        return (
                            <CommentItem comment={comment} key={comment.id} />
                        )
                    })
                }
            </ul>

            <FormComment onSubmit={handleSubmit}>
                <FormTitle>Deixe um comentário</FormTitle>
                <FormDiv>
                    <label htmlFor="user">
                        Nome
                    </label>
                    <input type="text" id="user" minLength={2} />
                </FormDiv>
                <FormDiv>
                    <label htmlFor="comment">
                        Comentário
                    </label>
                    <textarea name="" id="comment"  rows="5" maxLength={150} minLength={5} placeholder="Máximo de 150 caracteres">
                    </textarea>
                </FormDiv>
                <FormButton>
                    Publicar comentário
                </FormButton>
            </FormComment>
        </CommentsContainer>
    )
}

export default CommentList