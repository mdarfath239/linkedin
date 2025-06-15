
import React, { useState } from "react";
import { Search } from "lucide-react";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Innomatics Research Labs",
    avatar: "/lovable-uploads/b5e081a3-1e27-4950-b871-6268ca5548f2.png",
    snippet: "Sponsored  Learn Data Science Now ...",
    date: "Jun 14",
    unread: true,
    sponsored: true,
    messages: [
      {
        id: 1,
        sender: "Innomatics Research Labs",
        text: "Hi Mohammed, We came across your profile ...",
        time: "9:05 AM",
      },
    ],
  },
  {
    id: 2,
    name: "LinkedIn",
    avatar: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    snippet: "LinkedIn Offer Hi there, Mohammed! ...",
    date: "Jun 11",
    unread: false,
    sponsored: false,
    messages: [
      {
        id: 1,
        sender: "LinkedIn",
        text: "Hi there, Mohammed! We’ve recently...",
        time: "10:15 AM",
      },
    ],
  },
  {
    id: 3,
    name: "Pallavi M Shigli",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    snippet: "Pallavi M: Thanks",
    date: "Jun 9",
    unread: false,
    sponsored: false,
    messages: [
      {
        id: 1,
        sender: "Pallavi M Shigli",
        text: "Thanks!",
        time: "Yesterday",
      },
    ],
  },
  // ...more conversation objects ...
];

const TABS = [
  "Focused",
  "Jobs",
  "Unread",
  "My Connections",
  "InMail",
  "Starred",
];

const Messaging = () => {
  const [activeTab, setActiveTab] = useState("Focused");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(CONVERSATIONS[0]);

  // Filter conversations based on search
  const filteredConversations = CONVERSATIONS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex w-full min-h-[85vh] bg-[#F3F6F8] justify-center py-10">
      <div className="w-full max-w-6xl flex rounded-lg shadow bg-white border border-gray-200 min-h-[600px]">
        {/* Left: Inbox Sidebar */}
        <div className="w-[340px] border-r bg-[#fafbfc] flex flex-col">
          <div className="flex flex-col p-4">
            <div className="font-bold text-xl mb-2">Messaging</div>
            <div className="relative mb-3">
              <span className="absolute left-3 top-2 text-gray-400">
                <Search size={18} />
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="pl-10 pr-3 py-2 w-full rounded border bg-[#f3f6f8] text-sm"
                placeholder="Search messages"
              />
            </div>
            <div className="flex gap-2 flex-wrap mb-2">
              {TABS.map((t) => (
                <button
                  key={t}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    activeTab === t
                      ? "bg-[#157347] text-white border-[#157347]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                  }`}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className={`flex items-center gap-3 py-3 px-4 cursor-pointer ${
                  selected?.id === conv.id
                    ? "bg-[#e5f3ed]"
                    : "hover:bg-[#f6f6f9]"
                }`}
                onClick={() => setSelected(conv)}
              >
                <img
                  src={conv.avatar}
                  alt={conv.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm truncate">
                      {conv.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {conv.date}
                    </span>
                  </div>
                  <div
                    className={`text-xs truncate ${
                      conv.unread ? "font-bold text-[#157347]" : "text-gray-500"
                    }`}
                  >
                    {conv.snippet}
                  </div>
                  {conv.sponsored && (
                    <span className="text-[10px] text-[#f7b500] font-semibold">
                      Sponsored
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Center: Message content */}
        <div className="flex-1 min-w-0 flex flex-col">
          {selected ? (
            <>
              <div className="border-b flex items-center gap-3 px-6 py-3 bg-white">
                <img
                  src={selected.avatar}
                  alt={selected.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <div className="font-bold">{selected.name}</div>
                  {selected.sponsored && (
                    <span className="text-xs text-[#f7b500]">Sponsored</span>
                  )}
                </div>
              </div>
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
                {selected.messages.map((m) => (
                  <div
                    key={m.id}
                    className="bg-[#f3f6f8] rounded-lg px-4 py-2 max-w-md"
                  >
                    <div className="text-sm font-semibold mb-1">
                      {m.sender}
                    </div>
                    <div className="text-sm text-gray-800">{m.text}</div>
                    <div className="text-xs text-gray-400 mt-1">{m.time}</div>
                  </div>
                ))}
              </div>
              <div className="border-t p-4 flex items-center gap-3">
                <input
                  type="text"
                  className="flex-1 border rounded-full px-4 py-2 text-sm"
                  placeholder="Write a message..."
                  disabled
                />
                <button className="px-4 py-2 rounded-full bg-[#157347] text-white text-sm font-semibold opacity-40 cursor-not-allowed">
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Select a conversation to view messages.
            </div>
          )}
        </div>
        {/* Right panel (ads, etc)—optional: not implemented */}
      </div>
    </div>
  );
};

export default Messaging;
