import React from 'react';
import '../../../styles/Profile.css'; 


const IconCard = ({img}) => {
  return (
    <div>
            <div className="card" style={{ border:'none'}}>
                <div className="card-body" style={{ width: "60px", height:"60px", backgroundColor:'#3CBAC6' , color: 'white', borderRadius: '10px'}}> 
                  <img src={img} style={{width:'149%'}} alt="Card image cap"/>
                </div>
            </div>
        </div>
  );
};

export default IconCard;
