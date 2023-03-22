import React, { useEffect, useState } from 'react'
import whiteLogo from '../../assets/blog-logo-white.svg';
import darkLogo from '../../assets/blog-logo-dark.svg';
import { HeaderContainer, HeaderList, HeaderListItems, LogoImg } from './style';

export const Header = () => {

    const [position, setPosition] = useState(0);

    const changeHeaderBackground = () => {

        let header = document.getElementById('header');

        document.addEventListener('scroll', function() {
            setPosition(window.pageYOffset); 
            
            if ( position <= 680 ) {
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
        <LogoImg  src={position >  680 ? darkLogo : whiteLogo} alt='Logo fictício do blog de viagens'/>
        <HeaderList>
            <HeaderListItems><a href="">Início</a></HeaderListItems>
            <HeaderListItems><a href="">Sobre</a></HeaderListItems>
            <HeaderListItems><a href="">Explorar</a></HeaderListItems>
        </HeaderList>
    </HeaderContainer>
  )
}
