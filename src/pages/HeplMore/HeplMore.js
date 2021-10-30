import React from 'react';
import { Link } from 'react-router-dom';
import './HelpMore.css'

const HeplMore = () => {
    return (
        <div>
            <div >
            <nav id="hephNav"  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center " id="navbarNa">
      <ul class="navbar-nav fw-bold fs-3">
        <li class="nav-item ">
          <Link class="nav-link active text-light" aria-current="page" to="about">About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/privacy">Privacy & Policy</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link" to="/">Pricing</Link>
        </li> */}
        
      </ul>
    </div>
  </div>
</nav>
            </div>

<div className="mt-5 mb-5">
<h6 className="d-flex justify-content-start ps-3 text-light">Q. How does the site work? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on place order.</p> 


<h6 className="d-flex justify-content-start ps-3 text-light">Q. How much do deliveries cost? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. Delivery fee of Tk 29 is applicable for orders below BDT 400. And for orders above BDT 400, delivery charge is.</p>


<h6 className="d-flex justify-content-start ps-3 text-light">Q. How can I contact you? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. You can always call 16710 or mail us at support@Dreams food delivery.com.</p> 



<h6 className="d-flex justify-content-start ps-3 text-light">Q. What are your delivery hours?</h6> 


<p className="d-flex justify-content-start ps-3 text-light">A. We deliver from 8 am to 10 pm every day.  </p>


<h6 className="d-flex justify-content-start ps-3 text-light">Q. How do I know when my order is here? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. A Chaldal representative will call you as soon </p>


<h6 className="d-flex justify-content-start ps-3 text-light">Q. How do I pay? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. We accept cash on delivery and we also have Online Credit Card and Online bKash service. Don’t worry. </p>


<h6 className="d-flex justify-content-start ps-3 text-light">Q. Do you serve my area? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. We are currently serving four big cities of Bangladesh including Dhaka, Chattogram, Narayanganj, and Jashore.
</p>

<h6 className="d-flex justify-content-start ps-3 text-light">Q. I can’t find the product I am looking for. What do I do? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. We are always open to new suggestions and will add an item to our inventory just for you.</p>


<h6 className="d-flex justify-content-start ps-3 text-light">Q. My order is wrong. What do I do? </h6>

<p className="d-flex justify-content-start ps-3 text-light">A. Please Immediately call 16710 and let us know the problem. </p>


<h6 className="d-flex justify-content-start ps-3 text-light">Q. What if the item is out of stock? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. We hold our own inventory in our warehouses, so we rarely run out of stock.</p>

<h6 className="d-flex justify-content-start ps-3 text-light">Q. Why should we buy from you when I have a store nearby? </h6>


<p className="d-flex justify-content-start ps-3 text-light">A. Well, that is up to you but you can also be a couch potato like our founders and have your items delivered to your house for free. </p>


</div>
        </div>
    );
};

export default HeplMore;