import React from "react";

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: "Phone",
            qty: 1
        }
    }

    increaseQty = () => {
        // setState Form 1
        // if you don't need value of previous satate then use it
        // this.setState({
        //    qty: this.state.qty +1
           
        // })
        // this.setState({
        //    qty: this.state.qty +1
        // })
        // this.setState({
        //    qty: this.state.qty +1
        // })

        // setState Form 2
        // if you need previous value of state then use it
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })

       
    }

    decreaseQty = () => {
        this.setState((prevState) => {
            if (prevState.qty > 0) {

                return {
                    qty: prevState.qty - 1
                }
            }else{
                return;
            }
        })
    }

    render() {
        console.log("render");
        const { price, title, qty } = this.state;
       
        return (

            <div className="cart-item">
                <div className="left-block">
                    <img src="https://media.istockphoto.com/photos/mobile-phone-top-view-with-white-screen-picture-id1161116588?k=20&m=1161116588&s=612x612&w=0&h=NKv_O5xQecCHZic53onobxjqGfW7I-D-tBrzXaPbj_Q=" style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ fontSize: 25, color: "#ccc" }}>Rs {price}</div>
                    <div style={{ fontSize: 25, color: "#ccc" }}>Qty. {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons*/}
                        <img alt="increse" src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png" className="action-icons"
                            onClick={this.increaseQty}
                        ></img>
                        <img alt="decrease" src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png" className="action-icons"
                            onClick={this.decreaseQty}
                        ></img>
                        <img alt="delete" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" className="action-icons"></img>
                    </div>
                </div>
            </div>
        )

    }
}

const styles = {
    image: {
        width: 170,
        height: "100%",
        backgroundColor: "#eee"
    }
}

export default CartItem;