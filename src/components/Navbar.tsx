
import { User, Bell, MessageSquare, Briefcase, Search } from "lucide-react";

const Navbar = () => (
  <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
    <nav className="max-w-[1600px] mx-auto px-8 flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="text-[#0A66C2] font-black text-2xl select-none tracking-tight">LinkEdit</div>
      </div>
      {/* Search */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full px-4 py-2 bg-[#EDF3F8] border border-gray-200 focus:outline-none text-base"
          />
          <Search className="absolute right-3 top-2 text-gray-500 w-5 h-5" />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-6">
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
    <button className="group flex flex-col items-center justify-center px-2 focus:outline-none hover:text-[#0A66C2] transition-colors">
      <Icon className="w-6 h-6 mb-1 group-hover:text-[#0A66C2] text-gray-600" />
      <span className="text-xs leading-3 text-gray-600 group-hover:text-[#0A66C2] font-medium">{label}</span>
    </button>
  );
}

export default Navbar;
