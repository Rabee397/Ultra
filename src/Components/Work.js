import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class Work extends Component {
  state = {
    works : []
  }

  componentDidMount(){
    axios.get('Data/Data.json').then(res => {
      this.setState({ works : res.data.works})
    })
  }
  render() {
    const {works} = this.state;
    const workBox = works.map((workItem)=>{
      return(
        
          <Box className='flex-full' key={workItem.id}>
            <i className={workItem.icon_name}></i>
            <h3> {workItem.title}</h3>
            <hr />
            <p> {workItem.body} </p>
          </Box>
        
        
      )
      
    })

    return (
      <section className='main-padd' id='work'>
        <h1> My Work</h1>
        <Container className='flex-full'>
            {workBox}
        </Container>
      </section>
    )
  }
}

const Container = styled.div`
  margin-top: 40px;

  &.flex-full{
    gap: 30px;
    flex-wrap: wrap;
  }

  @media(max-width: 785px){
    &.flex-full{
      justify-content: center;
    }
  }
 
`
const Box = styled.div`
  border: 1px solid rgb(100 , 100 , 100);
  text-align: center;
  flex-direction: column;
  gap: 25px;
  padding: 30px 0;
  width: 300px; 
  
  h3{
    color: orange;
  }

  hr , p{
    width: 60%;
  }

  @media(max-width: 375px){
    width: 90%;
  }
`