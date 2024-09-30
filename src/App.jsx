import styled from "styled-components";
import { useEffect } from "react";

import homebg from './assets/bg/bg-home.webp';
import logo from './assets/bg/bg-coc.webp'

export default function App() {

  useEffect(() => {
    console.log(homebg);
  }, []);

  return (
    <>
      <Container>
        <img src={logo} alt="logo" draggable="false" />
      </Container>
    </>
  );
}

const Container = styled.div`

  width: 100%;
  height: 80dvh;
  background-image: url(${homebg});
  background-repeat: no-repeat;
  color: white;
  position: relative;

  img{
    position: absolute;
    width: 200px;
    height: 100px;
    
  }

  @media only screen and (max-width:700px){
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
