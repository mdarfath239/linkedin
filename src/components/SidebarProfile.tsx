
import { Briefcase, Edit } from "lucide-react";

const SidebarProfile = () => {
  return (
    <div className="bg-white shadow border border-gray-200 rounded-lg overflow-hidden mb-6">
      <div className="h-20 bg-gradient-to-br from-[#0A66C2] to-[#044172] relative">
        <img
          src="https://randomuser.me/api/portraits/men/11.jpg"
          alt="Profile"
          className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white shadow"
        />
      </div>
      <div className="pt-12 pb-5 px-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="font-semibold text-lg">John Doe</span>
          <button className="ml-1 p-1 rounded-full hover:bg-gray-100 text-gray-500">
            <Edit className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm mt-1 text-[#0A66C2] font-medium">Software Engineer</div>
        <div className="mt-2 text-xs text-gray-500">San Francisco Bay Area • 500+ connections</div>
      </div>
      <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between text-xs text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors">
        <span>Profile Views</span>
        <span className="font-bold text-[#0A66C2]">361</span>
      </div>
      <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between text-xs text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors">
        <span>Connections</span>
        <span className="font-bold text-[#0A66C2]">534</span>
      </div>
      <div className="border-t border-b border-gray-100 px-4 py-3 flex items-center text-xs text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors">
        <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
        <span className="font-medium">Open to work</span>
      </div>
    </div>
  );
};

export default SidebarProfile;
