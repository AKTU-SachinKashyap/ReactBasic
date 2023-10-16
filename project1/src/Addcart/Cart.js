import React, { useState } from 'react'
import './Cart.css';
import {Scrollbars } from 'react-custom-scrollbars-2';
import Items from './items'
import { products } from './Products';



// 6.  ****** 6. useReducer: Build a component that simulates a basic e-commerce cart check out process. Use useReducer to manage the cart state, including adding items, applying discounts, and displaying the final total.







function Cart() {

  const [item, setItem]=useState(products);


  return (
    <>
    <header>
        <div className='continue-shopping'>
                {/* <img src='./img/p1.jpg'
                width={100} alt='p1'></img> */}
                {/* <p>5</p> */}
        </div>
    </header>

    <section className='main-cart-section'> 
      <h1>shopping Cart </h1>

      <p className='total-items'>you have<span className='total-items-count'> 5 </span>items in shopping cart</p>

      <div className='cart-items'>
        <div className='cart-items-container'>
          <Scrollbars>
            
            {
              item.map((curItem)=>{
                return <Items key={curItem.id} {...curItem}></Items>
              })
            }
          </Scrollbars>
        </div>
      </div>

      <div>
        <h3>Cart Total:<span>2200rs</span></h3>
        <button>checkout</button>
      </div>

    </section>
    </>
  )
}

export default Cart
