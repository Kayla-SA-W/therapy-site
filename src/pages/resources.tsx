import React from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { Contact } from '../components/contact';
import { Nav } from '../components/nav';
import Health from '../images/mental-health.png';
import { Head } from './404';

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Raleway Variable', sans-serif;
    line-height: 30px;
}
li{
    margin: 20px 0;
  }
  a{
    color: black;
  }
`


const Box = styled.div`
    display: grid;
`;

const Container = styled.div`
    justify-self: center;
    width: 80%;
    margin-bottom: 50px;
    @media screen and (max-width: 540px){
        width: 95%;
      }
`
const Img = styled.img`
    width: 100%;
`

const Heading = styled.p`
font-size: 20px;
text-transform: uppercase;
margin: 60px 0 20px; 
`

const Links = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

const Resources = () => (
    <Box>
        <GlobalStyle />
        <Nav />
        <Container>
            <Img src={Health} />
            <Heading>THERAPIST DIRECTORIES</Heading>
            <Links>
            <a href='https://nqttcn.com/en/' target='_blank'>National Queer and Trans Therapists of Color Network (NQTTCN)</a>
            <a href='https://www.inclusivetherapists.com/' target='_blank'>Inclusive Therapists</a>
            <a href='https://www.asianmhc.org/' target="_blank">Asian Mental Health Collective</a>
            <a href='https://www.psychologytoday.com/intl' target="_blank">Psychology Today</a>
            </Links>
            <Heading>Tips for finding a therapist</Heading>
            <ul>
                <li>Write a couple of goals you have for therapy before scheduling a consultation. </li>
                <li>If you're planning to use your health insurance, learn how many sessions you are allowed to have and what the copay and deductible is. If you are planning to pay out of pocket, ask if they offer sliding scale/reduced rate slots. </li>
                <li>Check their website every few months to see if they have any openings for new clients. </li>
                <li>Consult calls are free, intake sessions are usually not! </li>
            </ul>
            <Heading>Warmline & Hotlines</Heading>
            <p>A warmline is a 24/7 volunteer peer-run hotline that offers emotional support pre-crisis.</p>
            <a href="https://www.nami.org/NAMI/media/NAMI-Media/BlogImageArchive/2020/NAMI-National-HelpLine-WarmLine-Directory-3-11-20.pdf" target='_blank'>
                NAMI National Warmline Directory
            </a>
            <p>
                A hotline is a 24/7 service staffed by trained professionals to address a mental health crisis and make immediate connections to aid <br />
                Trans Lifeline: 877-565-8860 <br />
                GLBT National Hotline: 888-843-4564 <br />
                National Coalition Of Anti-Violence Programs: 212-714-1141 (English And Spanish)
            </p>
        </Container>
        <Contact />
    </Box>
)

export default Resources