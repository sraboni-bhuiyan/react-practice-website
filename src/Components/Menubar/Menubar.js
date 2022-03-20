import React from "react";
import "./Menubar.css";
const Menubar = (props) => {
    return(
        <div className="conatiner">
            <div className="row w-75 mx-auto">
                <div className="col-md-2 px-3 my-4 btn btn-success">Logo</div>
                <div className="col-md-10 menu-container d-flex justify-content-end">
                    <li className="items my-4 mx-2 px-3 btn btn-outline-success">Home</li>
                    <li className="items my-4 mx-2 px-3 btn btn-outline-success">Contact</li>
                    <li className="items my-4 mx-2 px-3 btn btn-outline-success">Cart <sup>{props.count}</sup></li>
                    <li className="items my-4 mx-2 px-3 btn btn-outline-success">Login</li>
                </div>
            </div>
        </div>
    )
}

export default Menubar;