import axios from "axios";
import {useEffect, useState} from "react";
import Products from "./Products";
import Footer from "../shared/Footer";
import NavigationDropDown from "./NavigationDropDown";
import TopBar from "./TopBar";
import ShoppingCartIcon from "./ShoppingCartIcon";



export default function DisplayProduct() {
    const [data,setData]=useState([]);
    useEffect( () => {
        (async function getData() {
            const result = await axios.get("http://localhost:8084/product");
            const newData= result.data;
            console.log("newData", newData)
            setData(newData);
        })();
},[])

    console.log("My data is ", data);
    return(
        <div>
            <TopBar data ={data} onProductSearch ={setData}  />
            <NavigationDropDown/>
            <div><h1>Products</h1></div>
            <Products products ={data} />
            {/*<ShoppingCartIcon/>*/}

            <iframe width="1560" height="535" src="https://www.youtube.com/embed/BsDj1dsyFn4"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            <Footer/>

        </div>
    )

}