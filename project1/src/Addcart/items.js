import React from 'react'
import { AiFillDelete,AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';




const items=({description,title, img, price,amount})=> {
  return (
    <>
      <div className='items-info'>

            <div>
                <img src='./img/p2.jpg' width={100} alt='p2 '></img>
            </div>

            <div className='title'>
                <h2>Samsung s21</h2>
                <p>black color</p>
            </div>

            <div className='add-minus-quantity'>
                <button ><AiFillPlusCircle  size='20px'   ></AiFillPlusCircle></button>
                <input type='text2' placeholder='2'></input>
                <button ><AiFillMinusCircle size='20px'   ></AiFillMinusCircle></button>
            </div>

            <div className='price'> 
                <h3>2000rs</h3>
            </div>

            <div>
                 <button ><AiFillDelete></AiFillDelete></button>
            </div>
            <hr></hr>

        </div>
    </>
  )
}

export default items
