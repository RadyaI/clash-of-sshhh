import { useEffect } from "react";
import styled from "styled-components";
 
import Navbar from './components/navbar'

import homebg from './assets/bg/bg-home.webp';
import logo from './assets/bg/bg-coc.webp'

export default function App() {

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <img src={logo} alt="logo" draggable="false" />
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 80dvh;
  background-image: url(${homebg});
  background-repeat: no-repeat;
  color: white;
  position: relative;

  img{
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 100px;
    width: 300px;
    height: 150px;
  }

  @media only screen and (max-width:700px){
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
