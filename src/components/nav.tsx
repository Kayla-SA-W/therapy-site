import React from 'react';
import Logo from '../images/logo.png'
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
import '@fontsource/libre-caslon-text';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Libre Caslon Text', sans-serif;
}
`

const Container = styled.div`
    width: 80%;
    justify-self: center;
    @media screen and (max-width: 540px){
        width: 100%;
     }
`

const Links = styled.div`
display: flex;
justify-content: space-evenly;
> a {
    color: #9E9E9E;
    text-decoration: none;
    font-size: 25px;
}
> a:hover {
    color: black;
}
> a:active {
    color: black;
}
@media screen and (max-width: 540px){
    > a {
        font-size: 15px;
    }
 }
`;

const Hr = styled.hr`
    width: 100%;
`

export const Nav = () => (
    <Container>
        <GlobalStyle />
        <img src={Logo} style={{width: '100%'}}/>
        <Hr/>
        <Links>
            <Link to='/'>Home</Link>
            <Link to='/#about'>About</Link>
            <Link to='/approach#approach'>My Approach</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='#contact'>Contact</Link>
        </Links>
        <Hr/>
    </Container>
)