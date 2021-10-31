
import React, { useState , useEffect} from 'react';
import Swal from 'sweetalert2';

const ManageAllOrders = () => {
    const [allOrders,setAllOrders]=useState([])
    useEffect(()=>{
        fetch('https://ancient-falls-45075.herokuapp.com/home')
        .then(res =>res.json())
        .then(data => setAllOrders(data))
        
    
    },[])
    const handelOrder =id=>{
        
                const url=`https://ancient-falls-45075.herokuapp.com/home/${id}`;
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
                    const reminingUsers=allOrders.filter(user=> user._id !==id)
                    setAllOrders(reminingUsers)
                }
                
            });
            
    }
    return (
    <div>
    <h2 className="mt-3">Manage All Orders</h2>
    <div className="mx-auto mt-5 mb-5 shadow food">
    {
        allOrders.map(allOrder=><div>
       <div class="card mb-3" style={{maxWidth:"340px", height:"230px"}}>
       <div class="row g-0">
       <div class="col-md-4">
       <img src={allOrder.img} class="img-fluid rounded-start" alt="..."/>
       </div>
       <div class="col-md-8">
       <div class="card-body">
        <h5 class="card-title">{allOrder.title}</h5>
        <p class="card-text">{allOrder.dec}</p>
        <p class="card-text"><small class="text-muted">Price $ {allOrder.price}</small></p>
        <button onClick={()=>handelOrder(allOrder._id)} type="button" class="btn btn-danger ">Delete</button>
       
      </div>
    </div>
  </div>
</div>
                   
                </div>)
            }
    </div>

            
        </div>
    );
};

export default ManageAllOrders;