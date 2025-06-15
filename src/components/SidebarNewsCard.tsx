
import { Info } from "lucide-react";

const topStories = [
  {
    title: "Air India flight crash leaves 274 dead",
    meta: "1d ago • 566,728 readers",
  },
  {
    title: "Israel-Iran conflict rattles markets",
    meta: "1d ago • 32,446 readers",
  },
  {
    title: "Meta invests $14.3B in AI startup",
    meta: "21h ago • 9,184 readers",
  },
  {
    title: "Automakers grapple with REM crisis",
    meta: "1d ago • 1,633 readers",
  },
  {
    title: "Life insurers record premium lift",
    meta: "1d ago • 1,434 readers",
  },
];

export default function SidebarNewsCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-4 mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="font-semibold text-[16px]">LinkedIn News</div>
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      <div className="text-xs text-gray-500 mb-2 font-semibold">Top stories</div>
      <ul>
        {topStories.map((story, idx) => (
          <li key={story.title} className="mb-2 last:mb-0">
            <div className="font-medium text-[15px] leading-tight hover:underline cursor-pointer">
              {story.title}
            </div>
            <div className="text-xs text-gray-400">{story.meta}</div>
          </li>
        ))}
      </ul>
      <button
        className="flex items-center gap-1 text-xs text-[#0A66C2] font-semibold mt-1 mb-2 hover:underline"
        type="button"
      >
        Show more <span className="text-lg -ml-1">&#8964;</span>
      </button>
      <div className="font-semibold text-[13px] text-gray-800 mt-3 mb-2">Today's puzzle</div>
      <div className="flex items-center p-2 bg-gray-50 rounded-lg shadow-sm border gap-2">
        <img
          src="/lovable-uploads/26a74495-847b-4fe1-a1eb-850a16b819ac.png"
          alt="Today's Puzzle"
          className="w-12 h-12 rounded-md object-contain border"
        />
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-medium truncate">Zip – a quick brain teaser</div>
          <div className="text-xs text-gray-500">Solve in 60s or less!</div>
          <div className="flex items-center text-[11px] text-gray-400 mt-1">
            <svg width="14" height="14" className="mr-1" viewBox="0 0 24 24" fill="none">
              <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Score is private to you</span>
          </div>
        </div>
      </div>
    </div>
  );
}
