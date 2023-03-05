import React from 'react'
import data from '../../data'
import ProductCard from '../../component/ProductCard'
export default function Home() {
    return (
        <div className='container'>
            <div className='row'>
                {
                    data.map((el, index) => {
                        return (
                            <ProductCard item={el} index={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
