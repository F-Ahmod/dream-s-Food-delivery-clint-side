

import axios from 'axios';
import React from 'react';

import { useForm } from 'react-hook-form';


const Service = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('https://ancient-falls-45075.herokuapp.com/service',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }

        })
        

    };

    return (
        <div className="mt-5 mx-auto mb-5 bg-light " style={{width:"400px",height:"350px"}}>
            <h2>+Add food for Delivery</h2>
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
            
           
            <input className="w-50 mb-3 mt-3 h-3" {...register("title")} Placeholder="title"/>
            <br />
            <input className="w-50 mb-3" {...register("img")}  Placeholder="image URL"/>
            <br />
           
            <input className="w-50 mb-3" type="text" {...register("price")} Placeholder="price"/>
            <br />
            <textarea className="w-50 mb-3" {...register("dec" )} Placeholder="Write your text"/>
            <br />
            <input className="" style={{width:"140px",borderRadius:"10px"}} type="submit" />
          </form>
            </div>
        </div>
    );
};

export default Service;