import port1 from '../assets/portfolio1.png';
import port2 from '../assets/portfolio2.png';
import port3 from '../assets/portfolio3.png';
import port4 from '../assets/portfolio4.png';

const projects = [
  {
    id: 1,
    image: port1,
    title: "Digital Marketing Agency Website",
    desc: "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand",
  },
  {
    id: 2,
    image: port2,
    title: "Digital Marketing Agency Website",
    desc: "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand",
  },
  {
    id: 3,
    image: port3,
    title: "Digital Marketing Agency Website",
    desc: "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand",
  },
  {
    id: 4,
    image: port4,
    title: "Digital Marketing Agency Website",
    desc: "This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand",
  },
];

export default function Portfolio() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-12 bg-white">
      {/* Header */}
      <p className="text-green-600 font-bold text-xs tracking-widest mb-3">OUR PORTFOLIO</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-10 md:mb-12">
        We provide the Perfect Solution<br />
        to your business growth
      </h2>

      {/* Grid: 1 col on mobile, 2 cols on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-14">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-4">
            {/* Image */}
            <div className="w-full overflow-hidden bg-gray-100 rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}