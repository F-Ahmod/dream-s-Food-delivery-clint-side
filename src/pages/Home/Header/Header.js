import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useHistory }  from 'react-router';
// import useFirebase from './../../Firebase/useFireBase';
import './Header.css'
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
    <Link className="navbar-brand" to="/home">Dream's</Link>
            {         
                   user.email &&
                   <p  style={{marginLeft:"50%"}}>
                    <span className="ms-2 text-primary">{user?.displayName}</span>
                    <img className="rounded-circle" width="30" height="30" src={user?.photoURL} alt="" />
                    
                   </p>
                }
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link" href="#">Features</Link>
        <Link className="nav-link" to="/helpMore">Hepl More</Link>
        <Link className="nav-link" to="/manageAllOrders">Manage All Orders</Link>
        <Link className="nav-link" to="/service">Service</Link>
        
        

        {!user?.email ?
       <>
          <NavLink className="nav-link fs-5 fw-bold" to="/login">Login</NavLink>

       <NavLink className="nav-link fs-5 fw-bold" to="/singup">Sing-Up</NavLink>
       </>
        :
        <>
        <h6 onClick={controlMYOrders} className="nav-link" to="/myOrder">My Order</h6>

        <button className="bg-secondary " onClick={logOut} > Sign Out</button>
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