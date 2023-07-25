import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class Profile extends Component {

  state = {
    profile : [],
  }

  componentDidMount(){
    axios.get('Data/Data.json').then(res =>  {
      this.setState({
        profile : res.data.profile ,
      })
    })
  }

  render() {
  
    const {profile} = this.state;
    const skillsSec = profile.map((skill)=> {
      return(
        <div key={skill.id}>
            <div className='flex-full'>
              <h3> {skill.skill} </h3>
              <span> {skill.degree}% </span>
            </div>
            <hr style={{ width : `${skill.degree}%` }}/>
        </div>
      )
    })

    return (
      <Section className='flex-full main-padd'>
        <ProfileInfo>
          <h2> My Profile</h2>
          <InfoContainer>
            <div className='flex-full'>
              <h3> Name </h3>
              <span> Rabee Khalifa</span>
            </div>
            <div className='flex-full'>
              <h3> Birthday </h3>
              <span> 1997/29/11</span>
            </div>
            <div className='flex-full'>
              <h3> Address </h3>
              <span> Khartoum</span>
            </div>
            <div className='flex-full'>
              <h3> Phone </h3>
              <span> +249113583477 </span>
            </div>
            <div className='flex-full email'>
              <h3> Email </h3>
              <span > rabie201097_1_11@hotmail.com</span>
            </div>
          </InfoContainer>
        </ProfileInfo>
        <Skills>
          <h2> Some Skills</h2>
          <SkillsContainer>
            <p> lorem nmj uio ytr ewq frty hjuu ygbb vfrt werq gtyu cvbbjh mjkl iop ikn hju yghjk jhyui qwdfdg</p>
            
            {skillsSec}
          </SkillsContainer>
        </Skills>
      </Section>
    )
  }
}

const Section = styled.section`
  &.flex-full{
    gap: 20px;
    flex-wrap: wrap;
  }

  @media(max-width: 768px){
    flex-direction: column;
  }
`
const ProfileInfo  = styled.div`
  width: 50%;
  
  h2{
    
  }

  @media(max-width: 768px){
    width: 100%;
  }  
`
const InfoContainer  = styled.div`
  margin-top:57px;
 
  div{
    margin-top: 20px;

    @media(max-width: 240px){
      {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
  }
  .email{
    @media(max-width: 400px){
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    @media(max-width: 300px){
      span{
        width: 95%;
        word-break: break-word;
      }
    }
  }
  
`
const Skills  = styled.div`
  width: 40%;
  
  @media(max-width: 768px){
    width: 100%;
  }
`
const SkillsContainer  = styled.div`
  p{
    margin: 30px 0px;
    width: 80%;
  }

  div{
    margin-top: 20px;

    hr{
      margin-top: 5px;
      border-color: orange;
    }
  }

  @media(max-width: 330px){
    p{
      width: 90%;
    }
  }
`