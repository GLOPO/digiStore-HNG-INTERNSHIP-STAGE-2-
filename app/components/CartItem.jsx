import React from "react";
import { items } from "@/db";
import Image from "next/image";
import back from "../assets/back.jpg";
import waste from "../assets/delete.jpg";

const CartItem = () => {
  return (
    <main className="container my-4 mx-auto bg-white w-1/2 border rounded p-12 ">
      <main>
        <div className="flex gap-2 items-center mb-2">
          <Image src={back} alt="back" />
          <p className="text-purple-500 fw-semibold ">Continue Shopping</p>
        </div>
        <h1 className="text-black fw-bolder text-2xl mb-2">My Cart</h1>
        <hr />
      </main>

      <main>
        {items.map((item) => {
          const { id, name, image } = item;

          return (
            <>
              <div
                key={id}
                className="container mt-5 flex gap-4 justify-start items-start mb-4"
              >
                <div className="w-40 border rounded ">
                  <Image src={image} alt="product" />
                </div>

                <div className="flex flex-col justify-between gap-12 w-full">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col ">
                      <p className="text-muted text-xs fw-bold">
                        Headsets and Airpods
                      </p>
                      <h1 className="font-bold text-black ">
                        Bluetooth and headphones
                      </h1>
                    </div>
                    <Image src={waste} alt="delete button" role="button" />
                  </div>

                  <div className="flex justify-between items-center ">
                    <div className="border flex gap-4 px-2 py-1 rounded">
                      <p role="button">-</p>
                      <p>2</p>
                      <p role="button">+</p>
                    </div>
                    <h1 className="text-black text-xs font-bold">N50,000</h1>
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </main>

      <main>
        <div className="flex flex-col mt-8 gap-1 font-light text-xs mb-6">
          <div className="flex justify-between items-center">
            <p>Sub Total</p>
            <p>N150,000</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Delivery Fee</p>
            <p>N1,000</p>
          </div>
          <div className="flex justify-between items-center font-bold">
            <p>Total</p>
            <p>N151,000</p>
          </div>
        </div>

        <button className="bg-purple-700 w-full py-2 rounded text-white font-bold ">Checkout</button>
      </main>
    </main>
  );
};

export default CartItem;
