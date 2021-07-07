import React, { Fragment } from 'react';
import axios from "axios";
import { ACTION_CREATE, ACTION_EDIT, END_POINT_PRODUCTS } from "../config";

const ProductsForm = (props) => {
    const { productSelected, setProductSelected, action, getAllProducts, setProducts} = props;

    const reloadListProduct = (access_token) => {
        getAllProducts(access_token).then((response) => {
            setProducts(response.data);
            setProductSelected(null);
        });
    }

    const saveDataProduct = () => {
        const access_token = localStorage.getItem("token");

        if (action === ACTION_EDIT) {
            axios.put(`${END_POINT_PRODUCTS}/${productSelected._id}`,productSelected,{
                headers: {
                    Authorization: `Bearer ${access_token}`,
                  },
            })
            .then((response) => {
                reloadListProduct(access_token);
              })
              .catch((error) => {
                console.log(error);
              });
        } else if (action === ACTION_CREATE){
            axios.post(
                END_POINT_PRODUCTS,{
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                      },
                }
            ).then((response) => {
                reloadListProduct(access_token);
            }).catch((error) => {
                console.log(error);
            });
            
        }
    };

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
            <button onClick={saveDataProduct}>Guardar</button>
            <br />
        </Fragment>
     );
    } else {
        return null;
    }
}
 
export default ProductsForm;