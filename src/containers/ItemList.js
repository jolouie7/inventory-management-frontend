import React, { useEffect, useState } from "react";
import Item from "../components/Item";

const CategoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "http://127.0.0.1:8000/inventory/item-list/"
      );
      response = await response.json();
      setItems(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <Item name={item.name} key={index} />
      ))}
    </div>
  );
};

export default CategoryList;
