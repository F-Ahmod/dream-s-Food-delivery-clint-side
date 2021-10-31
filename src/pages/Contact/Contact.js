import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing: 'ease',
        })
      },[]);
    return (
        <div className="row mt-5 mb-5">
            <div className="col-md-6 " data-aos="fade-right">
                <h2 className="text-secondary mt-3 mb-3">Hot line</h2>
                <p className="text-light">+1646432456</p>
                <p className="text-light"> +165763637</p>
            </div>
            <div className="col-md-6" data-aos="fade-left">
                <h2 className="text-secondary mt-3 mb-3">Email </h2>
                <p className="text-light">dream'sfooddelivery@hotmail.com</p>
                <p className="text-light">dream's@food.com</p>
                <p className="text-light"></p>
            </div> 
            
            
        </div>
    );
};

export default Contact;