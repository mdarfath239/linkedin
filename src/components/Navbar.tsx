
import { User, Bell, MessageSquare, Briefcase, Search } from "lucide-react";

// Enhanced logo style with tighter tracking and bold/cleaner look
const Navbar = () => (
  <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
    <nav className="max-w-[1600px] mx-auto px-8 flex items-center justify-between h-14">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="font-black text-3xl tracking-[-0.025em] select-none flex items-center"
          style={{
            color: "#0a66c2",
            fontFamily: "'Segoe UI', 'Arial', 'sans-serif'",
            letterSpacing: "-0.015em",
            textShadow: "0 1px 0 #ffffff40",
          }}
        >
          <span className="mr-1">L</span>ink<span className="ml-[-3px]">Edit</span>
        </div>
      </div>
      {/* Search */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <div className="relative w-full max-w-[750px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full px-5 py-2 text-lg bg-[#f2f6fa] border-0 focus:outline-none text-gray-500 placeholder:text-gray-400 font-normal shadow-none"
            style={{
              boxShadow: "none",
              fontFamily: "'Segoe UI', Arial, sans-serif",
              background: "#f2f6fa",
            }}
          />
          {/* Search icon, closer to the right edge */}
          <Search className="absolute right-4 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-12">
        <NavIcon Icon={Briefcase} label="Jobs" />
        <NavIcon Icon={MessageSquare} label="Messaging" />
        <NavIcon Icon={Bell} label="Notifications" />
        <NavIcon Icon={User} label="Me" />
      </div>
    </nav>
  </header>
);

function NavIcon({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button className="group flex flex-col items-center justify-center px-1 pt-0.5 focus:outline-none hover:text-[#0A66C2] transition-colors">
      {/* Larger icon, lighter color, closer to mockup, less bottom margin */}
      <Icon className="w-7 h-7 mb-0.5 group-hover:text-[#0A66C2] text-gray-500" />
      <span className="text-[13px] leading-3 text-gray-500 group-hover:text-[#0A66C2] font-normal mt-0.5">{label}</span>
    </button>
  );
}

export default Navbar;

