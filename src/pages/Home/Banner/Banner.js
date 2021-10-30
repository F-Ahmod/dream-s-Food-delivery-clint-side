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
                {/* <div> */}
                {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>You get Your food With us in a short time</h5>
        <p>The United Nations must focus on delivery rather than process and on people rather than bureaucracy
Read more.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>No compromice with best serice</h5>
        <p >Give your clients the earliest delivery consistent with quality - whatever the inconvenience to us.
Read more .</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>We are best for quick Delivery</h5>
        <p>I was a pizza delivery boy at the Pizza Oven in Canton. I wanted to get fired so bad, I actually wrecked the delivery car,
Read more at </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
                {/* </div> */}






                 <h1 className="text-warning mx-auto mt-5 fs-1 mt-5" data-aos="fade-up-left">Dream's Food Delivery</h1> <br />
                <small className="text-secondary">Dream's Food Delivery we also have adequate knowledge about Food and its delivery</small>
 


 
            </div>
           
        </div>
    );
};

export default Banner;