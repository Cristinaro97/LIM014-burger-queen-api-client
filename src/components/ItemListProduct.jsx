import React from 'react';

const ItemListProduct = ({name, handleEditProduct}) => {
    return ( 
        <div>
             {name}
             <button onClick={handleEditProduct} ><span  class="material-icons">mode_edit</span></button>  
             <button> <span  class="material-icons">delete_forever</span></button>  
            
        </div>

     );
}
 
export default ItemListProduct;