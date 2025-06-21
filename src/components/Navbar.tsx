import React, { useState } from "react";
import { Search, Home, Users, Briefcase, MessageSquare, Bell, Award } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ForBusinessDropdown from "./ForBusinessDropdown";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/my-network", label: "My Network", icon: Users },
  { to: "/jobs", label: "Jobs", icon: Briefcase },
  { to: "/messaging", label: "Messaging", icon: MessageSquare },
  { to: "/notifications", label: "Notifications", icon: Bell },
];

interface NavbarProps {
  onSearchChange?: (query: string) => void;
  searchQuery?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange, searchQuery = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <nav className="bg-white flex items-center justify-between px-4 py-2 border-b shadow-sm z-30 relative">
      {/* Left | Logo & Search */}
      <div className="flex items-center gap-6">
        {/* LinkedIn Logo */}
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">in</span>
          </div>
          <span className="text-2xl font-bold text-[#0A66C2] ml-1">LinkedIn</span>
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
            value={searchQuery}
            onChange={handleSearchChange}
            style={{fontWeight: 400, color: "#555"}}
          />
        </div>
      </div>
      
      {/* Center | Navigation Links with Icons */}
      <div className="flex items-center gap-8">
        {navLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <button
              key={link.to}
              onClick={() => navigate(link.to)}
              className={`
                bg-transparent outline-none border-0 flex flex-col items-center gap-1 px-2 py-1 transition
                ${location.pathname === link.to ? "text-[#0A66C2]" : "text-gray-600 hover:text-[#0A66C2]"}
              `}
            >
              <IconComponent size={24} />
              <span className="text-xs font-medium">{link.label}</span>
            </button>
          );
        })}
        
        {/* Me section with profile */}
        <button
          onClick={() => navigate("/me")}
          className={`
            bg-transparent outline-none border-0 flex flex-col items-center gap-1 px-2 py-1 transition
            ${location.pathname === "/me" ? "text-[#0A66C2]" : "text-gray-600 hover:text-[#0A66C2]"}
          `}
        >
          <div className="w-6 h-6 rounded-full bg-[#E5EAF0] flex items-center justify-center overflow-hidden border border-gray-200">
            <svg width={18} height={18} viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="12" r="7" fill="#B0B8C1" opacity="0.35" />
              <ellipse cx="16" cy="25" rx="11" ry="5" fill="#B0B8C1" opacity="0.35" />
            </svg>
          </div>
          <span className="text-xs font-medium">Me</span>
        </button>
        
        {/* For Business with Dropdown */}
        <ForBusinessDropdown />
        
        {/* Try Premium */}
        <button className="bg-transparent outline-none border-0 flex flex-col items-center gap-1 px-2 py-1 transition text-amber-600 hover:text-amber-700">
          <Award size={24} />
          <span className="text-xs font-medium">Try Premium for ₹0</span>
        </button>
      </div>
      
      {/* Right | Auth buttons (hidden when user is logged in) */}
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
      </div>
    </nav>
  );
};

export default Navbar;
