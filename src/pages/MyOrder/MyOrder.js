import React, { useEffect } from 'react';
import './MyOrder.css';

import { useParams } from 'react-router';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Swal from 'sweetalert2';

const MyOrder = () => {
    const {email}=useParams()
    
    const [myOrder,setMyOrder]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/home/${email}`)
        .then(res=>res.json())
        .then(data=>setMyOrder(data))
    },[])
    const handelOrde =email=>{
        
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
                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                'Deleted!',
                                'Your food has been deleted from your orders.',
                                'success'
                                
                              )
                            }
                          })
                        const reminingUsers=myOrder.filter(user=> user.email !==email)
                        setMyOrder(reminingUsers)
                    }
                
            });
            
    }
    return (
        <div className="myOrder mt-5 mb-5">
            {
        myOrder?.map(pd=><div>
       <div class="card mb-3" style={{maxWidth:"540px"}}>
       <div class="row g-0">
       <div class="col-md-4">
       <img src={pd.img} class="img-fluid rounded-start" alt="..."/>
       </div>
       <div class="col-md-8">
       <div class="card-body">
        <h5 class="card-title">{pd.title}</h5>
        <p class="card-text">{pd.dec}</p>
        <p class="card-text"><small class="text-muted">Price $ {pd.price}</small></p>
        <button onClick={()=>handelOrde(pd._id)} type="button" class="btn btn-danger ">Delete</button>
       
      </div>
    </div>
  </div>
</div>
                   
                </div>)
            }

            
        </div>
    );
};

export default MyOrder;