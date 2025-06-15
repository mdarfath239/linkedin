
import { Briefcase, Users } from "lucide-react";

const SidebarSuggestions = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-5 mb-6">
      <div className="font-semibold text-[15px] mb-3 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-[#0A66C2]" />
        Suggested Jobs
      </div>
      <ul className="mb-4">
        <li className="mb-3">
          <div className="font-medium text-sm">Frontend Developer</div>
          <div className="text-xs text-gray-500">Codeline • Remote</div>
          <button className="mt-1 text-[#0A66C2] text-xs font-semibold hover:underline">Apply</button>
        </li>
        <li>
          <div className="font-medium text-sm">Product Manager</div>
          <div className="text-xs text-gray-500">ProManage • Berlin, DE</div>
          <button className="mt-1 text-[#0A66C2] text-xs font-semibold hover:underline">Apply</button>
        </li>
      </ul>
      <div className="font-semibold text-[15px] mb-3 flex items-center gap-2 mt-6">
        <Users className="w-5 h-5 text-[#0A66C2]" />
        People you may know
      </div>
      <ul>
        <li className="flex items-center mb-3">
          <img src="https://randomuser.me/api/portraits/women/8.jpg" className="w-8 h-8 rounded-full mr-3" alt="Anna" />
          <div>
            <div className="text-sm font-medium">Anna Fischer</div>
            <button className="text-[#0A66C2] text-xs font-semibold hover:underline">Connect</button>
          </div>
        </li>
        <li className="flex items-center">
          <img src="https://randomuser.me/api/portraits/men/18.jpg" className="w-8 h-8 rounded-full mr-3" alt="Greg" />
          <div>
            <div className="text-sm font-medium">Greg Wu</div>
            <button className="text-[#0A66C2] text-xs font-semibold hover:underline">Connect</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SidebarSuggestions;
