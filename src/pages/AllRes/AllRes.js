import React from 'react';
import { Card } from 'react-bootstrap';

const AllRes = ({ress}) => {
    const {img,title,add}=ress


    return (
        <div>
            <Card className="cards shadow " style={{ width: '19rem' }}>
               <Card.Img variant="top" src={img} width="300" />
                 <Card.Body>
                 <Card.Title>{title}</Card.Title>
                 <Card.Text>
                   {add}
                 </Card.Text>
               </Card.Body>
              
             </Card>
            
        </div>
    );
};

export default AllRes;