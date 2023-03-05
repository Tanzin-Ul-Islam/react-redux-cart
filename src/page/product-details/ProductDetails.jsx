import React, { useEffect, useState } from 'react'
import data from '../../data'
import { useParams } from 'react-router-dom';
import "../../style/cart.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart-store/cartSlice';
export default function ProductDetails() {
    let dispatch = useDispatch();
    let { name } = useParams();
    const [productData, setProductData] = useState({})
    const [quantity, setQuantity] = useState(1);

    function getProductData() {
        for (let i = 0; i < data.length; i++) {
            if (data[i].rname == name) {
                setProductData(data[i]);
                break;
            }
        }
    }
    function increaseQuantity() {
        let inc = quantity + 1
        setQuantity(inc)
    }
    function decreaseQuantity() {
        if (quantity > 1) {
            let dec = quantity - 1
            setQuantity(dec)
        }

    }
    function handleAddingToCart(data) {
        dispatch(addToCart({ data: data, quantity: quantity }));
        setQuantity(1);
    }
    useEffect(() => {
        getProductData();
    }, [name]);
    return (
        <>
            <div className="container mt-2">
                <div class="card mb-3 mt-3" style={{ "max-width": "800px", "margin": "0 auto" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={productData?.imgdata} class="img-fluid rounded-start" alt="" style={{ height: '18rem' }} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{productData?.rname}</h5>
                                <p class="card-text" style={{ fontWeight: 600 }}>Resturant: {productData?.address}</p>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p class="card-text" style={{ fontWeight: 600 }}>Price: {productData?.price}</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p class="card-text" style={{ fontWeight: 600 }}>Rating: {productData?.rating}/5</p>
                                    </div>
                                </div>
                                <br />
                                <p class="card-text" style={{ fontWeight: 600 }}>OverView: {productData?.somedata}</p>
                                <div class="wrapper">
                                    <button class="cart-btn btn--minus" type="button" name="button" onClick={decreaseQuantity}>
                                        -
                                    </button>
                                    <input class="quantity" type="text" name="name" value={quantity} />
                                    <button class="cart-btn btn--plus" type="button" name="button" onClick={increaseQuantity}>
                                        +
                                    </button>
                                </div>
                                <a href="javascript:void(0)" class="btn btn-outline-success mt-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" onClick={() => {
                                    handleAddingToCart(productData)
                                }}>Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
