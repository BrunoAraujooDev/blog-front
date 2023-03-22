import React from 'react'
import { Header } from '../../components/Header/Header'
import { BannerSection, HighlightedSection, HomeMain, MainTopicDiv, TextButton, TextDiv, TextImg, TextParagraph, TextTitle } from './style'

export const Home = () => {
  return (
    <HomeMain>
        <Header/>

        <BannerSection>
          <h1>Um blog para quem é apaixonado por viagem.</h1>
          <p>Quem sabe você não acha seu próximo destino aqui?</p>
        </BannerSection>

        <HighlightedSection>
          <MainTopicDiv>
            <TextDiv>
              <TextTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextTitle>
              <TextParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </TextParagraph>
              <TextButton>Ver mais</TextButton>

            </TextDiv>
            <TextImg src="https://c4.wallpaperflare.com/wallpaper/428/376/859/brazil-christ-cristo-hills-wallpaper-preview.jpg" alt="Imagem do Cristo Redentor no fim da tarde" />
          </MainTopicDiv>
        </HighlightedSection>
    </HomeMain>
  )
}
