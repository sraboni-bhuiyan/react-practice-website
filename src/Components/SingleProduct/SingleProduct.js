import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./SingleProduct.css";

const SingleProduct = (props) => {
    const {setCartCount} = props;

    console.log(props)
    return(
        <div className="col-md-4">
           <div data-aos="flip-left" className="card p-3 border">
               <img className="w-50 m-auto" src={props.product.image} alt="" />
               <h3>{props.product.title.slice(0,20)}</h3>
               <div className="d-flex justify-content-around">
               <button onClick={setCartCount} className="btn btn-outline-success">Add to Cart</button>
               <button className="btn btn-outline-danger">Delete</button>
               {/* <button className="btn btn-outline-info">Details</button> */}
               <ReactModal product={props.product}></ReactModal>
               </div>
           </div>
        </div>
    )
};

export default SingleProduct;