import React from 'react';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore.js';
import Hero from '../Hero/Hero.js';


class FAQ extends React.Component {
  render() {
    return (
      <Container>
        <Hero titleText={settings.faq.title} image={settings.info.image}/>
        <h2>{settings.faq.subtitle}</h2>
        <p>{settings.faq.description}</p>
      </Container>    
    );
  }
}

export default FAQ;