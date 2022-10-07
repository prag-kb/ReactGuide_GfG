import React from "react";
import ListItem from "./ListItem.js/ListItem";

const items = [
  {
    id: 0,
    title: "Title of this Item 1",
    price: 120,
    discountedPrice: 80,
  },
  {
    id: 1,
    title: "Title of this Item 2",
    price: 200,
    discountedPrice: 100,
  },
  {
    id: 2,
    title: "Title of this Item 3",
    price: 5000,
    discountedPrice: 3500,
  },
];

const Products = () => {
  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        <ListItem data={items[0]} />
        <ListItem data={items[1]} />
        <ListItem data={items[2]} />
      </div>
    </div>
  );
};

export default Products;
