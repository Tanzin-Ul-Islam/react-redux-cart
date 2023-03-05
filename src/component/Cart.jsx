import React from 'react';
import data from '../data';
import '../style/cart.css';
export default function Cart() {
    return (
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Cart List</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                {
                    data.map((el, index) => {
                        return (
                            <div class="card mb-3" style={{ "max-width": "540px" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={el.imgdata} class="card-img-top" alt={el.rname} height={138} width={286} />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{el.rname}</h5>
                                            <h6>Price: {el.price}</h6>
                                            <div className='row'>
                                                <div className='col-sm-6'>
                                                    <div class="wrapper">
                                                        <button class="cart-btn btn--minus" type="button" name="button">
                                                            -
                                                        </button>
                                                        <input class="quantity" type="text" name="name" value={5} />
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
                    })
                }
            </div>
        </div>
    )
}
