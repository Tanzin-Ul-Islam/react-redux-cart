import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/header.css';
import { useSelector } from 'react-redux';

const Header = () => {
    let {cartCounter} = useSelector(store=>(store.cart))
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">React Redux Cart</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <div class="cart-wrapper mt-1">
                                <div class="cart-icon">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span class="cart-count">{cartCounter}</span>
                                </div>
                            </div>
                            <button class="btn btn-outline-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header