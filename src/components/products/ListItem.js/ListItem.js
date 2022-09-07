import React from "react";

const ListItem =  ({data}) => {
    // const data = {
    //     discountedPrice : 340,
    //     price: 450,
    //     title : "Title of the item",
    //     thumbnail:"logo192.png"
    // }
  return (
    <div className="item-card">
      <img className="img-fluid" src="./logo192.png" alt="react title" />
      <div className="item-card__information">
            <div className="pricing">
            <span> ₹{data.discountedPrice} </span>
                <small>
                    <strike>{data.price}</strike>
                </small>
            </div>
            <div className="title">
            <h3>{data.title}</h3>
            </div>
      </div>
        <button className="cart-add">
            <span>Add to Cart</span>
            <img />
        </button>
    </div>
  );
};

export default ListItem;
