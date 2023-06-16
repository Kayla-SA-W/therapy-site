import React from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import HandHeart from '../images/hand-holding-heart.jpeg';
import '@fontsource-variable/raleway';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Libre Caslon Text', sans-serif;
}
`

const Container = styled.div`
background-image: url(${HandHeart});
width: 80%;
height: 700px;
background-repeat: no-repeat;
background-size: cover;
justify-self: center;
display: grid;
color: white;
@media screen and (max-width: 540px){
    height: 450px;
    width: 100%;
 }
`

const Border = styled.div`
    border: 1px solid white;
    height: 70%;
    width: 90%;
    align-self: center;
    justify-self: center;
    display: grid;
`;

const H2 = styled.h2`
    font-size: 55px;
    justify-self: center;
    @media screen and (max-width: 540px){
       font-size: 25px;
       margin-bottom: 10px;
     }
`

const H3 = styled.h3`
    font-size: 30px;
    justify-self: center;
    margin-bottom: 0;
    text-align: center;
    width: 90%;
    @media screen and (max-width: 540px){
       font-size: 15px;
     }
`

const Paragaph = styled.p` 
    font-size: 16px; 
    justify-self: center;
    margin: 0;
    text-align: center;
    width: 90%;
    font-family: 'Raleway Variable', sans-serif;
    @media screen and (max-width: 540px){
        font-size: 12px;
      }
`

export const Counseling = () => (
    <Container>
        <GlobalStyle />
        <Border>
            <H2>Chosen Heart Counseling</H2>
            <H3>Affirming psychotherapy holding space for your experiences, strengths, and growth points to have an expansive view of what is possible in life.</H3>
            <Paragaph>You may be in a time full of worry and seeking belonging, it's okay to want genuine connections with others.
Therapy can be a place to heal, to learn, to grow, to transform, and to feel seen.</Paragaph>
        </Border>
    </Container>
)