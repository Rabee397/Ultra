import {React , useEffect , useState} from 'react';

import {Link} from 'react-router-dom';
import{Link as LinkScroll} from 'react-scroll';
import styled from 'styled-components';

const Navbar = ()=> {
  
  const[isMob , setIsMob] = useState(false);
  //  change header background-color when scrolling  //
  useEffect(()=>{
    document.addEventListener("scroll" , ()=>{
      const header = document.querySelector(".header");
      if( window.scrollY > 0){
        header.style.backgroundColor = "rgb( 200 , 200 , 200)";
      }else{
        header.style.backgroundColor = "initial";
      }
    })
  })
  return (
    <Header className='flex-full main-padd header'>
        <h1> ULTRA</h1>
        <Nav  className={ isMob ? "nav-mob" : "navbar flex-full" }>
            <Link to='/Rabee397.github.io/Ultra'> Home </Link>
            <LinkScroll activeClass="active" className='linkscroll' to="work" spy={true} smooth={true} offset={-200} duration={200} >
               Work  
            </LinkScroll>   
            <LinkScroll activeClass="active" className='linkscroll' to="portfolio" spy={true} smooth={true} offset={-100} duration={200} >
               Porfolio  
            </LinkScroll>
            <LinkScroll activeClass="active" className='linkscroll' to="about" spy={true} smooth={true} offset={-200} duration={200} >
               About  
            </LinkScroll>  
            <Link > Resume </Link>
            <Link to='/contact' > Contact </Link>
        </Nav>
        <Mob>
          <i className={ isMob ? "fa fa-times" : "fa fa-bars"} onClick={ ()=> setIsMob(!isMob)}></i>
        </Mob>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgb(150 , 150 ,150);
  height: 70px;
  z-index: 199;
`
const Nav = styled.nav`
  {
    gap: 30px;
  }
  
  .linkscroll{
    cursor: pointer;
  }
  a{
    color: black;
  }
  a:hover{
    color: orange;
  }
  a.active{
    color: orange;
  }
  @media(max-width: 768px){
    @keyframes fade{
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }

    &.nav-mob{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgb(80 , 80 , 80);
      width: 100%;
      height: calc(100vh - 70px);
      position: absolute;
      top: 70px;
      left:0;
      transition: 0.3s;
      animation:  fade 0.5s;

      a{
        color: white;
      }
    }
    &.navbar{
      display: none;
    }
  }
`
const Mob = styled.div`
  {
    display: none;
  }

  i{
    cursor: pointer;
  }

  @media(max-width: 768px){
    display: flex;
  }

`
export default Navbar;