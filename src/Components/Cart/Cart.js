import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import "./Cart.css"
const Cart = (props) => {
    const [show, setShow] = useState(false);
    const {courses}=props;
    let total=0;
    let time=0;
  
   console.log(total)
    for(const course of courses){
        console.log(total)
        const convert=parseFloat(course.balance);
        total+=convert;
    
    }
    console.log(total)

    const minAdd=(st)=>{
      time=time+st;
     }
    return (
        <div className='Cart-container'>
            <div className='user-contaienr mt-5'>
           <div className='img'>
           <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-circle mb-3"
        style={{ width: "70px" , height:"70px"}}
        alt="Avatar"
      />
           </div>
      <h4>John Doe</h4>
            </div>
            <div className='btn-min'>
            <h3 className='mt-5'>Conceptual Time</h3>
            <div className='btn-all mt-4'>
            <Button  onClick={()=>minAdd(10)} variant="info m-2">10 min</Button>{' '}
            <Button onClick={()=>minAdd(20)} variant="info m-2">20 min</Button>{' '}
            <Button onClick={()=>minAdd(30)} variant="info m-2">30 min</Button>{' '}
            <Button onClick={()=>minAdd(40)} variant="info m-2">40 min</Button>{' '}
            </div>
            </div>
            <div className='grand-total mt-5'>
                <h4>Grand Total</h4>
                <div className='mt-4'>
                    <h5>Total Course Price:${total.toFixed(2)}</h5>
                    <h5>Conceptual Time:{time}</h5>
                </div>
            </div>
           <div className='btn-act mt-4'>
           <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Activity Complete</strong>
            <small>1 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, All Activity Done!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button  variant="warning" onClick={() => setShow(true)}>Activity Complete</Button>
      </Col>
    </Row>
           
           </div>
        </div>
    );
};

export default Cart;