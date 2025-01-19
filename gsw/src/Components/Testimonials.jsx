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
      rating: 4,
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
      rating: 4,
    },
    {
      image: f5,
      name: "Ajay Patel",
      review: "Great experience! Definitely exceeded my expectations.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change testimonial every 3 seconds and loop through
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Loop back to first testimonial
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gray-100 flex flex-col justify-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>

      {/* Testimonial Container with sliding effect */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide the testimonials
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none w-full max-w-xs mx-2 bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={`Testimonial ${index + 1}`}
                className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path d="M12 17.75l6.09 3.51-1.64-7.07L22 9.25l-7.19-.61L12 2 9.19 8.64 2 9.25l5.54 4.94-1.64 7.07L12 17.75z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
