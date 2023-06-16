import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    justify-self: center;
    width: 80%;
    margin-bottom: 50px;
`

const H6 = styled.h6`
    font-size: 40px;
    margin: 0 0 50px;
`;

const Name = styled.p`
    font-size: 25px;
    font-family: 'Raleway Variable', sans-serif;
`

export const Contact = () => (
    <Container id='contact'>
        <H6>Contact Me</H6>
        <Name>AJ Guerrero, LMHC</Name>
        <p> Email: aj@chosenheartcounseling.com <br/>Phone: 857.371.5101</p>
    </Container>
)