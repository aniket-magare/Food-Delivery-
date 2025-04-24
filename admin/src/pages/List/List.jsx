
import React, { useEffect } from "react";
import "./List.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";



const List = () => {
const [list, setList] = useState([]);
const url = "http://localhost:4000";



const fetchList = async () => {
  const response = await axios.get(`${url}/api/food/list`);
  console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return <div> test1 </div>;
};



export default List;

