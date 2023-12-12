import React from "react";

export default function Product(props) {
  return (
    <div className="bg-white flex flex-col space-y-1 w-64 h-64">
      <img src={props.image} alt="Product" className="flex w-32 h-32 mx-auto" />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mb-2 mx-auto">{props.name}</h3>
        <div className="flex flex-row space-x-2 mx-auto">
          <p className="flex text-base">od</p>
          <p className="text-base font-bold text-orange-500">{props.price}</p>
          <p className="text-base mx-auto">zł</p>
        </div>
      </div>
    </div>
  );
}
