import React, { useState } from "react";
import { Bell, MessageSquare, Search } from "lucide-react";

const Navbar = ({
  onSearch,
  onMeClick,
}: {
  onSearch: (q: string) => void;
  onMeClick: () => void;
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-white flex items-center justify-between px-6 py-3 border-b shadow-sm">
      {/* Logo and search */}
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-[#0A66C2] mr-2">
          <a href="/">LinkedClone</a>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#0A66C2] focus:border-[#0A66C2]"
            placeholder="Search..."
            required
            value={search}
            onChange={handleSearch}
          />
        </div>
        {/* Main nav links */}
        <a
          href="/"
          className="flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Home
        </a>
        <a
          href="/my-network"
          className="flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          My Network
        </a>
        <a
          href="/jobs"
          className="flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Jobs
        </a>
        <a
          href="/messaging"
          className="flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Messaging
        </a>
        <a
          href="/notifications"
          className="flex flex-col items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-[#0A66C2] border-b-2 border-transparent hover:border-[#0A66C2] transition"
        >
          Notifications
        </a>
      </div>
      {/* Profile/Me link and auth */}
      <div className="flex items-center gap-4">
        <a
          href="/login"
          className="border-2 border-[#0A66C2] text-[#0A66C2] rounded-full px-5 py-1.5 font-semibold hover:bg-[#0A66C2] hover:text-white transition"
        >
          Sign in
        </a>
        <a
          href="/signup"
          className="rounded-full px-5 py-1.5 bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] border-2 border-[#0A66C2] transition"
        >
          Join now
        </a>
        <button
          onClick={onMeClick}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition"
        >
          <img
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">Me</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
