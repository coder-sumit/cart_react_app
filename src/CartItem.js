import React from "react";

const CartItem= (props)=>{

        // console.log("render");
        const { price, title, qty, img } = props.product;
        const {decreaseQty, increaseQty, deleteProduct, product} = props;

        
        return (

            <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ fontSize: 25, color: "#ccc" }}>Rs {price}</div>
                    <div style={{ fontSize: 25, color: "#ccc" }}>Qty. {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons*/}
                        <img alt="increse" 
                        src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png" 
                        className="action-icons"
                        onClick={()=>increaseQty(product)}
                        ></img>
                        <img alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png" 
                        className="action-icons"
                        onClick={()=> decreaseQty(product)}
                        ></img>
                        <img alt="delete" 
                        onClick={()=> deleteProduct(product)} 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" 
                        className="action-icons"></img>
                    </div>
                </div>
            </div>
        )

    
}

const styles = {
    image: {
        width: 170,
        height: "100%",
        backgroundColor: "#eee"
    }
}

export default CartItem;