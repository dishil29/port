import './index.css';
import React from 'react';

const Contact = () => {
  return (  
    <div className="Contact">
    <h4>Contact Section</h4>
    <p>Address: C-101, Gokhale hall of Residence, Indian Institute of Technology Kharagpur, Kharagpur.<br/> <br/>
    Email Address:<a href='mailto:dishil2906@gmail.com'> dishil2906@gmail.com</a><br/><br/>
    </p>
    <form action=' '>
      <p>
      <input type="text" name="name" required id="name" placeholder="    Name"/> 
      </p>
      <p>
        <input type="email" name="email" required id="email" placeholder="    Email Address"/>
      </p>
      <p>
        <input type="text" required placeholder="    Message" name="message" id="message"/>
      </p>
      <span><input type="submit" value="Submit"/> 
      </span> 
    </form>
    </div>
  );
}
 
export default Contact;