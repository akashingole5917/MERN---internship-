import React from 'react';
function Greeting(props) {
  return (
    <div style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
      <h3>Hello, {props.name}!</h3>
      <p>You are learning {props.topic} today.</p>
    </div>
  );
}
export default Greeting;
