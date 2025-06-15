import React, { useState } from "react";
import { Briefcase, Bookmark, List, Star, BookOpen, Folder, PlusCircle, ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const jobLists = [
  {
    id: 1,
    title: "Node JS Developer",
    company: "HCLTech",
    location: "Greater Bengaluru Area (On-site)",
    promoted: true,
    activelyReviewing: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/HCL_Technologies_Logo.svg",
    easyApply: true,
    verified: true,
  },
  {
    id: 2,
    title: "Back End Developer (Node.JS)",
    company: "Synechron",
    location: "Greater Bengaluru Area (On-site)",
    promoted: true,
    activelyReviewing: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Synechron_logo.svg",
    easyApply: true,
    verified: true,
  },
  {
    id: 3,
    title: "Full Stack Engineer (MERN)",
    company: "Styli",
    location: "Bengaluru, Karnataka, India (On-site)",
    promoted: true,
    activelyReviewing: true,
    logo: "https://seeklogo.com/images/S/styli-logo-1B2F8A393D-seeklogo.com.png",
    easyApply: true,
    verified: true,
  }
];

// Like button with blue background toggle
const LikeButton = ({ liked, onClick }: { liked: boolean, onClick: () => void }) => (
  <button
    type="button"
    aria-label="Like this job"
    onClick={onClick}
    className={`
      flex items-center gap-1 px-3 py-1 rounded transition-colors
      border border-blue-100
      ${liked ? "bg-[#0A66C2] text-white" : "bg-white text-[#0A66C2] hover:bg-blue-50"}
      shadow-sm
    `}
  >
    <ThumbsUp size={18} />
    {liked ? "Liked" : "Like"}
  </button>
);

function ProfileSummary() {
  return (
    <div className="bg-white rounded-xl border shadow p-6 flex flex-col items-center gap-3 mb-4">
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
          alt="profile-bg"
          className="rounded-t-xl w-full h-16 object-cover mb-2"
        />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center">
            <span className="text-4xl text-gray-400">👤</span>
          </div>
          <button className="absolute bottom-2 right-2 bg-[#0A66C2] w-7 h-7 flex items-center justify-center rounded-full border border-white hover:bg-blue-700 transition"><PlusCircle size={18} className="text-white" /></button>
        </div>
      </div>
      <div className="pt-10 text-center flex flex-col items-center gap-0.5 w-full">
        <span className="font-semibold text-lg">Mohammed Arfath <span className="align-middle ml-1 inline-block text-[#0A66C2]">✓</span></span>
        <div className="text-xs text-gray-700 font-medium">
          "Full-Stack MERN Developer | React.js | Node.js | MongoDB | Express.js | Next.js | RESTful APIs ..."
        </div>
        <div className="text-xs text-gray-500">Bengaluru, Karnataka</div>
        <button
          className="w-full border border-dashed border-gray-400 rounded flex items-center justify-center py-2 mt-2 text-sm text-gray-700 gap-2 bg-gray-50 hover:bg-gray-100 transition"
        ><PlusCircle size={16} /> Experience</button>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="bg-white rounded-xl border shadow p-5 flex flex-col gap-3">
      <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-900 text-sm font-medium">
        <List size={18} /> Preferences
      </button>
      <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-900 text-sm font-medium">
        <Bookmark size={18} /> My jobs
      </button>
      <button className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-gray-900 text-sm font-medium">
        <Star size={18} /> My Career Insights
      </button>
      <hr/>
      <button className="flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm mt-1">
        <BookOpen size={16}/> Post a free job
      </button>
    </aside>
  );
}

// Modified JobsSuggestions with Like button and properly loaded images
function JobsSuggestions() {
  const [likedJobs, setLikedJobs] = useState<{ [id: number]: boolean }>({});
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <div className="text-xl font-bold mb-2">Top job picks for you</div>
      <div className="text-xs text-gray-500 mb-4">
        Based on your profile, preferences, and activity like applies, searches, and saves
      </div>
      <ul>
        {jobLists.map(job => (
          <li
            key={job.id}
            className="flex items-start gap-4 border-b last:border-b-0 border-gray-200 py-3 relative"
          >
            <img
              src={job.logo}
              alt={job.company + " logo"}
              className="w-12 h-12 object-contain rounded bg-gray-50 border"
              onError={e => {
                // fallback image if logo fails
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex gap-1 items-center mb-0.5">
                <span className="font-semibold">{job.title}</span>
                {job.verified && <span className="text-blue-600 ml-1">&#10003;</span>}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {job.company} <span className="mx-1">·</span>
                <span className="text-xs text-gray-500">{job.location}</span>
              </div>
              {job.activelyReviewing && (
                <div className="flex items-center gap-1 mt-1 text-xs text-green-700 font-semibold">
                  <span className="material-icons" style={{fontSize: '1rem'}}>check_circle</span>
                  Actively reviewing applicants
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-1">
                {job.promoted && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded font-medium">Promoted</span>
                )}
                {job.easyApply && (
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded font-medium flex items-center gap-1">
                    <Briefcase size={14} className="inline" /> Easy Apply
                  </span>
                )}
              </div>
            </div>
            {/* Like Button */}
            <div className="flex flex-col gap-2 items-end">
              <LikeButton
                liked={!!likedJobs[job.id]}
                onClick={() =>
                  setLikedJobs(prev => ({
                    ...prev,
                    [job.id]: !prev[job.id]
                  }))
                }
              />
              <button
                className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full py-2 mt-2 rounded text-blue-700 font-semibold hover:underline flex items-center justify-center gap-2 text-sm">Show all <span className="text-lg -ml-1">&#8964;</span></button>
    </div>
  );
}

function JobCollections() {
  const navigate = useNavigate();
  return (
    <section className="bg-white rounded-xl border shadow p-6 mt-3">
      <div className="text-lg font-semibold mb-4">Explore with job collections</div>
      <div className="flex gap-4 flex-wrap">
        <button className="flex flex-col items-center text-blue-700 font-semibold hover:underline text-sm">
          <span className="bg-yellow-100 rounded-full p-2 mb-1"><Star size={22}/></span>Easy Apply
        </button>
        <button className="flex flex-col items-center text-blue-700 font-semibold hover:underline text-sm">
          <span className="bg-blue-100 rounded-full p-2 mb-1"><Folder size={22}/></span>Remote
        </button>
        <button className="flex flex-col items-center text-blue-700 font-semibold hover:underline text-sm">
          <span className="bg-gray-200 rounded-full p-2 mb-1"><Briefcase size={22}/></span>Government
        </button>
        <button className="flex flex-col items-center text-blue-700 font-semibold hover:underline text-sm">
          <span className="bg-gray-100 rounded-full p-2 mb-1"><List size={22}/></span>More
        </button>
      </div>
    </section>
  )
}

const Jobs = () => (
  <div className="min-h-screen w-full bg-[#F3F6F8] flex flex-col items-center px-2 py-8">
    <div className="w-full max-w-6xl flex flex-row gap-6">
      {/* Left */}
      <div className="hidden lg:flex flex-col w-[300px] min-w-[220px] gap-6">
        <ProfileSummary/>
        <Sidebar/>
      </div>
      {/* Center */}
      <main className="flex-1 min-w-0 flex flex-col">
        <JobsSuggestions/>
        <JobCollections/>
      </main>
      {/* Right - empty for now */}
      <div className="hidden xl:block w-[50px]"/>
    </div>
    {/* Footer */}
    <footer className="w-full flex flex-col items-center justify-center text-xs text-gray-400 mt-8 pb-3 gap-2">
      <div className="flex flex-wrap gap-4">
        <span>About</span>
        <span>Accessibility</span>
        <span>Help Center</span>
        <span>Privacy &amp; Terms</span>
        <span>Ad Choices</span>
        <span>Advertising</span>
        <span>Business Services</span>
      </div>
      <div>
        LinkedClone &copy; {new Date().getFullYear()}
      </div>
    </footer>
  </div>
);

export default Jobs;
