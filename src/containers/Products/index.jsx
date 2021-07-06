import React, { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT_PRODUCTS } from "../../config";
import ItemListProduct from "../../components/ItemListProduct";
import ProductsForm from "../../components/ProductForm";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState();

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
  }

  const handleCreateProduct = () => {
    const newProduct = {
      name:'',
      type:'',
      dateEntry:'',
      price:'',
    }
    setProductSelected(newProduct)
  }

  return (
      <div>
          <div>
          <button onClick={handleCreateProduct}>+ AGREGAR PRODUCTO</button>
              <h3>Lista de Productos</h3>
              <ul>
                  {products.map((product)=>(
                      <li key={product._id}>
                          <ItemListProduct name={product.name} handleEditProduct={()=> {handleEditProduct(product)}} />
                      </li>
                  ))}
              </ul>
          </div>
          <ProductsForm productSelected = {productSelected} setProductSelected={productSelected}/>
      </div>
  );
};

export default Products;
