import React from 'react';
import styled from 'styled-components';

// z-index to the max, bro.
const StyledBroWord = styled.h1`
  font-size: 3em;
  font-family: 'Titan One', cursive;
  background: rgba(0,0,0,.1);
  margin-top: 5%;
  color: #ffd468;
  overflow: auto;
  z-index: 10000;
  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }
`;

const BroWord = _=>
  <StyledBroWord>
    {_.randomBroWord}
  </StyledBroWord>  

export default BroWord;