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
          <Link class="nav-link active" aria-current="page" to="/about">About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/privacyPolicy">Privacy & Policy</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Pricing</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
            </div>

<div className="mt-5 mb-5">
<h6 className="d-flex justify-content-start ps-3">Q. How does the site work? </h6>


<p className="d-flex justify-content-start ps-3">A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on place order. You let us know your address, select a delivery time – and voila, you are done.  A Chaldal representative will then deliver your order right to your home or office.</p> 


<h6 className="d-flex justify-content-start ps-3">Q. How much do deliveries cost? </h6>


<p className="d-flex justify-content-start ps-3">A. Delivery fee of Tk 29 is applicable for orders below BDT 400. And for orders above BDT 400, delivery charge is 19 (For Dhaka only). For Narayanganj, Chattogram and Jashore, delivery Charge is flat TK 9 for orders of any amount.</p>


<h6 className="d-flex justify-content-start ps-3">Q. How can I contact you? </h6>


<p className="d-flex justify-content-start ps-3">A. You can always call 16710 or mail us at support@chaldal.com.</p> 



<h6 className="d-flex justify-content-start ps-3">Q. What are your delivery hours?</h6> 


<p className="d-flex justify-content-start ps-3">A. We deliver from 8 am to 10 pm every day. You can choose from available slots to find something that is convenient to you. </p>


<h6 className="d-flex justify-content-start ps-3">Q. How do I know when my order is here? </h6>


<p className="d-flex justify-content-start ps-3">A. A Chaldal representative will call you as soon as they are at your house to let you know about your delivery. </p>


<h6 className="d-flex justify-content-start ps-3">Q. How do I pay? </h6>


<p className="d-flex justify-content-start ps-3">A. We accept cash on delivery and we also have Online Credit Card and Online bKash service. Don’t worry, our Chaldal representatives should always carry enough change. </p>


<h6 className="d-flex justify-content-start ps-3">Q. Do you serve my area? </h6>


<p className="d-flex justify-content-start ps-3">A. We are currently serving four big cities of Bangladesh including Dhaka, Chattogram, Narayanganj, and Jashore.
</p>

<h6 className="d-flex justify-content-start ps-3">Q. I can’t find the product I am looking for. What do I do? </h6>


<p className="d-flex justify-content-start ps-3">A. We are always open to new suggestions and will add an item to our inventory just for you. There is a "Product Request" feature that you can use to inform us of your requirement. You can also call 16710 or mail us at support@chaldal.com to add an item to our inventory. </p>


<h6 className="d-flex justify-content-start ps-3">Q. My order is wrong. What do I do? </h6>

<p className="d-flex justify-content-start ps-3">A. Please Immediately call 16710 and let us know the problem. </p>


<h6 className="d-flex justify-content-start ps-3">Q. What if the item is out of stock? </h6>


<p className="d-flex justify-content-start ps-3">A. We hold our own inventory in our warehouses, so we rarely run out of stock. However, we will try our best to source what you need. If we cannot find it, we will SMS/call you and let you know what substitutes are available. </p>

<h6 className="d-flex justify-content-start ps-3">Q. Why should we buy from you when I have a store nearby? </h6>


<p className="d-flex justify-content-start ps-3">A. Well, that is up to you but you can also be a couch potato like our founders and have your items delivered to your house for free. Our prices are sometimes lower than that of major superstores in the city. We also carry a larger variety than the average corner store. So, there is really no reason to not buy from us. </p>


</div>
        </div>
    );
};

export default HeplMore;