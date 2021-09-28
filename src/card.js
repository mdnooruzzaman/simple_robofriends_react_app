import React from 'react';
import './card.css';

const card = (props) =>{
    return(
        <div className = 'card'>
           <img alt = "robots"  src ={props.image}/>
               <div className="container">
             <h3 >{props.name1}</h3>
             <p>{props.username}</p>
             <p>{props.email}</p>
             </div>
        </div>
    )
}
export default card;