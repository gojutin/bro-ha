import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
  font-size: 3.8em;
  font-family: 'Luckiest Guy', cursive;
`;

const StyledHa = styled.span`
  color: #ffd468;
`;

const StyledBro = styled.span`
  color: lightgray;
`;

const GitHub = styled.a`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const Title = _=>
  <div>

    <MainTitle>          
      <StyledBro>BRO</StyledBro>-
      <StyledHa>HA!</StyledHa>
    </MainTitle>

      <GitHub 
        href="https://github.com/gojutin/bro-ha" 
        target="_blank" 
        rel="noopener"
      >
        <img src="github.png" alt="GitHub" height={30} />
      </GitHub>
  </div>

export default Title;
