import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css'
import { FoodContext } from './../Food/Food';

const Cards = () => {
  const [item,setItem]=useContext(FoodContext)
    const {id}=useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/cards/${id}`)
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[])
    
    const addToBag =i=>{

    // const pb=product.find(pd=>pd._id ===i);
    console.log(i);

    fetch(`http://localhost:5000/cards/${id}`,{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify( product)

    })
    .then(res => res.json())
    .then(data=>{})
    

      
    }
    return (
        <div classname="container">
           
            <Card className="singleCard" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={product.img} width="300" />
                 <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>
                   {product.dec}
                 </Card.Text>
                 <Card.Text>Price $ {product.price}
                 </Card.Text>
                 <button onClick={()=>addToBag(product._id)}>Add to bag</button>
                
               </Card.Body>
              
             </Card>
           
        </div>
    );
};

export default Cards;