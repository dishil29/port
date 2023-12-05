import './index.css';
import React from 'react';
import html from "./html.png";
import css from "./css.png";
import python from "./python.png";
const Skill = () => {
  return ( 
    <div className="Skills">
    <h4>Skills</h4>
    <article> 
      <p>HTML <img src={html} alt="Html"/></p>
      <p>CSS <img src={css} alt="CSS"/></p>
      <p>Python <img src={python} alt="Python"/></p>
    </article>
    </div>
  );
}
 
export default Skill;