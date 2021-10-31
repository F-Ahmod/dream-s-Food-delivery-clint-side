import React, {useEffect} from 'react';
import img from '../../images/222.png'
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing: 'ease',
    })
  },[]);
    return (
        <div className="row banner mt-3 mb-5">
            <div className="col-md-6 d-flex align-items-cente" data-aos="zoom-in">
                <img src={img} width="100%" height="400" alt="" srcset="" />

            </div>
            <div className="col-md-6 mt-5" data-aos="fade-right">
                
                 <h1 className="text-warning mx-auto mt-5 fs-1 mt-5" data-aos="fade-up-left">Dream's Food Delivery</h1> <br />
                <p className="text-secondary me-5 ms-3">Dream's Food Delivery we also have adequate knowledge about Food and its delivery.If there was no Black Sabbath, <br /> I could still possibly be a morning newspaper delivery boy.</p>
 


 
            </div>
           
        </div>
    );
};

export default Banner;