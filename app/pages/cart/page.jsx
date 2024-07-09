import CartItem from '@/app/components/CartItem'
import React from 'react'

const Cart = () => {
  return (
    <main className=' bg-slate-200'>
      <div>
        <h6 className='text-center my-4 border-b font-semibold '>Gadget<b className='text-purple-500'>HAVEN</b></h6>
      </div>
      <hr />

      <CartItem />
      
    </main>
  )
}

export default Cart