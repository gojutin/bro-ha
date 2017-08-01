import React from 'react';

const Fist = ({animate, animation, onClick}) => 
  <div>
    <img src="fist.png" 
      alt="fist"
      onClick={onClick}
      style={{
        cursor: "pointer", 
        animation: `.5s ${animate ? animation: ""}`,
        marginTop: 1 + "%",
      }} 
    />
  </div>

export default Fist;