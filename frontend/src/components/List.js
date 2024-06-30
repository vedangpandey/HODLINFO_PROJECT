import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import axios from "axios";

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  axios
    .delete("http://localhost:5000/delete-data")
    .then((response) => {
      console.log("data deleted", response);
    });
  useEffect(() => {
    axios.get("http://localhost:5000/fetch-data").then((response) => {
      console.log("data fetched", response);
      axios
        .get("http://localhost:5000/get-data")
        .then((response) => {
          console.log("data get");
          console.log("Data ",data);
          console.log("response ",response.data);
          setData(response.data.slice(0,10));
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
    
  },[]);
  return (
    <div className="trade-list h-screen">
      <div className="list--head">
        <div className="list-no">#</div>
        <div className="list-platform">Platform</div>
        <div className="list-last">Last Traded Price</div>
        <div className="list-buy-sell">Buy/Sell Price</div>
        <div className="list-diff">Difference</div>
        <div className="list-saving">Savings</div>
      </div>
      {loading && <div>Loading...</div>}

      {error && <div>Error: {error.message}</div>}

      {data.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          platform={item.name}
          last={item.last}
          buy={item.buy}
          sell={item.sell}
        />
      ))}
    </div>
  );
}
