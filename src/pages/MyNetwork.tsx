
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Users } from "lucide-react";

const manageItems = [
  { label: "Connections", count: 744, icon: <Users className="w-5 h-5 mr-2 text-gray-500" /> },
  { label: "Following & followers", count: 4, icon: <Users className="w-5 h-5 mr-2 text-gray-500" /> },
  { label: "Groups", count: 1, icon: <Users className="w-5 h-5 mr-2 text-gray-500" /> },
  { label: "Events", count: 54, icon: <Users className="w-5 h-5 mr-2 text-gray-500" /> },
  { label: "Pages", count: 23, icon: <Users className="w-5 h-5 mr-2 text-gray-500" /> },
  { label: "Newsletters", count: 23, icon: <Users className="w-5 h-5 mr-2 text-gray-500" /> },
];

const suggestedPeople = [
  {
    name: "Ramees Vk",
    role: "Fullstack Developer | TypeScript, React, Node...",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    mutual: "Fahad and 19 other mutual connections"
  },
  {
    name: "Fawaz N P",
    role: "Front-End React Developer | Building ...",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
    mutual: "Muhammed and 6 other mutual connections"
  },
  {
    name: "Shashank S",
    role: "Business Analyst @ Meta16labs",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
    mutual: "Mohammed Hamza and 11 other mutual connections"
  },
  {
    name: "MP AKASH",
    role: "Intern at Juniper Networks '25 | Student a...",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    mutual: "abdul sathar and 2 other mutual connections"
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer @ Google | Figma Expert",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    mutual: "Arjun and 8 other mutual connections"
  },
  {
    name: "Vikram Singh",
    role: "DevOps Engineer | AWS | Docker | Kubernetes",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    mutual: "Rajesh and 15 other mutual connections"
  },
  {
    name: "Anita Reddy",
    role: "Product Manager @ Microsoft | MBA IIM-A",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    mutual: "Sanjay and 12 other mutual connections"
  },
  {
    name: "Karthik Menon",
    role: "Machine Learning Engineer | Python | TensorFlow",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    mutual: "Deepak and 9 other mutual connections"
  },
  {
    name: "Sneha Patel",
    role: "Digital Marketing Specialist | SEO | Content Strategy",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
    mutual: "Ravi and 7 other mutual connections"
  },
  {
    name: "Rohit Kumar",
    role: "Data Scientist @ Flipkart | Analytics | AI",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    mutual: "Amit and 14 other mutual connections"
  },
  {
    name: "Meera Joshi",
    role: "Software Architect | Java | Spring Boot | Microservices",
    img: "https://randomuser.me/api/portraits/women/76.jpg",
    mutual: "Suresh and 10 other mutual connections"
  },
  {
    name: "Arjun Nair",
    role: "Cybersecurity Analyst | CISSP | Ethical Hacking",
    img: "https://randomuser.me/api/portraits/men/89.jpg",
    mutual: "Vivek and 5 other mutual connections"
  }
];

export default function MyNetwork() {
  const [tab, setTab] = useState<"grow" | "catchup">("grow");

  return (
    <div className="min-h-screen w-full bg-gray-100 pt-4">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        {/* Left Side - Manage my network */}
        <aside className="md:w-1/4 w-full">
          <div className="bg-white rounded-xl border border-gray-200 mb-3 shadow-sm">
            <div className="py-3 px-6 border-b font-semibold text-gray-700 text-base">Manage my network</div>
            <ul className="divide-y">
              {manageItems.map((item) => (
                <li key={item.label} className="flex items-center justify-between py-3 px-6 hover:bg-gray-50 transition">
                  <div className="flex items-center">{item.icon}<span>{item.label}</span></div>
                  <span className="font-medium text-gray-700">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center gap-3">
            <img src="https://logo.clearbit.com/aramco.com" alt="aramco" className="w-12 h-12 rounded" />
            <div className="flex-1">
              <div className="font-semibold text-sm">aramco</div>
              <div className="text-xs text-gray-600">Grow your career by following aramco</div>
              <button className="mt-2 text-white bg-[#0A66C2] px-3 py-1 rounded font-semibold text-xs hover:bg-blue-700">Follow</button>
            </div>
          </div>
        </aside>
        {/* Center - Content */}
        <main className="flex-1 flex flex-col gap-6">
          {/* Tabs */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 flex gap-4">
            <button
              className={`text-[15px] font-semibold px-4 py-2 border-b-2 ${tab === "grow" ? "border-green-600 text-green-800" : "border-transparent text-gray-600"}`}
              onClick={() => setTab("grow")}
            >Grow</button>
            <button
              className={`text-[15px] font-semibold px-4 py-2 border-b-2 ${tab === "catchup" ? "border-green-600 text-green-800" : "border-transparent text-gray-600"}`}
              onClick={() => setTab("catchup")}
            >Catch up</button>
            <div className="flex-1 text-right text-sm text-gray-600 font-medium cursor-pointer hover:underline hidden md:inline">Manage</div>
          </div>
          {/* No pending invitations */}
          <div className="bg-white rounded-xl py-5 px-7 text-gray-700 text-base shadow-sm border border-gray-200 font-medium">
            No pending invitations
          </div>
          {/* Puzzle Teaser */}
          <div className="bg-white rounded-xl flex flex-row items-center gap-5 px-5 py-4 border shadow-sm">
            <img src="/lovable-uploads/26a74495-847b-4fe1-a1eb-850a16b819ac.png" alt="Puzzle Teaser" className="w-16 h-16 rounded-md object-cover border" />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[15px] text-gray-900 leading-tight">
                Zip – a quick brain teaser
              </div>
              <div className="text-xs text-gray-500">Solve in 60s or less!</div>
            </div>
            <button className="bg-[#0A66C2] text-white px-4 py-2 rounded text-sm font-semibold shadow hover:bg-blue-800">Solve now</button>
            <span className="text-xs text-gray-400 flex items-center gap-2 ml-4">
              <svg width="14" height="14" className="mr-1 inline" viewBox="0 0 24 24" fill="none"><path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Score is private to you
            </span>
          </div>
          {/* People you may know */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-base">People you may know in Greater Bengaluru Area</div>
              <button className="text-sm text-[#0A66C2] font-bold hover:underline">Show all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {suggestedPeople.map((person, idx) => (
                <div key={idx} className="rounded-lg border shadow group bg-gray-50 relative">
                  <button className="absolute right-2 top-2 text-gray-400 font-bold rounded-full hover:bg-gray-200 p-1 z-10">✕</button>
                  <div className="flex flex-col items-center pt-6 pb-5 px-3">
                    <img src={person.img} alt={person.name} className="w-16 h-16 rounded-full border-2 border-white shadow -mt-8 object-cover" />
                    <div className="font-medium mt-2 text-center leading-5 text-sm">{person.name}</div>
                    <div className="text-xs text-gray-600 text-center leading-4 mt-1 line-clamp-2">{person.role}</div>
                    <div className="text-[11px] text-gray-500 mt-1 text-center">{person.mutual}</div>
                    <button className="mt-3 bg-white border border-[#0A66C2] text-[#0A66C2] font-bold text-sm rounded-full px-6 py-1 hover:bg-blue-50 transition">Connect</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
