import {
  FaLayerGroup,
  FaHistory,
  FaMicrochip,
  FaFlask,
  FaCheck,
} from "react-icons/fa";

const categories = [
  { name: "All", icon: <FaLayerGroup /> },
  { name: "Story", icon: <FaHistory /> },
  { name: "Tech", icon: <FaMicrochip /> },
  { name: "Science", icon: <FaFlask /> },
];

const CategorySidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="bg-[#1E293B]/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 h-fit sticky top-24">
      <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <div className="w-2 h-8 bg-[#FB8C00] rounded-full"></div>
        All Category
      </h2>

      <div className="flex flex-col gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${
              selectedCategory === cat.name
                ? "bg-[#FB8C00] text-white shadow-[0_10px_20px_rgba(251,140,0,0.3)]"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`text-lg ${selectedCategory === cat.name ? "text-white" : "text-[#FB8C00]/70 group-hover:text-[#FB8C00]"}`}
              >
                {cat.icon}
              </span>
              <span className="font-semibold">{cat.name}</span>
            </div>
            {selectedCategory === cat.name && (
              <FaCheck className="text-white text-xs" />
            )}
          </button>
        ))}
      </div>

      {/* Quick Stats or Promo info could go here for "Pro" feel */}
      <div className="mt-12 p-5 rounded-2xl bg-linear-to-br from-[#FB8C00]/20 to-transparent border border-[#FB8C00]/10">
        <p className="text-xs text-slate-400 leading-relaxed">
          Explore our vast library of hand-picked titles across various genres.
        </p>
      </div>
    </aside>
  );
};

export default CategorySidebar;
