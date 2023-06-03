import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Intro';




function Slider() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src="images/image1.jpg" alt="1" />
        <Carousel.Caption>
          <h3>Web Development</h3>
          <p>Get readyfor the latest transformation in the field of Web Development. </p>
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
       <img src="images/image2.jpg" alt="2"/>

        <Carousel.Caption>
          <h3>Digital Marketing</h3>
          <p>Digital Marketing is no more an option but become the necessity for digital world.</p>
        </Carousel.Caption>
      </Carousel.Item>

 
      <Carousel.Item>
        <img src="images/image3.jpg" alt="3" />

        <Carousel.Caption>
          <h3 className='slider'>Responsive Design</h3>
          <p className='slider'>
           Responsiveness has become a new must have thing for websites to appear on all devices.
          </p>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
<hr/>
<Intro />
  </>
  );
}



export default Slider;