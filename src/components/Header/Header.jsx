import React, { useEffect, useState } from 'react'
import whiteLogo from '../../assets/blog-logo-white.svg';
import darkLogo from '../../assets/blog-logo-dark.svg';
import { HeaderContainer, HeaderList, HeaderListItems, LogoImg } from './style';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const [position, setPosition] = useState(window.pageYOffset);
    const navigate = useNavigate();

    let path = window.location.pathname;
    
    
    const changeHeaderBackground = () => {
      
      setPosition(window.pageYOffset); 
      let header = document.getElementById('header');
      
      document.addEventListener('scroll', changeHeaderBackground);
            if(path.includes("/post") ){
              header.style.backgroundColor = "#9c6644";
            }else if ( position <= 570 ) {
              header.style.backgroundColor = "transparent";
            } else {
              header.style.backgroundColor = "#9c6644";
            }   
            
          }
          
    useEffect(() =>{
        changeHeaderBackground();
    }, [position])

  return (
    <HeaderContainer id='header' onScroll={changeHeaderBackground}>
        <LogoImg  src={whiteLogo } alt='Logo fictício do blog de viagens' onClick={() => navigate('/')}/>
        <HeaderList>
            <HeaderListItems><a href="/">Início</a></HeaderListItems>
            <HeaderListItems><a href="/posts">Postagens</a></HeaderListItems>
        </HeaderList>
    </HeaderContainer>
  )
}
