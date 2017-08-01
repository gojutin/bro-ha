import React from 'react';

const Checkbox = ({label, value, onChange}) =>
  <div> 
    <label style={{cursor: "pointer"}}>
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        style={{cursor: "pointer"}}
      /> {label}
    </label>
  </div>

export default Checkbox;