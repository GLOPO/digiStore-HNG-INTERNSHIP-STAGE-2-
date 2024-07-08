import React from 'react'
import Products from './components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';

const page = () => {
  return (
    <main className=' bg-slate-200'>
      <div>
        <h6 className='text-center my-4 border-b font-semibold'>Gadget<b className='text-purple-500'>HAVEN</b></h6>
      </div>
      <hr />
      <Products />
    </main>
  )
}

export default page