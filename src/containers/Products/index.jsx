import React, { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT_PRODUCTS } from "../../config";
import EmployeeItem from "../../components/EmployeItem";

const Products = () => {
  const [products, setProducts] = useState([]);

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

  return (
      <div>
          <div>
              <h3>Lista de Productos</h3>
              <ul>
                  {products.map((product)=>(
                      <li key={product._id}>
                          <EmployeeItem name={product.name} />
                      </li>
                  ))}
              </ul>
          </div>
          Detalle del producto
      </div>
  );
};

export default Products;
