import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    position: fixed;
    left: 50%;
    top: 50vh;
    transform: translate(-50%, -50%);
    z-index: 5000;
`;

const Shatter = _=>

  <Image 
    height={90 + "%"}
    src="shattered.png" 
    alt="shattered screen" 
    style={{
      zIndex: 7000
    }}
  />

export default Shatter;