import React from 'react';
import './Foods.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Food from '../Food/Food';
import { Spinner } from 'react-bootstrap';

const Foods = () => {
    const [foods,setfoods]=useState([]);
    useEffect(()=>{
        fetch('https://ancient-falls-45075.herokuapp.com/delivery')
        .then(res=>res.json())
        .then(data=>setfoods(data))

    },[])
    return (
       <div>
           <h2 className="text-light mt-2 mb-3">Best Foods Ready to Delivery </h2>
            {foods.length ===0 ? 
            <Spinner animation="border" variant="success" />
          

            :
                <div className="container food">
           
                {
                    foods.map(food=><Food
                    food={food}
                    >
     
                    </Food>)
                } 
             </div>
            }
       </div>
    );
};

export default Foods;
