import React, { Fragment } from 'react';

const ProductsForm = (props) => {
    const { productSelected, setProductSelected } = props;

    if(productSelected){
        const onChangeHandler = (e) => {
            setProductSelected({ ...productSelected, [e.target.name]:e.target.value,});
        };
    

    return ( 
        <Fragment>
            <h3>Detalle del producto</h3>
            <label>Nombre del producto:</label>
            <input
             name="name"
             type="text"
             value={productSelected.name}onChange={onChangeHandler}
            />
             <br />
            <label>Tipo de menú:</label>
            <input
             name="type"
             type="text"
             value={productSelected.type}onChange={onChangeHandler}
            />
            <br />
            <label>Fecha de creación del producto:</label>
            <input
             name="dateEntry"
             type="text"
             value={productSelected.dateEntry}onChange={onChangeHandler}
            />
            <br />
            <label>Precio:</label>
            <input
             name="price"
             type="text"
             value={productSelected.price}onChange={onChangeHandler}
            />
            <br />
            <button>Guardar</button>
        </Fragment>
     );
    } else {
        return null;
    }
}
 
export default ProductsForm;