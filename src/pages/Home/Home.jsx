import React from 'react'
import { useNavigate } from 'react-router-dom'
import LayoutCard from '../../components/LayoutCards/LayoutCard'
import { BannerSection, HighlightedSection, HomeMain, MainTopicDiv, TextButton, TextDiv, TextImg, TextParagraph, TextTitle } from './style'

export const Home = () => {

  const navigate = useNavigate();

  return (
    <HomeMain>

      <BannerSection>
        <h1>Um blog para quem é apaixonado por viagem.</h1>
        <p>Quem sabe você não acha seu próximo destino aqui?</p>
      </BannerSection>

      <HighlightedSection>
        <MainTopicDiv>
          <TextDiv>
            <TextTitle>Somos apaixonados por viagens</TextTitle>
            <TextParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus et eros elit. Donec sit amet lobortis massa. 
              Sed et ullamcorper massa. Nam accumsan, libero non facilisis posuere, mauris sapien bibendum diam, vitae bibendum velit risus vitae nisl. 
            </TextParagraph>
            <TextButton onClick={() => navigate('/posts/')}>Ver todos</TextButton>

          </TextDiv>
          <TextImg src="https://c4.wallpaperflare.com/wallpaper/428/376/859/brazil-christ-cristo-hills-wallpaper-preview.jpg" alt="Imagem do Cristo Redentor no fim da tarde" />
        </MainTopicDiv>
      </HighlightedSection>

      <LayoutCard/>
    </HomeMain>
  )
}
