import React from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from './../../Hooks/useAuth';


const Login = () => {
    const history = useHistory()
    const location = useLocation();
    const redirect_url = location.state?.from || "/home"
    const {singinWithGoogle}=useAuth();
    const HendelGoolSingin =()=>{
       
singinWithGoogle()
.then(()=>{
    
    history.push(redirect_url)
}

)}
    
    return (

        <div className="d-flex justify-content-center mt-5 pt-5">
           <aside className="card" style={{width:"450px",padding:"50px",height:"400px"}}>
                <h3 className="text-center mb-4 mt-5 text-secondary">Login With Google</h3>
                <br /><br />
               
                 <button onClick={HendelGoolSingin} style={{width:"350px",display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"10px",padding:"7px",fontWeight:"500",marginBottom:"20px",border:"1px solid grey"}}> <i className="fab fa-google "></i> Continue with Google</button>
               
                {/* <small className="text-center fw-bold"> Don't have an account? <Link>Create an account</Link></small> */}
             </aside>
        </div>
    );
};

export default Login;