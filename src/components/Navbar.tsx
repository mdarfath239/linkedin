
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/my-network", label: "My Network" },
  { to: "/jobs", label: "Jobs" },
  { to: "/messaging", label: "Messaging" },
  { to: "/notifications", label: "Notifications" },
  { to: "/me", label: "Me" },
];

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white flex items-center justify-between px-4 py-2 border-b shadow-sm z-30 relative">
      {/* Left | Logo & Search */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div
          className="flex items-center text-2xl font-black text-[#1573cf] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Link<span className="font-black text-[#0A66C2]">Edit</span>
        </div>
        {/* Search Bar */}
        <div className="relative w-56">
          <span className="absolute left-3 top-2 text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1.5 text-base bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0A66C2] w-full"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{fontWeight: 400, color: "#555"}}
          />
        </div>
      </div>
      {/* Center | Navigation Links */}
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.to}
            onClick={() => navigate(link.to)}
            className={`
              bg-transparent outline-none border-0 text-base font-medium px-1 transition
              ${location.pathname === link.to ? "text-[#0A66C2] font-semibold" : "text-gray-800"}
            `}
            style={{ minWidth: 0 }}
          >
            {link.label}
          </button>
        ))}
      </div>
      {/* Right | Auth and Profile actions */}
      <div className="flex items-center gap-3">
        <button
          className="text-[#0A66C2] border border-[#0A66C2] rounded-full px-5 py-1.5 font-semibold text-base bg-white hover:bg-[#eaf2fa] transition"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
        <button
          className="bg-[#0A66C2] hover:bg-[#1573cf] transition text-white rounded-full px-6 py-1.5 font-bold text-base shadow-none border-0"
          onClick={() => navigate("/signup")}
        >
          Join now
        </button>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition select-none ml-1">
          <div className="w-7 h-7 rounded-full bg-[#E5EAF0] flex items-center justify-center overflow-hidden border border-gray-200">
            {/* Empty avatar SVG */}
            <svg width={22} height={22} viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="12" r="7" fill="#B0B8C1" opacity="0.35" />
              <ellipse cx="16" cy="25" rx="11" ry="5" fill="#B0B8C1" opacity="0.35" />
            </svg>
          </div>
          <span className="ml-1 text-base text-black font-medium">Me</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
