import React from 'react';
import { useForm } from 'react-hook-form';
import './FeedBack.css'

const FeedBack = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset()
   
    }
    return (
    <div className="mt-3">
           
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 bgFeed">
            
            <h2 className=" mb-2 mt-3">Please send Us your feedBack</h2>
            <input className="w-25 mb-3 mt-3 h-3" {...register("firstName")} Placeholder="First name"/>
            <br />
           
            <input className="w-25 mb-3" type="date" {...register("date")} />
            <br />
            <textarea className="w-25 mb-3" {...register("text" )} Placeholder="Write your text"/>
            <br />
            <input className="mb-3 p-1" style={{width:"140px",borderRadius:"10px"}} type="submit" />
          </form>
           
        </div>
    );
};

export default FeedBack;