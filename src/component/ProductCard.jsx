import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProductCard({ item, index }) {
    let navigate = useNavigate();
    return (

        <div className='col-sm-4 mb-3'>
            <div class="card" style={{ 'width': '18rem' }}>
                <img src={item.imgdata} class="card-img-top" style={{'cursor': 'pointer'}} alt={item.rname} height={214} width={286} onClick={() => { navigate('/product/' + item.rname) }} />
                <div class="card-body">
                    <h5 class="card-title">{item.rname}</h5>
                    <p class="card-text"><span style={{ fontWeight: 600 }}>Price: ${item.price}</span></p>
                    <p class="card-text"><span style={{ fontWeight: 600 }}>Rating: ${item.rating}</span></p>
                    <a href="javascript:void(0)" class="btn btn-outline-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Add to cart</a>
                </div>
            </div>
        </div>
    )
}
