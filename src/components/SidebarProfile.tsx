
import { Plus, ShieldCheck, Briefcase, Bookmark, Users, Newspaper, CalendarDays } from "lucide-react";

const SidebarProfile = () => {
  return (
    <div className="bg-white shadow rounded-xl border border-gray-200 overflow-hidden flex flex-col py-0 px-0 mb-6">
      {/* Banner */}
      <div className="h-[56px] bg-gray-200 relative">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
          alt="Banner"
          className="object-cover w-full h-full"
        />
        {/* Avatar */}
        <div className="absolute left-1/2 -bottom-9 transform -translate-x-1/2">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow"
            />
            {/* Blue plus icon */}
            <span className="absolute right-0 bottom-1 bg-white rounded-full border border-gray-300 p-1 shadow-sm">
              <Plus className="w-5 h-5 text-[#0A66C2]" />
            </span>
          </div>
        </div>
      </div>
      {/* Profile info */}
      <div className="pt-12 pb-2 px-5 flex flex-col items-center text-center">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-lg leading-tight truncate max-w-[170px]">Mohammed Arfath</span>
          <ShieldCheck className="w-4 h-4 text-[#0A66C2]" />
        </div>
        <div className="text-xs text-gray-500 mt-1">"Full-Stack MERN Developer | React.js | Node.js | MongoDB | ..."</div>
        <div className="text-xs text-gray-500 mt-1 mb-2">Bengaluru, Karnataka</div>
        {/* Add Experience button */}
        <button
          className="flex items-center justify-center gap-1 border border-dashed border-[#0A66C2] bg-[#F3F6F8] w-full rounded px-3 py-1.5 text-[#0A66C2] font-semibold text-sm mb-1 transition hover:bg-[#EDF3F8]"
        >
          <Plus className="w-4 h-4" />
          Experience
        </button>
      </div>
      {/* Stats */}
      <div className="bg-white border-t border-b border-gray-100 flex flex-row justify-between px-5 py-2 text-xs font-medium">
        <span className="text-gray-500">Profile viewers</span>
        <span className="text-[#0A66C2] font-bold cursor-pointer">123</span>
      </div>
      <div className="bg-white border-b border-gray-100 flex flex-row justify-between px-5 py-2 text-xs font-medium">
        <span className="text-gray-500">Post impressions</span>
        <span className="text-[#0A66C2] font-bold cursor-pointer">806</span>
      </div>
      {/* Premium CTA */}
      <div className="bg-white border-b border-gray-100 py-3 px-5 text-xs">
        <div className="flex items-center gap-2">
          <span className="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-md font-semibold text-xs">🔖</span>
          <span className="font-medium text-gray-700">Network smarter with Premium</span>
        </div>
        <button className="ml-6 mt-1 text-[#0A66C2] text-[13px] font-bold hover:underline">Try for ₹0</button>
      </div>
      {/* Quick links */}
      <div className="pt-2 pb-1 px-4 grid gap-1">
        <SidebarLink icon={<Bookmark className="w-4 h-4" />} label="Saved items" />
        <SidebarLink icon={<Users className="w-4 h-4" />} label="Groups" />
        <SidebarLink icon={<Newspaper className="w-4 h-4" />} label="Newsletters" />
        <SidebarLink icon={<CalendarDays className="w-4 h-4" />} label="Events" />
      </div>
    </div>
  );
};

function SidebarLink({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-3 px-2 py-2 w-full text-[15px] text-[#24292F] rounded hover:bg-gray-100 transition-colors">
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default SidebarProfile;
