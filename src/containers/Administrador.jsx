import { Link, Switch, Route } from "react-router-dom";
import React, { useEffect, Fragment } from "react";
import axios from "axios";
import {END_POINT_USERS} from '../config'
import Navigation from "../components/Navigation";
import Employess from "./Employess";

function AdmintradorPage() {
 
  useEffect(() => {
    var token = localStorage.getItem("token");
    axios({
      method: "get",
      url: END_POINT_USERS,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <Fragment>
        <Employess/>
    </Fragment>
  );
}

export default AdmintradorPage;
