import React from 'react';
import data from '../data';
import '../style/cart.css';
import { useSelector } from 'react-redux';
export default function Cart() {
    let { cartList } = useSelector(store => (store.cart));
    return (
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Cart List</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                {
                    cartList.length > 0 ?
                        cartList.map((el, index) => {
                            return (
                                <div class="card mb-3" style={{ "max-width": "540px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={el.data.imgdata} class="card-img-top" alt={el.data.rname} height={138} width={286} />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{el.data.rname}</h5>
                                                <h6>Price: {el.data.price}</h6>
                                                <div className='row'>
                                                    <div className='col-sm-6'>
                                                        <div class="wrapper">
                                                            <button class="cart-btn btn--minus" type="button" name="button">
                                                                -
                                                            </button>
                                                            <input class="quantity" type="text" name="name" value={el.quantity} />
                                                            <button class="cart-btn btn--plus" type="button" name="button">
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='col-sm-6'>
                                                        <a href="javascript:void(0)" class="btn btn-sm btn-outline-dark">Remove</a>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                        <>
                            <div class="alert alert-primary" role="alert" style={{ textAlign: 'center' }}>
                                Cart is empty!
                            </div>
                        </>
                }
            </div>
        </div>
    )
}
