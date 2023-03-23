import React from 'react'
import { HighlightedSection, MainTopicDiv, TextDiv, TextParagraph, TextTitle, TextButton, TextImg } from './styled'

const PostComponent = ({post, index}) => {
  return (
    <HighlightedSection>
        <MainTopicDiv>
          <TextDiv>
            <TextTitle>{post.title}</TextTitle>
            <TextParagraph>
             {post.body}
            </TextParagraph>
            <TextButton>Ver comentários</TextButton>

          </TextDiv>
          <TextImg src={`https://source.unsplash.com/random/300x130?sign=${index + 50}`} alt="Imagem do Cristo Redentor no fim da tarde" />
        </MainTopicDiv>
      </HighlightedSection>
  )
}

export default PostComponent