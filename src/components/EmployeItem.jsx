import React from 'react';

const EmployeeItem = ({name}) => {
    return ( 
        <div>
             {name}
             <button>Edit</button>  
             <button>Elim</button>  
        </div>

     );
}
 
export default EmployeeItem;