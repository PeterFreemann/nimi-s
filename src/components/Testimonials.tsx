import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  location: string;
}

const testimonialData: Testimonial[] = [
  {
    name: "Adaora Johnson",
    rating: 5,
    comment: "Finally found authentic Nigerian ingredients in the UK! The palm oil is exactly like home.",
    location: "London"
  },
  {
    name: "Marcus Williams",
    rating: 5,
    comment: "Fast delivery and excellent quality. The plantains were perfectly ripe and fresh.",
    location: "Birmingham"
  },
  {
    name: "Grace Mensah",
    rating: 4,
    comment: "Great selection of Ghanaian products. Will definitely order again!",
    location: "Manchester"
  }
];

export default function Testimonials(): JSX.Element {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}