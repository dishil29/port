import './index.css';
import React from 'react';
import fb from "./fb.png";
import ig from "./ig.jpg";
import mail from "./mail.jpg";

const Home = () => {
  const text = "My name is Zalavadiya Dishil. I am a first year undergraduate student of the department of Mechanical Engineering enrolled in it's Dual Degree course. I am a boarder of Gokhale Hall of Residence. I am from Ahmedabad, Gujrat. My hobbies include Reading Novels, Solving Riddles, Listening to Music. I also like to play Volleyball."
  const name = "Dishil Zalavadiya"
  const h = "Home"
  return (  
    <div className='Intro'> 
      <h4> {h} </h4>
      <span className="name"> {name} </span> 
      <span className='fb'> <a href="https://www.facebook.com/dishil.zalavadia.7"> <img src={fb} alt="Facebook" /> </a> </span>
      <span className="ig"> <a href="https://www.instagram.com/dishil.iitkgp/"><img src={ig} alt="Instagram" /></a>
      </span>
      <span className="mail"> <a href="mailto:dishil2906@gmail.com"><img src={mail} alt="Mail" /> </a> </span>
      <p> {text} </p>  
    </div>
  );
}
 
export default Home;