import React from 'react';
import Container from '../Container/Container';
import {dataInfo} from '../../data/dataStore';


const Info = () => (
  <Container>
    <h2>{dataInfo.title}</h2>
    <img src={dataInfo.image}></img>
    <p>{dataInfo.content}</p>
  </Container>
);

export default Info;