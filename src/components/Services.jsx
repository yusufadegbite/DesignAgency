import activity from '../assets/Activity.png';
import heart from '../assets/Heart.png';
import work from '../assets/Work.png';
import vector from '../assets/Vector.png';

const services = [
  {
    icon: activity,
    title: "Grow Your Business",
    desc: "We help identify the best ways to improve your business",
  },
  {
    icon: heart,
    title: "Improve brand loyalty",
    desc: "We help identify the best ways to improve your business",
  },
  {
    icon: work,
    title: "Improve Business Model",
    desc: "We help identify the best ways to improve your business",
  },
];

export default function Services() {
  return (
    <section className="px-6 md:px-12 lg:px-16 pt-16 pb-10 bg-white">
      <p className="text-[#20B15A] font-bold text-xs tracking-widest mb-3">
        WHAT WE DO
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-12">
        We provide the Perfect Solution<br />
        to your business growth
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            className="group p-8 md:p-10 rounded-3xl hover:bg-white transition-all duration-300 hover:shadow-xl"
            key={service.title}
          >
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-2xl mb-5">
              <img src={service.icon} alt="icon" />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {service.title}
            </h3>

            <p className="text-sm text-gray-500 md:pr-[8rem] leading-relaxed mb-4">
              {service.desc}
            </p>

            <a
              href="#"
              className="text-sm font-[18px] text-gray-800 mt-3 px-5 py-3 rounded-xl bg-transparent text-black group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Learn More
              <span>
                <img src={vector} alt="arrow" className="w-[16px] h-[14px]" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}