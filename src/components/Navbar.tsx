
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  onSearch,
  onMeClick,
}: {
  onSearch: (q: string) => void;
  onMeClick: () => void;
}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-white flex items-center justify-between px-2 sm:px-6 py-2 sm:py-3 border-b shadow-sm">
      {/* Logo and search */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center text-2xl font-bold text-[#0A66C2] mr-2">
          <a href="/" className="flex items-center gap-2">
            {/* LinkEdit "logo" as styled text */}
            <span className="font-black text-xl tracking-tight text-[#0A66C2]">LinkEdit</span>
          </a>
        </div>
        <div className="relative max-w-[140px] sm:max-w-none">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#0A66C2] focus:border-[#0A66C2]"
            placeholder="Search..."
            required
            value={search}
            onChange={handleSearch}
          />
        </div>
        {/* Main nav links, hidden on xs */}
        <a
          href="/"
          className="hidden sm:flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Home
        </a>
        <a
          href="/my-network"
          className="hidden sm:flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          My Network
        </a>
        <a
          href="/jobs"
          className="hidden sm:flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Jobs
        </a>
        <a
          href="/messaging"
          className="hidden sm:flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Messaging
        </a>
        <a
          href="/notifications"
          className="hidden sm:flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Notifications
        </a>
        <a
          href="/me"
          className="hidden sm:flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Me
        </a>
      </div>
      {/* Profile/Me link and auth */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => navigate("/login")}
          className="border-2 border-[#0A66C2] text-[#0A66C2] rounded-full px-4 py-1.5 text-xs sm:text-base font-semibold hover:bg-[#0A66C2] hover:text-white transition"
        >
          Sign in
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="rounded-full px-4 py-1.5 text-xs sm:text-base bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] border-2 border-[#0A66C2] transition"
        >
          Join now
        </button>
        <button
          onClick={onMeClick}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-2 sm:px-4 py-2 rounded-full transition"
        >
          {/* Placeholder for profile image */}
          <div className="w-8 h-8 rounded-full bg-[#E5EAF0] flex items-center justify-center overflow-hidden border border-gray-300">
            {/* Empty avatar SVG, no face */}
            <svg width={30} height={30} viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="24" r="12" fill="#B0B8C1" opacity="0.35" />
              <ellipse cx="32" cy="48" rx="18" ry="8" fill="#B0B8C1" opacity="0.35" />
            </svg>
          </div>
          <span className="hidden sm:inline text-sm font-medium">Me</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
