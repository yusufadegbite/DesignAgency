import { useState } from "react";
import sophieMoore from '../assets/Sophie.png';
import right from '../assets/angle-right.png';
import left from '../assets/angle-left.png';

const testimonials = [
  {
    id: 1,
    text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    name: "Emily Stones",
    role: "CEO, Marketing Guru",
    image: sophieMoore,
  },
  {
    id: 2,
    text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    name: "Emily Stones",
    role: "CEO, Marketing Guru",
    image: sophieMoore,
  },
  {
    id: 3,
    text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    name: "Emily Stones",
    role: "CEO, Marketing Guru",
    image: sophieMoore,
  },
  {
    id: 4,
    text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    name: "Emily Stones",
    role: "CEO, Marketing Guru",
    image: sophieMoore,
  },
  {
    id: 5,
    text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    name: "Emily Stones",
    role: "CEO, Marketing Guru",
    image: sophieMoore,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 cards on desktop, 1 on mobile
  const visibleCount = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - visibleCount ? 0 : prev + 1
    );
  };

  const visibleCards = testimonials.slice(currentIndex, currentIndex + visibleCount);
  // If we don't have enough at end, wrap around
  const displayCards =
    visibleCards.length < visibleCount
      ? [...visibleCards, ...testimonials.slice(0, visibleCount - visibleCards.length)]
      : visibleCards;

  return (
    <section className="px-6 mt-5 md:px-16 py-16 bg-white">
      {/* Header Row */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <p className="text-green-600 font-bold text-xs tracking-widest mb-3">TESTIMONIALS</p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            See What Our Customer<br />
            Say About Us
          </h2>
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:border-green-600 hover:text-green-600 transition-all"
          >
            <img src={left} className="w-[14.36px] h-[24.94px]" alt="angle-left" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-100 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white transition-all"
          >
            <img src={right} className="w-[14.36px] h-[24.94px]" alt="right-angle" />
          </button>
        </div>
      </div>

      {/* Cards — desktop: 3 visible, mobile: 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayCards.map((t, i) => (
          <div
            key={`${t.id}-${i}`}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-7 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
          >
            <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}