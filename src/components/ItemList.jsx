import React from 'react';

const ItemList = ({name, handleEdit}) => {
    return ( 
        <div>
             {name}
             <button onClick={handleEdit} >Edit</button>  
             <button>Elim</button>  
        </div>

     );
}
 
export default ItemList;