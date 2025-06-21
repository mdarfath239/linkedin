
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Grid3x3, ChevronDown } from 'lucide-react';

const ForBusinessDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-transparent outline-none border-0 flex flex-col items-center gap-1 px-2 py-1 transition text-gray-600 hover:text-[#0A66C2] focus:outline-none">
        <div className="flex items-center gap-1">
          <Grid3x3 size={24} />
          <ChevronDown size={12} />
        </div>
        <span className="text-xs font-medium">For Business</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-white shadow-lg border border-gray-200 z-50" align="end">
        <div className="grid grid-cols-2 gap-0">
          {/* Left Column - My Apps */}
          <div className="p-4 border-r border-gray-200">
            <DropdownMenuLabel className="text-sm font-semibold text-gray-900 mb-3">
              My Apps
            </DropdownMenuLabel>
            
            <DropdownMenuItem className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">Sell</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">Groups</span>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="my-3" />
            
            <DropdownMenuLabel className="text-sm font-semibold text-gray-700 mb-2">
              Talent
            </DropdownMenuLabel>
            
            <DropdownMenuItem className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M3 3v18h18v-18h-18zm16 16h-14v-14h14v14z"/>
                  <path d="M7 7h10v2h-10z"/>
                  <path d="M7 11h10v2h-10z"/>
                  <path d="M7 15h7v2h-7z"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">Talent Insights</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">Post a job</span>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="my-3" />
            
            <DropdownMenuLabel className="text-sm font-semibold text-gray-700 mb-2">
              Sales
            </DropdownMenuLabel>
            
            <DropdownMenuItem className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">Services Marketplace</span>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="my-3" />
            
            <DropdownMenuLabel className="text-sm font-semibold text-gray-700 mb-2">
              Marketing
            </DropdownMenuLabel>
            
            <DropdownMenuItem className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12l2 2 4-4"/>
                </svg>
              </div>
              <span className="font-medium text-gray-900">Advertise</span>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="my-3" />
            
            <DropdownMenuLabel className="text-sm font-semibold text-gray-700 mb-2">
              Learning
            </DropdownMenuLabel>
          </div>
          
          {/* Right Column - Explore more for business */}
          <div className="p-4">
            <DropdownMenuLabel className="text-sm font-semibold text-gray-900 mb-3">
              Explore more for business
            </DropdownMenuLabel>
            
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="font-medium text-gray-900 text-sm">Hire on LinkedIn</div>
                <div className="text-xs text-gray-600">Find, attract and recruit talent</div>
              </div>
              
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="font-medium text-gray-900 text-sm">Sell with LinkedIn</div>
                <div className="text-xs text-gray-600">Unlock sales opportunities</div>
              </div>
              
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="font-medium text-gray-900 text-sm">Post a job</div>
                <div className="text-xs text-gray-600">Hire for your small business</div>
              </div>
              
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="font-medium text-gray-900 text-sm">Advertise on LinkedIn</div>
                <div className="text-xs text-gray-600">Acquire customers and grow your business</div>
              </div>
              
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="font-medium text-gray-900 text-sm">Elevate your small business</div>
                <div className="text-xs text-gray-600">Find new clients and build credibility</div>
              </div>
              
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="font-medium text-gray-900 text-sm">Learn with LinkedIn</div>
                <div className="text-xs text-gray-600">Courses to develop your employees</div>
              </div>
              
              <div className="cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="font-medium text-gray-900 text-sm">Admin Center</div>
                <div className="text-xs text-gray-600">Manage billing and account details</div>
              </div>
            </div>
            
            <DropdownMenuSeparator className="my-4" />
            
            <div className="cursor-pointer hover:bg-gray-50 p-2 rounded flex items-center gap-2">
              <span className="font-medium text-gray-900 text-sm">Create a Company Page</span>
              <span className="text-lg text-gray-500">+</span>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ForBusinessDropdown;
