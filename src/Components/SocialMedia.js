import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default class SocialMedia extends Component {
  state ={
    socialCon : []
  }
  
  componentDidMount(){
    axios.get('Data/Data.json').then(res =>{
      this.setState({ socialCon : res.data.social})
    })
  }
  render() {
    const {socialCon} = this.state;
    const socialSec = socialCon.map((soc)=>{
      return(
        <SocialBox key={soc.id} className='flex-full' style={{ backgroundColor: soc.bgColor}}>
          <div className='flex-full'>
            <i className={soc.icon}></i>
            <div>
              <p> {soc.title}</p>
              <p> {soc.body}</p>
            </div>
            

          </div>
        </SocialBox>
      )
    })

    return (
      <Section>
        {socialSec}
      </Section>
    )
  }
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3 , 1fr );
  margin-top: -70px;
  gap: 0px;
  @media(max-width: 768px){
    grid-template-columns: repeat(2 , 1fr );

  }
  @media(max-width: 320px){
    grid-template-columns: repeat(1 , 1fr );

  }
`
const SocialBox = styled.section`
  justify-content: center;
  height: 200px;

  div{
    gap: 10px;
    
    i{
      background-color: white;
      padding: 7px;
    }

    div{
      color: white;
    }
  }

  @media(max-width: 768px){
    min-height: 100%;

  }
`
