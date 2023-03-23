import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/httpRequest';
import Card from './Card/Card';
import { LayoutCardContainer, LayoutCardDiv, TitleSection } from './style';

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
        <TitleSection>Explorar</TitleSection>
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
        <TitleSection>Ver todos</TitleSection>
    </LayoutCardContainer>
  )
}

export default LayoutCard;