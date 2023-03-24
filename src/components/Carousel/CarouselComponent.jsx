import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel';
import { CarouselImg, CarouselText } from './style';

const CarouselComponent = () => {

    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item >
                <CarouselImg
                    src="https://wallpapercave.com/wp/wp3704711.jpg"
                    alt="Lago com água clara do Canadá no inverno"
                />
                <Carousel.Caption>
                    <CarouselText>Calgary - Canadá</CarouselText>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImg
                    src="https://images2.alphacoders.com/528/thumb-1920-528327.jpg"
                    alt="Imagem de Paris mostrando a torre com sol no fim da tarde"
                />

                <Carousel.Caption>
                    <CarouselText>Paris - França</CarouselText>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImg
                    src="https://wallpaperaccess.com/full/342608.jpg"
                    alt="Deserto africano"
                />

                <Carousel.Caption>
                    <CarouselText> Parque Nacional Kruger - África do Sul</CarouselText>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent