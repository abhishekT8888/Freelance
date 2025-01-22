import React from 'react'; 
import p9 from "../gsw images/p9.webp";
import p8 from "../gsw images/p8.webp";
import p5 from "../gsw images/p5.webp";
import p6 from "../gsw images/p6.webp";
import p7 from "../gsw images/p7.webp";
import p4 from "../gsw images/p4.webp";

function OurProduct() {
  const products = [
    {
      id: 1,
      image: p9,
      description: "GSW Hi Tech Reversible Plough"
    },
    {
      id: 2,
      image: p8,
      description: "Two Bottam GSW Hydraulic Reversible Plough"
    },
    {
      id: 3,
      image: p5,
      description: "GSW Hi Tech Auto Reversible Plough"
    },
    {
      id: 4,
      image: p6,
      description: "GSW Hi Tech Highted Reversible Plough"
    },
    {
      id: 5,
      image: p7,
      description: "GSW Hi Tech Kubota Special Reversible Plough"
    },
    {
      id: 6,
      image: p4,
      description: "GSW Fighter Rotavator Reversible Plough"
    },
  ];

  return (
    <div className="p-5 mt-14">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-20 ">Our Products</h1>
      <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-200 p-6 rounded-lg max-w-sm mx-auto shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl mb-10">
            <img 
              src={product.image} 
              alt={`Product ${product.id}`} 
              className="w-full rounded-lg" 
            />
            <div className="mt-4 text-center">
              <p className="text-black mb-3 text-lg font-semibold">
                {product.description}
              </p>
              <button 
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProduct;
