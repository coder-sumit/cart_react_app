import React from "react";

const Navbar = (props)=>{
    return (
            <nav style={styles.nav}>
               <img style={styles.cartIcon} className="right" src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="cart icon">
               </img>
               <div style={styles.qty}>
                   {props.totalQty}
               </div>
            </nav>
        )
    }

const styles = {
    nav: {
        height: 64,
        backgroundColor: "#eee",
        position: "relative"
    },
    cartIcon:{
       width: "30px",
       position: "absolute",
       top: "15px",
       right: "40px"
    },
    qty:{
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        fontSize: "12px",
        position: "absolute",
        top: "10px",
        right: "17px",
        padding: "4px"
    }
}
export default Navbar;