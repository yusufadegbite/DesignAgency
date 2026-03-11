import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="relative bg-[#D7F5DC] min-h-[520px] flex flex-col md:flex-row items-center px-6 sm:px-10 md:px-16 pt-10 overflow-hidden">

      {/* Hero Text Content */}
      <div className="w-full md:w-[460px] flex-none z-20 pb-8 md:pb-16 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
          Increase Your<br />
          Customers Loyalty<br />
          and Satisfaction
        </h1>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
          We help businesses like yours earn more customers,<br />
          standout from competitors, make more money
        </p>
        <button className="px-8 py-4 bg-green-600 text-white rounded-xl text-base font-semibold hover:bg-green-700 transition-all">
          Get Started
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full md:flex-1 flex justify-center items-end z-20 h-[300px] sm:h-[380px] md:h-[480px]">
        <img
          src={heroImage}
          alt="Happy professional with laptop"
          className="h-full object-cover object-top"
        />
      </div>
    </section>
  );
}