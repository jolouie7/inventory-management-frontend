// import React, { useEffect, useState } from "react";
// import Item from "../components/Item";

// const CategoryDetail = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchMyAPI() {
//       let response = await fetch(
//         "http://127.0.0.1:8000/inventory/item-list/"
//       );
//       response = await response.json();
//       setItems(response);
//     }

//     fetchMyAPI();
//   }, []);

//   const filteredItems = items.filter(
//     (item) => item.category === match.params.id
//   );

//   return (
//     <div>
//       {filteredItems.map((item, index) => (
//         <Item name={item.name} key={index} />
//       ))}
//     </div>
//   );
// };

// export default CategoryDetail;
