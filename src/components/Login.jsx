import React from 'react';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';
export default function Login() {
    const handleClick = () => {
        const clientId = '07808d6473724f50abc34cef98dfdafe';
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-email", 
            "user-read-private",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUrl)}&scope=${encodeURIComponent(scope.join(" "))}&response_type=token&show_dialog=true`;
    };
    return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png" alt="Spotify" />
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    );
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color:#1db954;
  gap:5rem;

  img{
    height: 20vh;
  }
  button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size:1.4rem;
    cursor: pointer;
 }
`;