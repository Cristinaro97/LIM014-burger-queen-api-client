import React, { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT_PRODUCTS } from "../../config";
import ItemList from "../../components/ItemList";
import ProductsForm from "../../components/ProductForm";
import { ACTION_CREATE, ACTION_EDIT } from "../../config";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState();
  const [action, setAction] = useState();

  const getAllProducts = async (access_token) => {
    const result = await axios
      .get(END_POINT_PRODUCTS, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .catch((error) => {
        alert("ERROR OBTENIENDO PRODUCTOS DEL API");
      });
    return result;
  };
  
  useEffect(() => {
      const token = localStorage.getItem("token");
      getAllProducts(token).then((response)=> {
        setProducts(response.data);
        console.log("PRODUCTOS",products);
      });
  }, []);

  const handleEditProduct = (product) => {
    setProductSelected(product);
    setAction(ACTION_EDIT);
  }

  const handleCreateProduct = () => {
    const newProduct = {
      name:'',
      type:'',
      dateEntry:'',
      price:'',
    }
    setProductSelected(newProduct);
    setAction(ACTION_CREATE);
  }

  const handleDeleteProduct = (id) => {
    const access_token = localStorage.getItem("token");
    axios
    .delete(`${END_POINT_PRODUCTS}/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((resp) => {
      console.log(resp);
      getAllProducts(access_token).then((response) => {
        setProducts(response.data);
      });
    })
    .catch((error) => {
      alert("ERROR OBTENIENDO USUARIOS DEL API");
    });
};
  return (
      <div>
          <div>
          <button onClick={handleCreateProduct}>+ AGREGAR PRODUCTO</button>
              <h3>Lista de Productos</h3>
              <ul>
                  {products.map((product)=>(
                      <li key={product._id}>
                          <ItemList 
                          name={product.name} handleEdit={()=> {handleEditProduct(product)}} 
                          handleDeleteProduct={()=> {
                            handleDeleteProduct(product._id);}}
                            />
                      </li>
                  ))}
              </ul>
          </div>
          <ProductsForm 
          productSelected = {productSelected} setProductSelected={setProductSelected}
          action={action}
          getAllProducts={getAllProducts}
          setProducts={setProducts}
          />
      </div>
  );
};

export default Products;
