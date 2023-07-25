import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterSec className='flex-full'>
      <p> Developed by Rabee 2023 </p>
    </FooterSec>
  )
}

const FooterSec = styled.footer`
  justify-content: center;
  padding: 10px;

  @media(max-width: 768px){
    margin-top: 70px;
  }
  @media(max-width: 204px){
    font-size: 0.8rem;
  }
`
export default Footer;