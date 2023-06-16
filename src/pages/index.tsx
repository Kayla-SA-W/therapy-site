import React from 'react';
import { Nav } from '../components/nav';
import { styled } from 'styled-components';
import { Counseling } from '../components/counseling';
import { About } from '../components/about';
import { FAQMini } from '../components/faq-mini';
import { Contact } from '../components/contact';

const Container = styled.div`
display: grid;
`

const IndexPage = () => {
  return (
    <Container> 
      <Nav/>
      <Counseling/>
      <About />
      <FAQMini/>
      <Contact/>
    </Container>
  )
}

export default IndexPage
