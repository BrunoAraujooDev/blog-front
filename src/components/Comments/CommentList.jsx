import { ChatsCircle } from 'phosphor-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CommentItem from './CommentItem/CommentItem'
import { SpanItem } from './CommentItem/style'
import { CommentsContainer, CommentsTitle, FormButton, FormComment, FormDiv, FormError, FormTitle } from './style'

const CommentList = ({ comments, day, month }) => {

    const [dataComments, setDataComments] = useState([]);
    const [hasName, setHasName] = useState(false);
    const [hasBody, setHasBody] = useState(false);
    const [hasEmail, setHasEmail] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const body = e.target[2].value;
        
        const result = validateData(name, body, email);
        
        if(result){
            addComment(name, body, email);
            
            e.target.reset();
        }

        
    }

    const addComment = (name, body, email) => {
        const newComment = {
            id: Math.random(),
            name: name,
            body: body,
            postId: comments[0].postId,
            email: email
        }

        setDataComments((state) => [...state, newComment]);
    }

    const validateData = (name, body, email) => {

        const nameValidate = name.length >= 2;
        const emailValidate = email.includes('@') && email.length >= 6;
        const bodyValidate = body.length >= 5 && body.length < 151;

        let isValidated = nameValidate && emailValidate && bodyValidate;

        if(nameValidate){
            setHasName(false);
        }else {
            setHasName(true);
        }

        if(emailValidate){
            setHasEmail(false);
        }else {
            setHasEmail(true);
        }

        if(bodyValidate){
            setHasBody(false);
        } else {
            setHasBody(true);
        }

        return isValidated;
    }

    const createDataComment = () => {

        setDataComments([...comments]);
    }

    useEffect(() => {
        createDataComment();
    }, [comments])

    return (
        <CommentsContainer>
            <CommentsTitle><ChatsCircle size={32} weight={'bold'} />{dataComments.length} Comentários</CommentsTitle>

            <ul>
                {
                    dataComments.map(comment => {
                        return (
                            <CommentItem comment={comment} key={comment.id} day={day} month={month}/>
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
                    {hasName && <FormError>O nome é obrigatório!</FormError>}
                </FormDiv>
                <FormDiv>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" id="email" minLength={6} />
                    {hasEmail && <FormError>O e-mail é obrigatório!</FormError>}
                </FormDiv>
                <FormDiv>
                    <label htmlFor="comment">
                        Comentário
                    </label>
                    <textarea name="" id="comment"  rows="5" maxLength={150} minLength={5} placeholder="Máximo de 150 caracteres">
                    </textarea>
                    {hasBody && <FormError>O comentário é obrigatório!</FormError>}
                </FormDiv>
                <FormButton>
                    Publicar comentário
                </FormButton>
            </FormComment>
        </CommentsContainer>
    )
}

export default CommentList