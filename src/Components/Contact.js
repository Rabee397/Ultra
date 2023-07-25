import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <React.Fragment>
      <Section className='flex-full'>
        <h2> Drop Me A Line</h2>
        <Form className='flex-full'>
          <div className='flex-full'>
            <input type='text' placeholder='Your Name'  />
            <input type='email' placeholder='Your Email'  />
          </div>
          <input type='text' placeholder='Your Subject' className='sub' />
          <textarea placeholder='Your Message' rows={9} />
          <button> Send Message</button>
        </Form>
      </Section>
      <div>
        <Devloped> Devloped by Rabee 2023 </Devloped>
      </div>
      
    </React.Fragment>
    
    
  )
}

const Section = styled.section`
  height: calc(100vh - 80px);
  
  &.flex-full{
    flex-direction: column;
    justify-content: center;
  }  
  
  h2{
    position: absolute;
    top: 15%;
    text-align: center;
    
  }
`
const Form = styled.form`
  justify-content: center;
  justify-self: center;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  margin: 0 auto 0 auto;

  div , input , textarea{
    align-self: start;
    width: 100%;
  }

  div input {
    width: 49%;
  }

  input , textarea{
    padding: 8px;
  }
  
  textarea{
    resize: none;
  }

  button{
    padding: 7px;
    cursor: pointer;
  }

  @media(max-width: 375px){
    width: 80%
  }
  @media(max-width: 200px){
    width: 90%
  }
`
const Devloped = styled.p`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translatex(-50%);

  @media(max-width: 320px){
    font-size: 0.8rem;
  }
`
export default Contact