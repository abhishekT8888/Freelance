import React, { useState, useEffect } from "react";
import f1 from "../gsw images/1.jpg";
import f2 from "../gsw images/farmer-2.png";
import f3 from "../gsw images/farmer-3.png";
import f4 from "../gsw images/farmer-4.png";
import f5 from "../gsw images/farmer-5.png";

function Testimonials() {
  const testimonials = [
    {
      image: f1,
      name: "Ravi Kumar",
      review: "This is the best service I have ever used! Highly recommend it.",
      rating: 5,
    },
    {
      image: f2,
      name: "Suresh Yadav",
      review: "Amazing experience! Will definitely be back for more.",
      rating: 5,
    },
    {
      image: f3,
      name: "Vikram Singh",
      review: "Quality products and excellent customer service. Very happy.",
      rating: 5,
    },
    {
      image: f4,
      name: "Anil Sharma",
      review: "Fantastic service, and the products are top-notch. Highly recommend.",
      rating: 5,
    },
    {
      image: f5,
      name: "Ajay Patel",
      review: "Great experience! Definitely exceeded my expectations.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-xl ${i < rating ? "text-yellow-500" : "text-gray-300"}`}>
        &#9733;
      </span>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative bg-gray-100 py-10 mt-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-red-600 inline-block pb-2">
          Testimonials
        </h2>
      </div>
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 p-6 transition-all duration-1000 ease-in-out transform">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <div
                key={index}
                className="max-w-xs text-center opacity-0 animate-slide-in transition-opacity duration-1000"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <div className="flex justify-center gap-1 my-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
