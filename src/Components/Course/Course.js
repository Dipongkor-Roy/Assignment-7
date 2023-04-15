import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

import './Course.css'

const Course = (props) => {

    const {course_name,picture,balance,company}=props.courses;   
    return ( <div className='main-container'>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top"  src={picture} />
    <Card.Body>
      <Card.Title>{course_name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <p>Faculty:{company}</p>
      <p>Price:${balance}</p>
      <Button onClick={()=>props.addToCart(props.courses)} variant="info">Add To Cart</Button>
    </Card.Body>
  </Card>
    </div>
 );
}

export default Course;




