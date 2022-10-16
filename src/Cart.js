import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    qty: 2,
                    img: "",
                    title: "Watch",
                    price: 3700
                },
                {
                    id: 2,
                    qty: 7,
                    img: "",
                    title: "Phone",
                    price: 700
                },
                {
                    id: 3,
                    qty: 10,
                    img: "",
                    title: "HeadPhone",
                    price: 100
                }

            ]
        }
    }
    HandleIncreaseQty = (product)=>{
      const {products} = this.state;
      let productIndex = products.indexOf(product);
      products[productIndex].qty++;
      this.setState({
        products,
      });
    }


    HandleDecreaseQty = (product)=>{
        const {products} = this.state;
        let index = products.indexOf(product);
        if(products[index].qty >0){
            products[index].qty--;
        }
        this.setState({
            products,
        })
    }

    HandleDeleteCartItem= (product)=>{
        const {products} = this.state;
        const items = products.filter((prod)=>{
            return prod.id != product.id;
        });
        this.setState({
            products: items
        })
    }

    render(){
        const {products} = this.state;
        return (
            <div className="cart">
               {products.map((product)=>{
                  return <CartItem 
                  product = {product} 
                  key={product.id} 
                  increaseQty ={this.HandleIncreaseQty} 
                  decreaseQty = {this.HandleDecreaseQty} 
                  deleteProduct = {this.HandleDeleteCartItem}/>
               })}
            </div>
        )
    }

}

export default Cart;