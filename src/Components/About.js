import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <Section id='about'>
     <div></div>
    </Section>
  )
}

const Section = styled.section`
  height: 60vh;

  div{
    background : url('/images/about-bg.jpg') fixed center;
    background-size: cover;
    height: 100%;
  }
  
  
`
export default About;