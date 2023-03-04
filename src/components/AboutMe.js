import React from 'react';

function AboutMe(props) {
  return (
    <div>
      <img src={props.photoUrl} alt={props.name} />
      <p>{props.bio}</p>
    </div>
  );
}
console.log ("Hello")
export default AboutMe;
