import React from "react";
import { watches, headphones } from "../../db";
import Image from "next/image";
import cart from '../assets/cart.jpg'
import Link from "next/link";

const Products = () => {
  return (
    <main className="container">
      <div className="flex justify-between items-baseline">
        <h1 className="my-4">Product Listing</h1>
        <Link href={'/pages/cart'}>
        <div className="w-5 rounded-full" role="button">
        <Image src={cart} alt="cart"/>
        </div>
        </Link>
      </div>
    {/* watches  */}
      <main>
        <h5 className="my-3">Smart Watches</h5>
        <div className="flex items-center justify-between">
          {watches.map((watch) => {
            const { id, name, image } = watch;

            return (
              <div key={id}>
                <div className="text-white border rounded w-48 bg-white">
                  <Image src={watch.image} alt="watch-1" />
                </div>

                <div>
                  <p className="text-black font-semibold mb-0 py-1">{name}</p>
                  <p className="mb-0 font-semibold">50,000</p>
                  <button className="text-white bg-purple-900 my-1 px-3 py-1 border rounded font-semibold">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* headphones  */}
      <main className="my-5">
      <h5 className="my-3">Headphones and Airpods</h5>
      <div className='flex items-center justify-between'>
        {headphones.map((headphone) => {
          const {id, name, image} = headphone

          return(
            <div key={id}>
              <div className='text-white border rounded w-48 bg-white'>
              <Image src={image} alt='watch-1'/>
              </div>

              <div>
                <p className='text-black font-semibold mb-0 py-1'>{name}</p>
                <p className='mb-0 font-semibold'>50,000</p>
                <button className='text-white bg-purple-900 my-1 px-3 py-1 border rounded font-semibold'>Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
    </main>
  );
};

export default Products;
