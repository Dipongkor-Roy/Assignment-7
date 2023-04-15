import React, { useEffect, useState } from 'react';
import Course from '../Course/Course'
import "./Courses.css"
import Cart from '../Cart/Cart';
const Courses = () => {
    const [courses,setCourse]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    const addToCart=(selectedCourse)=>{
        let newCart=[];
        newCart=[...courses,selectedCourse]
        setCourse(newCart)
        
      }
      
    return (
        <div className='course-container'>
        
        <div className='courses'>
        
        {
            courses.map(courses=>( <Course
                key={courses._id} 
                courses={courses}
                addToCart={addToCart}
             
                ></Course>
            ))
        }
        </div>
        <div className='cart-container'>
            <Cart courses={courses}></Cart>
            
        </div>
        </div>
    );
};

export default Courses;