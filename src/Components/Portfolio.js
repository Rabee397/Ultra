import React,{Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class Portfolio extends Component {
  state= {
    portfolio : []
  }
  
  componentDidMount(){
    axios.get('Data/Data.json').then(res => {
      this.setState({ portfolio : res.data.portfolio})
    })
  }
  render(){
    const {portfolio} = this.state;
    const portfBoxes = portfolio.map((portfBox)=>{
      return(
        <Box key={portfBox.id}>
          <img src={portfBox.image} alt='portfolio-images' />
          <div className='layer flex-full'>
            <p> Show Image</p>
          </div>
        </Box>
      
      )
    })
    return(
      <section  id='portfolio'>
        <Header> My Portfolio</Header>
        <Container>
          {portfBoxes}
        </Container>
      </section>

    )
  }
}

const Header = styled.h2`
  text-align: center;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat( 4 , 1fr);
  gap: 20px 0;
  margin-top: 40px;

  @media(max-width: 768px){
    grid-template-columns: repeat( 3 , 1fr);
  }
  @media(max-width: 425px){
    grid-template-columns: repeat( 2 , 1fr);
  }
  @media(max-width: 320px){
    grid-template-columns: repeat( 1 , 1fr);
  }
`
const Box = styled.div`
  {
    position: relative;
  }
  img{
    height: 300px;
    width: 100%;
    position: relative;
    transition: 0.3s;
    cursor:pointer;
    display: block;
    
  }
  .layer{
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(255, 166, 0, 0.411);
    justify-content: center;
    display: none;
    p{
      padding: 5px;
      background-color: white;
      cursor: pointer;
    }

    
  }

  &:hover .layer{
    display: flex;
  }
  
`