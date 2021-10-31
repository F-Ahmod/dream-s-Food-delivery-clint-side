import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css'
import { FoodContext } from './../Food/Food';
import useAuth from './../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
    
    const addToBag =id=>{
      product.email=user?.email
      product.status='panding'
    fetch(`https://ancient-falls-45075.herokuapp.com/cards/${id}`,{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify( product)

    })
    .then(res => res.json())
    .then(data=>{})
    }

    // add To Card

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://ancient-falls-45075.herokuapp.com/cards',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }

        })
        

    };
    return (
        <div classname="container  ">
           <div className="row">
            <div className="col-md-6">
            <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
               <Card.Img variant="top" src={product.img} width="300" />
                 <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>
                   {product.dec}
                 </Card.Text>
                 <Card.Text>Price $ {product.price}
                 </Card.Text>            
                
               </Card.Body>
              
             </Card>
            </div>
             <div className="col-md-6">
             <div className="mt-5 mx-auto mb-2 bg-light " style={{width:"400px",height:"350px"}}>
            <h2>Please give information to Confirm order </h2>
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 ">
            <input defaultValue={user.displayName} className="w-50 mb-1 mt-3 h-3" {...register("name")} Placeholder="Name" />
            <br />
            <input  defaultValue={user.email} className="w-50 mb-1" type="text" {...register("email")} Placeholder="Email"/>
            <br />
            <input   className="w-50 mb-1" type="text" {...register("address")} Placeholder="Address"/>
            <br />
            <select className="w-50 mb-1" {...register("ticket-type")}>
                                <option value="Select Type">Delivery Type</option>
                                <option value="expensive">Quick</option>
                                <option value="normal">normal</option>
                            </select>
            <br />
            <textarea className="w-50 mb-1" {...register("dec" )} Placeholder="Write your comment"/>
            <br />
           
            <button onClick={()=>addToBag(product._id)} type="button" class="btn btn-warning ">Add to Card</button>
          </form>
            </div>
        </div>
             </div>
             </div>
           
        </div>
    );
};

export default Cards;