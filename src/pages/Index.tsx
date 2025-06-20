
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarProfile from "@/components/SidebarProfile";
import Feed from "@/components/Feed";
import SidebarSuggestions from "@/components/SidebarSuggestions";
import SidebarNewsCard from "@/components/SidebarNewsCard";
import ProfileModal from "@/components/ProfileModal";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <Navbar onSearchChange={handleSearchChange} searchQuery={searchQuery} />
      <main className="flex-1 w-full flex flex-row justify-center gap-8 px-8 py-8 bg-[#F3F6F8]">
        {/* Left sidebar - profile preview */}
        <aside className="hidden xl:block w-[320px] flex-shrink-0">
          <SidebarProfile />
        </aside>
        {/* Feed */}
        <section className="flex-1 max-w-2xl w-full min-w-0">
          <Feed searchQuery={searchQuery} />
        </section>
        {/* Right sidebar */}
        <aside className="hidden 2xl:block w-[340px] flex-shrink-0">
          <SidebarNewsCard />
          <SidebarSuggestions />
        </aside>
      </main>
      <ProfileModal open={showProfile} onOpenChange={setShowProfile} />
    </div>
  );
};

export default Index;
