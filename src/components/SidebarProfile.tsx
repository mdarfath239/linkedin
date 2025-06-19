
import { Plus, ShieldCheck, Briefcase, Bookmark, Users, Newspaper, CalendarDays } from "lucide-react";

const SidebarProfile = () => {
  return (
    <div className="bg-white shadow rounded-xl border border-gray-200 overflow-hidden flex flex-col py-0 px-0 mb-4 sm:mb-6 mx-2 sm:mx-0">
      {/* Banner */}
      <div className="h-12 sm:h-14 md:h-16 lg:h-[56px] bg-gray-200 relative">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
          alt="Banner"
          className="object-cover w-full h-full"
        />
        {/* Avatar - responsive sizing and positioning */}
        <div className="absolute left-1/2 -bottom-6 sm:-bottom-7 md:-bottom-8 lg:-bottom-9 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full border-2 sm:border-3 md:border-4 border-white shadow bg-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl">
              MA
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile info - responsive padding and spacing */}
      <div className="pt-8 sm:pt-10 md:pt-11 lg:pt-12 pb-2 px-3 sm:px-4 lg:px-5 flex flex-col items-center text-center">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-2">
          <span className="font-semibold text-sm sm:text-base lg:text-lg leading-tight truncate max-w-[140px] sm:max-w-[160px] lg:max-w-[170px]">Mohammed Arfath</span>
          <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#0A66C2]" />
        </div>
        <div className="text-xs sm:text-sm text-gray-500 mt-1 px-2 text-center line-clamp-2">
          "Full-Stack MERN Developer | React.js | Node.js | MongoDB | ..."
        </div>
        <div className="text-xs text-gray-500 mt-1 mb-2">Bengaluru, Karnataka</div>
        
        {/* Add Experience button - responsive */}
        <button className="flex items-center justify-center gap-1 border border-dashed border-[#0A66C2] bg-[#F3F6F8] w-full rounded px-2 sm:px-3 py-1 sm:py-1.5 text-[#0A66C2] font-semibold text-xs sm:text-sm mb-1 transition hover:bg-[#EDF3F8]">
          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Experience</span>
          <span className="sm:hidden">Add Experience</span>
        </button>
      </div>
      
      {/* Stats - responsive layout */}
      <div className="bg-white border-t border-b border-gray-100 flex flex-col sm:flex-row justify-between px-3 sm:px-5 py-2 text-xs font-medium">
        <div className="flex justify-between sm:flex-col sm:items-start mb-1 sm:mb-0">
          <span className="text-gray-500">Profile viewers</span>
          <span className="text-[#0A66C2] font-bold cursor-pointer">123</span>
        </div>
      </div>
      
      <div className="bg-white border-b border-gray-100 flex flex-col sm:flex-row justify-between px-3 sm:px-5 py-2 text-xs font-medium">
        <div className="flex justify-between sm:flex-col sm:items-start">
          <span className="text-gray-500">Post impressions</span>
          <span className="text-[#0A66C2] font-bold cursor-pointer">806</span>
        </div>
      </div>
      
      {/* Premium CTA - responsive layout */}
      <div className="bg-white border-b border-gray-100 py-3 px-3 sm:px-5 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-md font-semibold text-xs">🔖</span>
            <span className="font-medium text-gray-700 text-xs sm:text-sm">Network smarter with Premium</span>
          </div>
          <button className="sm:ml-2 mt-1 sm:mt-0 text-[#0A66C2] text-xs sm:text-[13px] font-bold hover:underline self-start">
            Try for ₹0
          </button>
        </div>
      </div>
      
      {/* Quick links - responsive grid */}
      <div className="pt-2 pb-1 px-2 sm:px-4 grid grid-cols-1 gap-0.5 sm:gap-1">
        <SidebarLink icon={<Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />} label="Saved items" />
        <SidebarLink icon={<Users className="w-3 h-3 sm:w-4 sm:h-4" />} label="Groups" />
        <SidebarLink icon={<Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />} label="Newsletters" />
        <SidebarLink icon={<CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />} label="Events" />
      </div>
    </div>
  );
};

function SidebarLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-2 sm:gap-3 px-1 sm:px-2 py-1.5 sm:py-2 w-full text-sm sm:text-[15px] text-[#24292F] rounded hover:bg-gray-100 transition-colors">
      {icon}
      <span className="text-xs sm:text-sm">{label}</span>
    </button>
  );
}

export default SidebarProfile;
