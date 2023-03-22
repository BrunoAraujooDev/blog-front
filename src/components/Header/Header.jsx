import React, { useEffect, useState } from 'react'
import darkLogo from '../../assets/blog-logo-dark.svg';
import { HeaderContainer, HeaderList, HeaderListItems, LogoImg } from './style';

export const Header = () => {

    const [position, setPosition] = useState(0);

    const changeHeaderBackground = () => {

        let header = document.getElementById('header');

        document.addEventListener('scroll', function() {
            setPosition(window.pageYOffset); 
            
            if ( position <= 200  ) {
              header.style.backgroundColor = "transparent";
            } else {
              header.style.backgroundColor = "#00000061";
            }   
            
          });
    }

    useEffect(() =>{
        changeHeaderBackground();
    }, [position])

  return (
    <HeaderContainer id='header'>
        <LogoImg  src={darkLogo} alt='Logo fictício do blog de viagens'/>
        <HeaderList>
            <HeaderListItems><a href="#">Início</a></HeaderListItems>
            <HeaderListItems><a href="#p1">Sobre</a></HeaderListItems>
            <HeaderListItems><a href="#p2">Explorar</a></HeaderListItems>
        </HeaderList>
    </HeaderContainer>
  )
}
