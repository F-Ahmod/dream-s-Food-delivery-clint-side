import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { useState } from 'react';

const MyOrder = () => {
    const {email}=useParams()
    
    const [myOrder,setMyOrder]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/home/${email}`)
        .then(res=>res.json())
        .then(data=>setMyOrder(data))
    },[])
    const handelOrde =email=>{
        const proced=window.confirm('sure you want to delete');
            if(proced){
                const url=`https://ancient-falls-45075.herokuapp.com/home/${email}`;
            fetch(url,{
                method:'DELETE',
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                    alert('delete sucessfuly')
                    const reminingUsers=myOrder.filter(user=> user.email !==email)
                    setMyOrder(reminingUsers)
                }
                
            });
            }
    }
    return (
        <div>
            <h1>{email}</h1>
            {
                myOrder?.map(pd=><div>
                    <img src={pd?.img} alt=""  />
                    <h2>{pd?.title}</h2>
                    <button onClick={()=>handelOrde(pd._id)} type="button" class="btn btn-danger ">Delete</button>
                </div>)
            }

            
        </div>
    );
};

export default MyOrder;