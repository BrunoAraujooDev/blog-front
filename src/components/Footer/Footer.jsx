import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'
import { FooterContainer, FooterItemLink, FooterList } from './styled'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <li>
          <FooterItemLink href="https://www.instagram.com/" target='_blank'>
            <InstagramLogo size={40} weight="bold" />
          </FooterItemLink>
        </li>
        <li>
          <FooterItemLink href="https://twitter.com/" target='_blank'>
            <TwitterLogo size={40} weight="bold" />
          </FooterItemLink>
        </li>
        <li>
          <FooterItemLink href="https://www.facebook.com/" target='_blank'>
            <FacebookLogo size={40} weight="bold" />
          </FooterItemLink>
        </li>
      </FooterList>
    </FooterContainer>
  )
}

export default Footer