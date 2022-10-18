import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          qty: 2,
          img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662704623/Croma%20Assets/Wearable/Wearable%20Devices/Images/262051_vtjvks.png/mxw_1366,f_auto",
          title: "Watch",
          price: 3700
        },
        {
          id: 2,
          qty: 3,
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
          title: "Phone",
          price: 700
        },
        {
          id: 3,
          qty: 1,
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1632861342000",
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

  render() {
    const {products} = this.state;
    let totalQty = 0, totalPrice=0;
    products.map((product)=>{
      totalQty += product.qty;
      totalPrice += (product.qty * product.price);
    });
    return (
      <div className="App">
        <Navbar totalQty={totalQty}/>
        <Cart 
        products={products} 
        increaseQty ={this.HandleIncreaseQty} 
        decreaseQty = {this.HandleDecreaseQty} 
        deleteProduct = {this.HandleDeleteCartItem}
        />
        <div style={{fontSize: 27, padding: 30}}>TotalPrice: {totalPrice}</div>
      </div>
    );
  }
}

export default App;
