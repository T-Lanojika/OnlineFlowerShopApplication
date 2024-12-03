import '../assets/CSS/layout.css';
import {flowers} from './FlowerDB';
import { useState } from 'react';


export default function Products(){
    const [carts,setCarts]=useState([]);

    const addToCart=(flower,quantity) =>{
        const existingItem = carts.find((item) => item.id === flower.id)
        if(existingItem){
            setCarts(
                carts.map(
                   (item) => item.id === flower.id ? {...item, qty:item.qty+quantity} : item
                )
            )
        }
        else{
            setCarts([...carts , {...flower,qty:quantity}])
        }
    }

    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product

                        
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}