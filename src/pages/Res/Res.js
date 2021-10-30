
import React, {useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllRes from '../AllRes/AllRes';
import './Res.css'




const Res = () => {
    

    const [res,setRes]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/restaurent')
        .then(res=>res.json())
        .then(data=>setRes(data))

    },[]);
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:5000,
            easing: 'ease',
        })
    },[]);
    return (
        <div>
            <h2 className="text-light mt-3 mb-3">Allso We delivery Food From those Restaurent</h2>
            <div className="container res" data-aos="fade-up">
                {
                    res.map(ress=><AllRes
                    ress={ress}
                    >

                    </AllRes>
                    )
                }
                
            </div>
        </div>
    );
};

export default Res;