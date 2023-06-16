import React from 'react';
import { styled } from 'styled-components';
import Aj from '../images/aj.png';
import { ReadMore } from './read-more';

const Container = styled.div`
display: grid;
width: 80%;
justify-self: center;
`;

const Hr = styled.hr`
width: 100%;
margin: 50px 0;
`;

const AboutMe = styled.div`
    width: 50%;
    color: black;
    > h4 {
        font-size: 40px;
    }
    > p {
        font-size: 20px;
        line-height: 35px;
        padding-left: 20px;
    }
    @media screen and (max-width: 1024px){
        width: 100%;
        > h4 {
            font-size: 25px;
        }
        > p {
            font-size: 15px;
        }
     }
`;

const Img = styled.img`
    width: 50%;
    @media screen and (max-width: 1024px){
       width: 100%;
     }
`;

const Body = styled.div`
display: flex;
flex-direction: row;
gap: 25px;
@media screen and (max-width: 1024px){
    flex-direction: column-reverse;
 }
`;

export const About = () => (
<Container id='about'>
    <Hr/>
    <Body>
        <AboutMe>
            <h4>
                About Me
            </h4>
            <p>I am AJ Guerrero, a licensed therapist with over 7 years of experience dedicated to building authentic connections with my clients. I've served as a community based clinician in Justice Resource Institute, with a specialized role to work with LGBTQ+ families and youth of color, as an LGBTQ+ Director at Wellesley College and as a clinical intern at the Wheelock College Counseling Center in supporting college students.

I am a butch lesbian, Filipina immigrant, Neurodivergent woman who uses she/her pronouns. Outside of the practice, I am a mama to three adorable cats, cook with my partner and friends, and stay involved with my local women's motorcycle group in volunteering and leading pride parades.</p>
        </AboutMe>
        <Img src={Aj} />
    </Body>
    <ReadMore url='/approach'/>
    <Hr/>
</Container>
);