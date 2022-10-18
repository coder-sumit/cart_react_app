import React from "react";
import CartItem from "./CartItem";

const Cart = (props)=> {
  
        const {products, increaseQty, decreaseQty, deleteProduct} = props;
        // console.log(products);
        return (
            <div className="cart">
               {products.map((product)=>{
                  return <CartItem 
                  product = {product} 
                  key={product.id}
                  increaseQty= {increaseQty}
                  decreaseQty= {decreaseQty}
                  deleteProduct = {deleteProduct}
                  />
               })}
            </div>
        )
    

}

export default Cart;