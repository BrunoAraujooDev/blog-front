import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/httpRequest';
import Card from './Card/Card';
import { CardContainer, LayoutCardDiv, TitleSection } from './style';

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
    <CardContainer>
        <TitleSection>Explorar</TitleSection>
        <LayoutCardDiv>

                {
                    posts.map((post) => {
                        return (
                            <Card post={post} key={post.id}/>
                        )
                    })
                }
        </LayoutCardDiv>
    </CardContainer>
  )
}

export default LayoutCard;