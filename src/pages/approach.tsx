import React from 'react';
import { styled } from 'styled-components';
import Lake from '../images/lake.png';
import { Contact } from '../components/contact';
import { Nav } from '../components/nav';


const Box = styled.div`
    display: grid;
`

const Container = styled.div`
    justify-self: center;
    width: 80%;
    margin-bottom: 50px;
    @media screen and (max-width: 540px){
        width: 100%;
      }
`

const Img = styled.img`
    width: 100%;
`

const H2 = styled.h2`
    font-size: 40px;
    @media screen and (max-width: 540px){
        font-size: 25px;
      }
`

const Paragaph = styled.p`
    margin-left: 25px;
    font-size: 18px;
    font-family: 'Raleway Variable', sans-serif;
    line-height: 50px;
    @media screen and (max-width: 540px){
        font-size: 14px;
      }
`

const Hr = styled.hr`
    margin-top: 70px;
    margin-bottom: 30px;
`

const Approach = () => (
    <Box>
        <Nav />
        <Container id='approach'>
            <Img src={Lake} />
            <H2>My Approach</H2>
            <Paragaph>My clinical training focused on providing trauma-informed culturally conscious therapy to clients who come from many walks of life and intersecting identities, while utilizing kindness, metaphors and a light sense of humor in my therapy sessions. I’ve worked in the mental health field since 2016, and am professionally licensed in Massachusetts (Licensed Mental Health Counselor #12054). I use different counseling modalities based on clients presented needs such as evidence-based approach Cognitive Behavioral Therapy (CBT), Psychodynamic, Person Centered, Multicultural, Solution Focused and Strength-Based Therapy.</Paragaph>
            <Hr />
        </Container>
        <Contact />
    </Box>
);

export default Approach;