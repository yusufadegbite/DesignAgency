import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-white text-center">
      <p className="text-green-600 font-bold text-xs tracking-widest mb-4">SUBSCRIBE</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
        Subscribe To Get The Latest<br />
        News About Us
      </h2>
      <p className="text-gray-400 text-sm mb-10">
        Please Drop Your Email Below To Get Daily Update About What We Do
      </p>

      {/* Email Input */}
      <div className="flex items-center max-w-xl mx-auto border-2 border-gray-200 rounded-xl overflow-hidden px-2 py-1 focus-within:border-green-400 transition-all">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Adress"
          className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}