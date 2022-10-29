import ImageRendering from "./ImageRendering";
import Footer from "../shared/Footer";
import CartIcon from "./CartIcon";
import {faCartPlus, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {MDBBtn} from "mdb-react-ui-kit";
import axios from "axios";


export default function Product (props) {
    const value = props.product;

    // console.log("Images are", value)

    const onAddToCart = function (product) {
        (async function getData() {
            console.log(product);
            try {
                const body = {
                    product:{
                        productId: product.id
                    },
                    quantity: 1
                }
                const result = await axios.post("http://localhost:8084/user/shoppingCart", body)
                // console.log(result);
                alert(`Product ${product.name} added to you cart successfully`);
            } catch (error) {
                console.log(error);
            }

        })();
    }

    return(
        <div>

            <div>
                 {value.images.map((i,index) =>
             <ImageRendering key={index} image={i}/>
             )}
            </div>
            <div style={{ fontWeight: 'bold' }}>Name: {value.name}</div>
            <div  >Category: {value.category}</div>
            <div >
                <span style={{ color:"red" }}>Price: {value.price}$ </span>
                <MDBBtn color='dark' onClick={(e) => {
                    e.preventDefault();
                    onAddToCart(value)
                }}>
                    <FontAwesomeIcon icon={faCartPlus}/>
                </MDBBtn>
            </div>
            {/*<div> Description: {value.description}</div>*/}
            {/*<i><CartIcon/></i>*/}

            <div>
                <br/>
            </div>

        </div>
    )
}
