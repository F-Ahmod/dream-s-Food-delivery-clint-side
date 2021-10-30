import React from 'react';
import './Foods.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods,setfoods]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/delivery')
        .then(res=>res.json())
        .then(data=>setfoods(data))

    },[])
    return (
       <div>
           <h2 className="text-light mt-2 mb-3">Best Foods Ready to Delivery </h2>
            <div className="container food">
           
           {
               foods.map(food=><Food
               food={food}
               >

               </Food>)
           } 
        </div>
       </div>
    );
};

export default Foods;
