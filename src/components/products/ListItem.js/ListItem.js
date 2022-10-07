import React from "react";
import AddtoCart from "../../../assests/add_cart.svg"

const ListItem =  ({data}) => {
    // const data = {
    //     discountedPrice : 340,
    //     price: 450,
    //     title : "Title of the item",
    //     thumbnail:"logo192.png"
    // }

    let message = "Not added to cart yet";
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
      <small className={"cart-message"}>{message}</small>
        <button className="cart-add" onClick={()=>console.log("click" , data)}>
            <span>Add to Cart</span>
            <img src={AddtoCart} alt="Cart Icon" />
        </button>
    </div>
  );
};

export default ListItem;
