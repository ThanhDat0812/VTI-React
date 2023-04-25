import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    }

    getListProduct = function () {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                this.setState({
                    product: response.data
                });
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getListProduct();
    }

    render() {
        const productList = this.state.product.map(
            product =>
                <div key={product.id} className="text-center border border-slate-300 m-2">
                    <p>
                    {product.id}
                    </p>
                    <p>
                    {product.title}
                    </p>
                    <img src={product.image} className="w-1/4 ml-36"></img>
                </div>
                
        );

        return (
            <><h1 className=" text-center font-bold">Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "> 
                    {productList}
            </div>


                
           
                </>
                
        );
    }
}

export default Home
