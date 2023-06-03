import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import SocialFollow from "./SocialFollow";
import { FaHome, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact=()=>{return(
           <>
            <div className='container'>

<div class="row">
  <div class="col-sm-6">
    <div>
      <h3>Contact Me</h3>
      <br/>
      
      <h4 className='decor'><FaHome className='no-decor'/> Address</h4>
      <p className='p'>36, Surbhi Vihar, Shonhagpura, Udaipur(Raj.)</p>
      <br/>
      <h4 className='decor'><FaPhone className='no-decor'/> Phone no.</h4>
      <p className='p'>+91 9057289242</p>
      <br/>
      <h4 className='decor'><FaEnvelope className='no-decor'/> Email</h4>
      <p className='p'>garimachouhan832@gmail.com</p>
      <br/>
      <h4 className='decor'><FaGlobe className='no-decor'/> Social Links</h4>
      <p className='p'> <SocialFollow /></p>
      <br/>
      
      

      </div>
      </div>
  <div class="col-sm-6"><div><h3>Send a Message</h3><br/>
  <ContactForm/>
  
  </div></div>
  <div class="row">
  <div class="col-sm-12">
  <iframe width="800" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=800&amp;height=400&amp;hl=en&amp;q=House%20No.36,%20Surbhi%20Vihar,%20Ashirwad%20Nagar,%20Roop%20Sagar%20Road,%20Shobhagpura%20Udaipur%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

  
  </div>
  </div>
</div>
            </div>
        </>
);}


export default Contact;