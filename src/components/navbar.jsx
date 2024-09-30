import styled from "styled-components"
import icon from '../assets/supercell_logo.webp'

export default function Navbar() {

    const goToSupercell = () => {
        window.open("https://supercell.com/en/games/clashofclans/")
    }

    return (
        <>
            <Nav>
                <img src={icon} alt="Logo Supercell" onClick={() => goToSupercell()} />
                <div className="list">
                    <div className="nav-list">Player</div>
                    <div className="nav-list">Clans</div>
                    <div className="nav-list">Generator</div>
                    <div className="nav-list">Random Troops</div>
                    <div className="nav-list">About Us</div>
                </div>
            </Nav>
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
`
