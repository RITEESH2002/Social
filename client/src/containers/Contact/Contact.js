import React,{useRef} from "react";
import Feature from "../../components/Feature/Feature";
import './Contact.css'
import emailjs from "emailjs-com"

const Contact = () => {
  const form =useRef();
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_nqtihzw', 'template_9thyst5', e.target, 'UcrG9meToaI6WIU_i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
   
  }
  return (
    <div className="gpt3__whatgpt3 section__margin2" id="contact">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="Contact Us" />
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <label style={{color:"white"}}>Name</label>
      <input type="text" name="name"  style={{backgroundColor:"transparent",color:"white",borderColor:"white",borderWidth:"1px",borderStyle:"solid"}}/>
      <label style={{color:"white"}}>Email</label>
      <input type="email" name="email" style={{backgroundColor:"transparent",color:"white",borderColor:"white",borderWidth:"1px",borderStyle:"solid"}}/>
      <label style={{color:"white"}}>Message</label>
      <textarea name="message" style={{backgroundColor:"transparent",color:"white",borderColor:"white",borderWidth:"1px",borderStyle:"solid"}}/>
      <input type="submit" value="Send" style={{cursor:"pointer",color:"white",borderColor:"white",borderWidth:"1px",borderStyle:"solid"}}/>
    </form>
    </div>
  );
};

export default Contact;
