import { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from './components/navbar'

import homebg from './assets/bg/bg-home.webp';
import logo from './assets/bg/bg-coc.webp'

export default function App() {

  const [playerSearch, setPlayerSearch] = useState([])

  function searchPlayer() {
    try {

      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchPlayer()
  }, [playerSearch])

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <img src={logo} alt="logo" draggable="false" />
      </Container>
      <SearchPlayer>
        <h2>Search Player</h2>
        <div className="input-container">
          <input type="text" placeholder="Search name or tag..." onChange={(e) => setPlayerSearch(e.target.value)} />
        </div>
        <div className="card">
          <div className="player">Not Work</div>
        </div>
      </SearchPlayer>
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

const SearchPlayer = styled.div`
  background-color: #181818; 
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 30px;
  width: 50%;
  height: 300px;
  position: relative;

  h2{
    padding-top: 10px;
    color: white;
    text-align: center;
  }

  .input-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input{
    margin: 0 auto;
    margin-top: 10px;
    width: 65%;
    height: 50px;
    padding: 0 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #3d3d3d;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  .card{
    margin: 0 auto;
    margin-top: 15px;
    width: 90%;
    height: 55%;
    overflow: auto;
  }

  .card .player{
    background-color: #3d3d3d;
    margin: 0 auto;
    margin-top: 15px;
    width: 80%;
    height: 70px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

@media only screen and (max-width:700px){
  width: 90%;
}

`