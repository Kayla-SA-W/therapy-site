import React from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import { faqMini } from '../data/faq-mini';
import { ReadMore } from './read-more';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Libre Caslon Text', sans-serif;
  color: black;
}
`

const Container = styled.div`
width: 80%;
justify-self: center;
`

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 70px;
@media screen and (max-width: 540px){
    grid-template-columns: 1fr;
    gap: 50px;
 }
`

const Heading = styled.p`
    font-size: 30px;
    @media screen and (max-width: 540px){
        font-size: 20px;
     }
`

const Paragraph = styled.p`
line-height: 30px;
@media screen and (max-width: 540px){
    font-size: 15px;
 }
`

const Hr = styled.hr`
width: 100%;
margin: 50px 0;
`;

export const FAQMini = () => {

    const questions = faqMini.map(({ header, body, url }) => {
        return (
            <div>
                <Heading>{header}</Heading>
                <hr />
                <Paragraph>{body}</Paragraph>
                <ReadMore url={`/faq#${url}`} />
            </div>
        )
    });
    return (
        <Container>
            <GlobalStyle />
            <h4 style={{ fontSize: 40 }}>FAQ</h4>
            <Grid>
                {questions}
            </Grid>
            <Hr />
        </Container>
    )
}