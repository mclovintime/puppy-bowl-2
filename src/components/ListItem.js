import React from 'react'


const ListItem = (props) => {
    

    {props.players.length ? props.players.map((puppy)   =>  {
        
        return (
        <div id="panel">
            <div>{puppy.id}</div>
            
        </div>)
    }) : <div>loading puppies...</div> }
   
    return(
        
null
    )

    }


export default ListItem