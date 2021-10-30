import React,{useEffect,useState} from 'react';


const AddCard = () => {
    const [detal,setDetal]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/home')
    .then(res =>res.json())
    .then(data => setDetal(data))
    

},[])
const handel =id=>{
    const proced=window.confirm('sure you want to delete');
        if(proced){
            const url=`http://localhost:5000/home/${id}`;
        fetch(url,{
            method:'DELETE',
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                alert('delete sucessfuly')
                const reminingUsers=detal.filter(user=> user._id !==id)
                setDetal(reminingUsers)
            }
            
        });
        }
}

    return (
        <div>
            {
                detal.map(pd=><div>
                    <img src={pd?.img} alt="" />
                    <h2>{pd.dec}</h2>
                    <button onClick={()=>handel(pd._id)}>delete</button>
                </div>)
            }
            
        </div>
    );
};

export default AddCard;