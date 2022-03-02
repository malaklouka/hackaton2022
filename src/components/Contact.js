/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import * as emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import  './contact.css'
import { FaPhoneVolume, FaFax } from 'react-icons/fa';
import {GiPositionMarker} from 'react-icons/gi'
import { RiMailSendLine } from "react-icons/ri";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm("service_fljdn8h","template_gbwk7zc", e.target,"user_EA91lKOXpigOTUjSTE8wa")
        .then((result) => {
			toast.success("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {

        	toast.error("An error occurred, Please try again", error.text);
        });
        };
    return (
      <div className='contct'>
                <h2 className='contactus'> Contactez-nous </h2>

        <div class="container">

        <div class="form-container">

          <div class="left-container">
            <div class="left-inner-container">

            <div className="icon_wrapper">
      
           <span className='iconn'> <GiPositionMarker/> </span><span>
             Siège social, Imm. El Emtiez.<br/> Centre Urbain Nord, 1003, Tunis. </span>
         <br/>
         <br/>
            <span>
         <FaPhoneVolume/> +216 71 238 729 , +216 71 233342 </span>
         <br/>
         <br/>

         <span> <FaFax/> +216 71 234 411</span>
         <br/>
         <br/>

         <span><RiMailSendLine/> info@stbsicar.com.tn</span>
          </div>

            </div>
          <div class="right-container">
            <div class="right-inner-container">
            <form action="#" method="post" id="contact_form" onSubmit={sendEmail}>
  <div className="name">
       <label for="name"></label>
       <input type="text" placeholder="Nom et prénom" name="name" id="name_input" required/>
     </div>
     <div className="email">
       <label for="email"></label>
       <input type="email" placeholder="Adresse e-mail " name="user_email" id="email_input" required/>
     </div>
     <div className="telephone">
       <label for="name"></label>
       <input type="text" placeholder="Numéro de téléphone" name="phone" id="telephone_input" required/>
     </div>
  
     <div className="message">
       <label for="message"></label>
       <textarea name="message" placeholder="" id="message_input" cols="30" rows="5" required></textarea>
     </div>
     <div className="submit">
         <button type='submit' value="Send Message" id= "form_button"> Envoyer </button>
     </div>
   </form>
            </div>
          </div>
        </div>
      </div>











</div>
</div>


    )
}

export default Contact