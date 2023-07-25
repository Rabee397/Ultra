import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';

function Home() {
  return (
    <Main className='flex-full'>
      <Container>
        <h1> Ultra</h1>
        <MainInfo>
          <h2> 
            <Typed 
              strings={[
                  " Designer",
                  " Photographer",
              ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                       
            />
          </h2>
          <p> iam a professional <span> Photographer & Designer </span>  who take impressive view and images , let us work together
              ,thank you
          </p>
          <button> Let's Begin</button>
        </MainInfo>
      </Container>
    </Main>
  )
}

const Main = styled.main`
  justify-content: center;
  text-align: center;
  margin-top: 70px;
  background-image: url(/images/home-bg.jpg);
  background-size: cover;
  background-position: center;
  height: 80vh;
`
const Container = styled.div`
  h1{
    margin-bottom: 40px;
    font-size: 300%;
  }
`
const MainInfo = styled.div`
  h2{
    color: orange;
  }

  p{
    margin: 20px auto;
    color: rgb( 100 , 100 , 100);
    width: 80%;
  }

  p span{
    color: black;
    
  }

  button{
    background-color: orange;
    color: white;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover{
    color: orange;
    background-color: transparent;
  }
`

export default Home