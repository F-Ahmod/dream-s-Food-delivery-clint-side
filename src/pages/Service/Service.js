

import axios from 'axios';
import React from 'react';

import { useForm } from 'react-hook-form';


const Service = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/service',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }

        })
        

    };

    return (
        <div className="mt-5 mx-auto mb-5 bg-info" style={{width:"400px",height:"350px"}}>
            <h2>Our Best Service</h2>
            <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
            
           
            <input className="w-50 mb-3 mt-3 h-3" {...register("title")} Placeholder="title"/>
            <br />
            <input className="w-50 mb-3" {...register("img")}  Placeholder="image"/>
            <br />
           
            <input className="w-50 mb-3" type="text" {...register("price")} Placeholder="price"/>
            <br />
            <textarea className="w-50 mb-3" {...register("dec" )} Placeholder="Write your text"/>
            <br />
            <input className="mb-3 p-1" style={{width:"140px",borderRadius:"10px"}} type="submit" />
          </form>
            </div>
        </div>
    );
};

export default Service;