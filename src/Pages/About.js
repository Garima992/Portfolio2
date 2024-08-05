import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <>
    <div className='row'>
      <div className='col-sm-6 img-space'>
      <img src="images/Garima.jpeg" alt="3" width={400} className='center' />
      </div>

      
        <div className='col-sm-5'>
       <h3>A Short Introduction</h3><br/>
<p><i><strong>"Enthusiastic Full Stack web3 developer"</strong></i><br/>Like every developer, I love to code and solve complex problems, even if it gets a lot of time and effort. 
At the end of the day, nothing gives more satisfaction than a successful code run. </p>
<p>Besides the work part, I am fond of Movies, Music and Reading. Whether its a fiction, drama, science, or spiritual content, I enjoy reading across all genres.
  <p>I am working on AI tools also to update myself.</p>
</p><br/>
<p className='quote'><i><strong>"Difficult Roads Often Leads To Beautiful Destinations."</strong></i></p>

<p className='about-name'><strong><i>~ Garima Chouhan ~</i></strong></p>

        </div>
      </div>
<br/>
<hr className='hr-width'/>
      <div className='row center2'>
        <h3 className='h-decor'>Acedemics</h3>
        <div className='col-sm-6'>
          <img src='MLSU.jpg' width={100} className='m-bottom' />
          <p>I have completed my Batchelors degree in Computer Application 
            from Mohanlal Sukhadiya University, Udaipur (Rajasthan), India. </p>
        </div>
        <div className='col-sm-6'>
        <img src='PU.png' width={100} className='m-bottom'/>
        <p>I have completed my Masters degree in Computer Application 
            from Pacific University, Udaipur (Rajasthan), India. </p>
        </div>
      </div><br/>

      <div className='banner'><h2 className='h2-decor'>Interested? <br/> You can download my CV from here!</h2><br/>
      <div className='cv-div'><Button variant='dark' href='Garima Chouhan Resume PDF 2023.pdf' className='cv-button'>Curriculum Vitae</Button>
      <Button variant='dark' href='https://www.linkedin.com/in/garima-chouhan-134370158/' className='cv-button' >LinkedIn Profile</Button>
      </div></div><br/>
      <hr className='hr-width'/>
      
      </>
      );
}

export default About;