import projectPlan from '../assets/project-plan.png';
import raise from '../assets/raise.png';
import rating from '../assets/rating.png';
import timeline from '../assets/raise.png';

const stats = [
  { icon: projectPlan, label: "Completed Projects", value: "100 +" },
  { icon: rating, label: "Customer Satisfaction", value: "20 %" },
  { icon: raise, label: "Raised by Clients", value: "$10M" },
  { icon: timeline, label: "Years in Business", value: "2 yrs" },
];

export default function Stats() {
  return (
    <div className="bg-[#FAFFFB] px-6 sm:px-10 md:px-16 lg:px-[8rem] xl:px-[12rem]">
      <div className="grid grid-cols-2 md:grid-cols-4 mb-16 overflow-hidden border border-green-100 rounded-2xl">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center py-8 px-3 gap-2
              ${i % 2 !== 1 ? "border-r border-green-200" : ""}
              ${i < 2 ? "border-b border-green-200 md:border-b-0" : ""}
              md:border-b-0
              ${i < stats.length - 1 ? "md:border-r md:border-green-200" : "md:border-r-0"}
            `}
          >
            <div className="w-10 h-10 mb-1">
              <img src={stat.icon} alt={stat.label} className="w-full h-full object-contain" />
            </div>
            <p className="text-sm text-gray-500 text-center">{stat.label}</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-green-600">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}