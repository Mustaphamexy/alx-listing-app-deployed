import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? 'bg-black text-white'
          : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;