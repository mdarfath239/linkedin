import React from "react";
import Navbar from "@/components/Navbar";
import { Plus, Pencil } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

// Placeholder SVG (no real face) for avatar
const AvatarPlaceholder = () => (
  <svg
    width={128}
    height={128}
    viewBox="0 0 128 128"
    fill="none"
    className="w-24 h-24 sm:w-32 sm:h-32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="64" cy="48" r="28" fill="#E5EAF0" stroke="#B0B8C1" strokeWidth="2" />
    <ellipse cx="64" cy="96" rx="40" ry="24" fill="#E5EAF0" stroke="#B0B8C1" strokeWidth="2" />
    {/* No face */}
  </svg>
);

const profileBG = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80";
const universityLogo = "https://upload.wikimedia.org/wikipedia/en/1/1c/Visvesvaraya_Technological_University_logo.png";

const Me: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f6f8] flex flex-col items-center px-1 sm:px-2 py-4 sm:py-8">
      <Navbar />
      <div className="w-full max-w-[900px] flex flex-col lg:flex-row gap-6">
        {/* Main - Profile card */}
        <div className="flex-1">
          <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-4 relative">
            {/* Banner */}
            <div className="relative h-[100px] sm:h-[150px] w-full">
              <img
                src={profileBG}
                alt="Cover"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Avatar - overlapping the banner, but a bit further down */}
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "78px" }}>
              <div className="relative group w-24 h-24 sm:w-32 sm:h-32">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg bg-[#E5EAF0] flex items-center justify-center overflow-hidden">
                  <AvatarPlaceholder />
                </div>
                {/* Upload/Edit button */}
                <button className="absolute bottom-2 right-2 bg-white border-2 border-blue-500 text-blue-500 rounded-full p-1.5 hover:bg-blue-50 transition">
                  <Plus className="text-[#0A66C2]" size={18} />
                </button>
              </div>
            </div>
            {/* Main content */}
            <div className="pt-28 sm:pt-32 pb-4 px-3 sm:px-6 flex flex-col gap-1 relative">
              <div className="flex flex-col xs:flex-row items-center gap-2 justify-center min-h-[40px]">
                <span className="text-xl sm:text-2xl font-bold">Mohammed Arfath</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="inline-block align-middle text-[#0A66C2] bg-gray-100 border border-[#0A66C2] rounded-full px-1">
                        <svg width="19" height="18" viewBox="0 0 19 18" className="inline" style={{verticalAlign: "-2px"}}>
                          <ellipse cx="9.5" cy="9" rx="8.5" ry="8" fill="white" stroke="#0A66C2" strokeWidth="1.5"/>
                          <path d="M4.5 10L7.5 13L14.5 6" stroke="#0A66C2" strokeWidth="2" fill="none"/>
                        </svg>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      Mohammed has verifications
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {/* Edit icon */}
                <button className="ml-0 sm:ml-2 p-1 bg-white border rounded-full hover:bg-gray-100 transition">
                  <Pencil size={16} />
                </button>
              </div>
              <div className="text-sm text-gray-700 font-medium mt-1 text-center">
                "Full Stack MERN Developer | React.js | Node.js | MongoDB | Express.js | Next.js | RESTful APIs ... Passionate about Building Responsive & User-Centric Web Applications"
              </div>
              <div className="flex flex-col xs:flex-row items-center text-xs text-gray-500 mt-1 gap-2 justify-center">
                Bengaluru, Karnataka, India •
                <a href="#" className="text-[#0A66C2] hover:underline">Contact info</a>
              </div>
              <div className="flex flex-col items-center gap-1 mt-1">
                <a href="https://github.com/mdarfath239" className="text-xs text-blue-700 hover:underline break-all">https://github.com/mdarfath239</a>
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 mb-4 items-center justify-center">
                  <span className="text-[#0A66C2] font-semibold text-sm">746 followers</span>
                  <span className="text-[#0A66C2] text-sm">• 500+ connections</span>
                  <div className="flex items-center gap-1 pl-2">
                    <img src={"/VTU-Logo.png"} alt="University" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border" />
                    <span className="text-xs text-[#44A33A] font-semibold whitespace-nowrap">Visvesvaraya Technological University</span>
                  </div>
                </div>
              </div>
              {/* Profile actions */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 justify-center">
                <Button variant="outline" className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#eaf2fa] text-xs sm:text-sm">Open to</Button>
                <Button variant="outline" className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#eaf2fa] text-xs sm:text-sm">Add profile section</Button>
                <Button variant="outline" className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#eaf2fa] text-xs sm:text-sm">Enhance profile</Button>
                <Button variant="outline" className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#eaf2fa] text-xs sm:text-sm">Resources</Button>
              </div>
            </div>
          </div>
          {/* Suggestion section (Below main profile card) */}
          <div className="bg-white rounded-xl border shadow-sm p-5 mt-4">
            <div className="text-base font-semibold mb-2">Suggested for you</div>
            <div className="text-gray-500 text-sm">Private to you</div>
          </div>
        </div>
        {/* Right sidebar */}
        <aside className="hidden lg:flex flex-col gap-4 mt-1 w-[340px] flex-shrink-0">
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold">Profile language</div>
              <button className="p-1 hover:bg-gray-100 rounded-full transition"><Pencil size={14}/></button>
            </div>
            <div className="text-sm text-gray-700 mb-4">English</div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-semibold">Public profile &amp; URL</div>
              <button className="p-1 hover:bg-gray-100 rounded-full transition"><Pencil size={14}/></button>
            </div>
            <a href="https://www.linkedin.com/in/arfath239" className="text-xs text-blue-700 hover:underline break-all">www.linkedin.com/in/arfath239</a>
          </div>
          <div className="bg-white rounded-xl border shadow-sm p-4 text-center">
            <div className="text-xs text-gray-500 mb-2">Ad</div>
            <div className="flex flex-col items-center gap-1">
              <img src="/try-premium.png" className="w-16 h-6 object-contain mx-auto" alt="Premium" />
              <span className="text-sm font-medium text-gray-700">See who’s viewed your profile in the last 365 days</span>
              <Button variant="outline" className="text-[#0A66C2] border-[#0A66C2] mt-2 hover:bg-[#eaf2fa]">Try for free</Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Me;
