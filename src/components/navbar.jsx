import 'bootstrap-icons/font/bootstrap-icons.css';

import styled, { keyframes } from "styled-components"
import icon from '../assets/supercell_logo.webp'
import { useState } from 'react';

export default function Navbar() {

    const goToSupercell = () => {
        window.open("https://supercell.com/en/games/clashofclans/")
    }

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <Nav>
                <img src={icon} alt="Logo Supercell" onClick={() => goToSupercell()} />
                <div className="list">
                    <div className="nav-list">Player</div>
                    <div className="nav-list">Clan</div>
                    <div className="nav-list">Generator</div>
                    <div className="nav-list">Random Troops</div>
                    <div className="nav-list">About Us</div>
                </div>
                <div className="menu" onClick={() => setToggle(!toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
            </Nav>
            { toggle && (<DropNav className={` ${toggle ? 'toggle' : ''} `}>
                <div className="list">
                    <div className="nav-list">Player</div>
                    <div className="nav-list">Clan</div>
                    <div className="nav-list">Generator</div>
                    <div className="nav-list">Random Troops</div>
                    <div className="nav-list">About Us</div>
                </div>
            </DropNav>)}
        </>
    )
}

const Nav = styled.div`
    z-index: 3;
    background-color: black;
    position: fixed;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 15px;
    border-radius: 30px;
    width: 60%;
    height: 70px;

    display: flex;
    align-items: center;

    img{
        width: 40px;
        height: 40px;
        margin-left: 30px;
        cursor: pointer;
    }

    .list{
        display: flex;
        width: 80%;
        margin-left: 30px;
        justify-content: space-around;
        color: grey;
    }

    .nav-list{
        cursor: pointer;
        transition: color 0.2s;
    }

    .nav-list:hover{
        color: white;
    }

    .menu{
        display: none;
    }

    @media only screen and (max-width:700px){
        width: 80%;
        justify-content: space-between;

        .list{
            display: none;
        }

        .menu{
            display: block;
            margin-right: 15px;
            margin-top: 10px;
        }

        .menu .icon{
            color: white;
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
    }
`
const appear = keyframes`
        from { height: 0px; opacity: 0; }
        to { height: 350px; opacity: 1; }
    `

const DropNav = styled.div`
        z-index: 2;
        position: fixed;
        left: 0;
        right: 0;
        margin: auto;
        margin-top: 55px;
        background-color: black;
        border-radius: 0 20px 20px;
        width: 80%;
        height: 350px;
        display: none;

        .list{
            color: white;
            font-size: 20px;
            margin-top: 50px;
            height: 70%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-left: 10px;
        }

        &.toggle{
            animation: ${appear} 0.2s linear;
        }

        @media only screen and (max-width: 700px){
            display: block;
        }
    `