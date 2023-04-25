import { useState } from "react";
import axios from "axios";

function Product (props) {

    return (
        <div className="border border-slate-300 m-2"> 
        <p>
        ID: {props.id}
        </p>
        <p>
        Name: {props.name}
        </p>
            <img src={props.image} className="h-36 w-36 ml-32"></img>
        </div>
    )
}

export default Product;