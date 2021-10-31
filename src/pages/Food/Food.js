import React, {  createContext, useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Food.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const FoodContext=createContext()

const Food = ({food}) => {
  const history =useHistory()
  
    const {img,price,title,dec}=food
    const [foods,setFoods]=useState([])
    const [item,setItem]=useContext(FoodContext)
  

  useEffect(()=>{
    fetch('https://ancient-falls-45075.herokuapp.com/delivery')
    .then(res=>res.json())
    .then(data=>setFoods(data))
},[])

setItem(food)



const handelAddToCard=id=>{
    history.push(`/cards/${id}`)   
}
useEffect(()=>{
  AOS.init({
      offset:100,
      duration:1000,
      easing: 'ease',
  })
},[]);


    return (
        <div className="singleFoo  " >
            <Card className="cards shadow " style={{ width: '19rem' }} data-aos="fade-up">
               <Card.Img variant="top" src={img} width="300" />
                 <Card.Body>
                 <Card.Title>{title}</Card.Title>
                 <Card.Text> {dec}</Card.Text>
                 <Card.Text>Price : $ { price}</Card.Text>
                 <button onClick={()=>handelAddToCard(food._id)} type="button" class="btn btn-warning ">Book Now</button>
                 
               </Card.Body>
              
             </Card>

             
        
        </div>
    );
};

export default Food;