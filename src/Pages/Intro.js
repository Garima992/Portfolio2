import * as React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Intro=()=>{
    return(
        <>
            <h1 className='h1-center'>Hello! This is <strong className='intro-name'>Garima Chouhan</strong></h1>
            <br/>
             <p className='intro-name'>I am an IT professional, working in the field of Web Development and Digital Marketing
                  from last 7 years, with different technologies and softwares.</p>
                <br/>

   <CardGroup>
    <Card style={{ width: '12rem' }}>
      {/* <Card.Img variant="top" src=".images/cart.jpg"  /> */}
      <img src="images/cart.jpg" alt="3" width={200} className='center' />
      <Card.Body>
        <Card.Title>E-Commerce</Card.Title>
        <Card.Text>
        I've got good experience in E-commerce, handled everything from UI/UX to admin panels for sellers.
        </Card.Text>
      </Card.Body>
    </Card> 

    <Card style={{ width: '12rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <img src="images/digital.jpg" alt="3" width={200} className='center' />
      <Card.Body>
        <Card.Title>Digital Marketing</Card.Title>
        <Card.Text>
          This can be achieved by using the approaches like SEO, Email and Content Marketing, website optimization etc.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '12rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <img src="images/database.jpg" alt="3" width={200} className='center' />
      <Card.Body>
        <Card.Title>Database Management</Card.Title>
        <Card.Text>
         Working on the platforms like SQL and MongoDB, the data mangement become more efficient.
        </Card.Text>
      </Card.Body>
    </Card>
    </CardGroup>


          <br/>
            </>
    );
}

export default Intro;