import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory }  from 'react-router';
import './Header.css';
import img from  '../../images/logo.png';
import useAuth from './../../../Hooks/useAuth';

const Header = () => {
  const {logOut,user}=useAuth()
  
  const history = useHistory()
  const controlMYOrders=()=>{

    history.push(`/myOrder/${user?.email}`)
    
  }
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"> <img src={img} alt="" srcset="" width="60" /> <span className="text-warning">D</span>ream's Food Delivery</Link>
            {         
                   user.email &&
                   <p  style={{marginLeft:"25%"}}>
                    <span className="me-2 text-primary">{user?.displayName}</span>
                    <img className="rounded-circle" width="30" height="30" src={user?.photoURL} alt="" />
                    
                   </p>
                }
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link active" to="/helpMore">Hepl More</Link>
        
        

        {!user?.email ?
       <>
          <NavLink className="nav-link" to="/login">Login</NavLink>
       </>
        :
        <>
        <h6 onClick={controlMYOrders} className="nav-link active" to="/myOrder">My Order</h6>
        <Link className="nav-link active" to="/manageAllOrders">Manage Orders</Link>
        <Link className="nav-link active" to="/service">Add Food</Link>

        <button className=" active " onClick={logOut} > Sign Out</button>
        </>
        }
{/* 
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/login">Login</Link> */}
      </div>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Header;



