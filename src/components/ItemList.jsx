import React from 'react';

const ItemList = ({name, handleEdit, handleDelete}) => {
    return ( 
        <div>                      
             {name}
             <button onClick={handleEdit} ><span  className="material-icons">mode_edit</span></button>  
             <button onClick={handleDelete}> <span  className="material-icons">delete_forever</span></button>  
            
        </div>

     );
}
 
export default ItemList;