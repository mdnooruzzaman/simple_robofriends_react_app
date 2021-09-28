import React from 'react';

import Card from './card'

const cardlsit = ({robots}) =>{
   
    return(
        <div>
            {
                robots.map((user , i) =>{
                    return<Card  id={robots[i].id} name1={robots[i].name1} username={robots[i].username} email={robots[i].email} image={`https://robohash.org/${robots[i].id}`}/>
                })
            }
        </div>
    )
}
export default cardlsit;