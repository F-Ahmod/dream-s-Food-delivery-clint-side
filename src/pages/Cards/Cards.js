import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css'
import { FoodContext } from './../Food/Food';
import useAuth from './../../Hooks/useAuth';

const Cards = () => {
  const {user}=useAuth()
  const [item,setItem]=useContext(FoodContext)
    const {id}=useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        fetch(`https://ancient-falls-45075.herokuapp.com/cards/${id}`)
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[])
    
    const addToBag =i=>{

    // const pb=product.find(pd=>pd._id ===i);
    // console.log(i);
      product.email=user?.email
    fetch(`https://ancient-falls-45075.herokuapp.com/cards/${id}`,{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify( product)

    })
    .then(res => res.json())
    .then(data=>{})
    

      
    }
    return (
        <div classname="container ">
           
            <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={product.img} width="300" />
                 <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>
                   {product.dec}
                 </Card.Text>
                 <Card.Text>Price $ {product.price}
                 </Card.Text>
                 <button onClick={()=>addToBag(product._id)} type="button" class="btn btn-warning ">Add to bag</button>
                 
                
               </Card.Body>
              
             </Card>
           
        </div>
    );
};

export default Cards;