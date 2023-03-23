import { ArrowRight } from 'phosphor-react';
import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/httpRequest';
import Card from './Card/Card';
import { ButtonCard, LayoutCardContainer, LayoutCardDiv, TitleSection } from './style';

const LayoutCard = () => {

    const [posts, setPosts] = useState([]);

    const handlePosts = async () => {

        const result = await getPosts();

        if(result.status != 400){
            setPosts(result.response);
        }

        console.log(response);
    }


    useEffect(() => {
        handlePosts();

    }, [])

  return (
    <LayoutCardContainer>
        <TitleSection>Novos posts</TitleSection>
        <LayoutCardDiv>

                {
                    posts.map((post, index) => {
                        
                        if(index <= 3){
                            return (
                                <Card post={post} key={post.id} index={index}/>
                                )
                            }
                        })
                    }
        </LayoutCardDiv>
        <ButtonCard>
            Ver todos 
            <ArrowRight size={32} weight="bold"/>
        </ButtonCard>
    </LayoutCardContainer>
  )
}

export default LayoutCard;