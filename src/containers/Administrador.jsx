
// import React, { useEffect, Fragment, useState } from "react";
// import axios from "axios";
// import { END_POINT_USERS } from "../config";

import Employess from "./Employess";
import Products from "./Products";
import {
  PANEL_EMPLOYESS,
  PANEL_PRODUCTS
} from '../config';

function AdmintradorPage({currentPanel}) {
 
  if (currentPanel === PANEL_EMPLOYESS) {
    return <Employess />;
  } else if (currentPanel === PANEL_PRODUCTS) {
    return <Products />;
  }
}

export default AdmintradorPage;
