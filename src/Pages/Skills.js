import * as React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Skills=()=>{
    return(
        <>
            <h3>SKills & Proficiencies</h3> 
            <p>Following are some of technology I've worked in the past or currently working on.</p><br/>
            <CardGroup>
    <Card style={{ width: '12rem', border:'none' }}>
      
      <img src="https://dev-sandeep.github.io/portfolio/assets/images/skills/UX.png" alt="3" width={108} className='img-margin' />
      <Card.Body>
        <Card.Title>UX Design</Card.Title>
        <Card.Text>
        Designing some really cool stuff since 2013, Still beautifying Internet!
        </Card.Text>
        <hr className='hr'/>
      </Card.Body>
    </Card> 

    <Card style={{ width: '12rem', border:'none'}}>
      <img src="https://dev-sandeep.github.io/portfolio/assets/images/skills/JS.png" alt="3" width={39} className='img-margin' />
      <Card.Body>
        <Card.Title>JavaScript</Card.Title>
        <Card.Text>
        Simplest, coolest and my personal favourite since I've first printed "Hello World".
        </Card.Text>
        <hr className='hr'/>
      </Card.Body>
    </Card>

    <Card style={{ width: '12rem', border:'none' }}>
    <img src="https://dev-sandeep.github.io/portfolio/assets/images/skills/jq.png" alt="3" width={52} className='img-margin' />
      <Card.Body>
        <Card.Title>JQuery</Card.Title>
        <Card.Text>
        Manipulating my DOM and giving that extra Special Effect to my web pages.
        </Card.Text>
        <hr className='hr'/>
      </Card.Body>
    </Card>
    
    </CardGroup>

    <CardGroup>
    <Card style={{ width: '12rem', border:'none' }}>
      
      <img src="https://dev-sandeep.github.io/portfolio/assets/images/skills/html.png" alt="3" width={39}className='img-margin' />
      <Card.Body>
        <Card.Title>HTML</Card.Title>
        <Card.Text>
        Skeleton of the whole web page. Personally love to work with tags.
        </Card.Text>
        <hr className='hr'/>
      </Card.Body>
    </Card> 

    <Card style={{ width: '12rem', border:'none' }}>
      <img src="https://dev-sandeep.github.io/portfolio/assets/images/skills/css.png" alt="3" width={39} className='img-margin' />
      <Card.Body>
        <Card.Title>CSS3</Card.Title>
        <Card.Text>
        Positioning, Alligning and beautifying my HTML for all type of screens.
        </Card.Text>
        <hr className='hr'/>
      </Card.Body>
    </Card>

    <Card style={{ width: '12rem', border:'none' }}>
      <img src="https://dev-sandeep.github.io/portfolio/assets/images/skills/react.png" alt="3" width={55} className='img-margin' />
      <Card.Body>
        <Card.Title>React JS</Card.Title>
        <Card.Text>
        Using most advance JS Framework for the coolest web and hybrid apps
        </Card.Text>
        <hr className='hr'/>
      </Card.Body>
    </Card>
    </CardGroup>


        </>
    );
}

export default Skills;