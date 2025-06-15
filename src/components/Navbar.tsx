
import React, { useRef, useState } from "react";
import { User, Bell, MessageSquare, Briefcase, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProfileModal from "./ProfileModal";

const Navbar = ({ onSearch, onMeClick }: { onSearch?: (q: string) => void; onMeClick?: () => void }) => {
  const { toast } = useToast();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Search handler
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = searchInputRef.current?.value.trim() || "";
    if (!value) return;
    onSearch?.(value);
    toast({
      title: "Search",
      description: `You searched for: "${value}"`,
    });
    searchInputRef.current!.value = "";
  };

  // Icon handlers
  const handleMessaging = () =>
    toast({ title: "Messaging", description: "Opening messaging..." });
  const handleNotifications = () =>
    toast({ title: "Notifications", description: "Showing notifications..." });

  return (
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
          <form className="relative w-full max-w-[750px]" onSubmit={handleSearch}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              className="w-full rounded-full px-5 py-2 text-lg bg-[#f2f6fa] border-0 focus:outline-none text-gray-500 placeholder:text-gray-400 font-normal shadow-none"
              style={{
                boxShadow: "none",
                fontFamily: "'Segoe UI', Arial, sans-serif",
                background: "#f2f6fa",
              }}
            />
            <button
              type="submit"
              className="absolute right-4 top-2.5 text-gray-400 hover:text-[#0A66C2] outline-none"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-12">
          <NavIcon Icon={Briefcase} label="Jobs" />
          <NavIcon Icon={MessageSquare} label="Messaging" onClick={handleMessaging} />
          <NavIcon Icon={Bell} label="Notifications" onClick={handleNotifications} />
          <NavIcon Icon={User} label="Me" onClick={onMeClick} />
        </div>
      </nav>
    </header>
  );
};

function NavIcon({
  Icon,
  label,
  onClick,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="group flex flex-col items-center justify-center px-1 pt-0.5 focus:outline-none hover:text-[#0A66C2] transition-colors"
      onClick={onClick}
      type="button"
    >
      <Icon className="w-7 h-7 mb-0.5 group-hover:text-[#0A66C2] text-gray-500" />
      <span className="text-[13px] leading-3 text-gray-500 group-hover:text-[#0A66C2] font-normal mt-0.5">{label}</span>
    </button>
  );
}

export default Navbar;
