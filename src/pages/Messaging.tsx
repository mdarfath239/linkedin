import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useConversations } from "@/hooks/useConversations";
import { useRealtimeMessages } from "@/hooks/useMessages";
import AttachmentUploader from "@/components/AttachmentUploader";
import { supabase } from "@/integrations/supabase/client";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Innomatics Research Labs",
    avatar: "/lovable-uploads/b5e081a3-1e27-4950-b871-6268ca5548f2.png",
    snippet: "Sponsored  Learn Data Science Now ...",
    date: "Jun 14",
    unread: true,
    sponsored: true,
    is_group: false,
    messages: [
      {
        id: 1,
        sender: "Innomatics Research Labs",
        text: "Hi Mohammed, We came across your profile and we're impressed with your background in technology. We'd like to invite you to explore our Data Science program.",
        time: "9:05 AM",
        sender_id: "innomatics_id",
      },
      {
        id: 2,
        sender: "You",
        text: "Thank you for reaching out! I'm interested in learning more about the program.",
        time: "9:15 AM",
        sender_id: "user_id",
      },
      {
        id: 3,
        sender: "Innomatics Research Labs",
        text: "Great! Our comprehensive Data Science course covers Python, Machine Learning, AI, and real-world projects. Would you like to schedule a call to discuss further?",
        time: "9:20 AM",
        sender_id: "innomatics_id",
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
    is_group: false,
    messages: [
      {
        id: 1,
        sender: "LinkedIn",
        text: "Hi there, Mohammed! We've recently launched LinkedIn Premium features that could help boost your career. Get 50% off your first month!",
        time: "10:15 AM",
        sender_id: "linkedin_id",
      },
      {
        id: 2,
        sender: "You",
        text: "Thanks for the offer. What specific features are included in Premium?",
        time: "2:30 PM",
        sender_id: "user_id",
      },
      {
        id: 3,
        sender: "LinkedIn",
        text: "Premium includes InMail credits, advanced search filters, salary insights, online courses, and priority customer support. Perfect for job seekers and professionals!",
        time: "2:45 PM",
        sender_id: "linkedin_id",
      },
    ],
  },
  {
    id: 3,
    name: "Pallavi M Shigli",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    snippet: "Pallavi M: Thanks for connecting!",
    date: "Jun 9",
    unread: false,
    sponsored: false,
    is_group: false,
    messages: [
      {
        id: 1,
        sender: "Pallavi M Shigli",
        text: "Hi Mohammed! Thank you for connecting with me on LinkedIn. I saw your profile and I'm impressed with your technical skills.",
        time: "Yesterday",
        sender_id: "pallavi_id",
      },
      {
        id: 2,
        sender: "You",
        text: "Hi Pallavi! Thanks for accepting my connection request. I noticed you work in software development too.",
        time: "Yesterday",
        sender_id: "user_id",
      },
      {
        id: 3,
        sender: "Pallavi M Shigli",
        text: "Yes, I've been working as a Full Stack Developer for 3 years now. Would love to collaborate on some projects sometime!",
        time: "Yesterday",
        sender_id: "pallavi_id",
      },
      {
        id: 4,
        sender: "You",
        text: "That sounds great! I'm always open to new opportunities and collaborations.",
        time: "Yesterday",
        sender_id: "user_id",
      },
      {
        id: 5,
        sender: "Pallavi M Shigli",
        text: "Thanks!",
        time: "Yesterday",
        sender_id: "pallavi_id",
      },
    ],
  },
  {
    id: 4,
    name: "Sugandha Chauhan",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    snippet: "InMail Great profile Mohammed, fancy leading o...",
    date: "Jun 1",
    unread: false,
    sponsored: false,
    is_group: false,
    messages: [
      {
        id: 1,
        sender: "Sugandha Chauhan",
        text: "Great profile Mohammed, fancy leading our next big project? We're looking for someone with your expertise in React and Node.js.",
        time: "2:15 PM",
        sender_id: "sugandha_id",
      },
      {
        id: 2,
        sender: "You",
        text: "Hi Sugandha! Thank you for reaching out. I'd love to hear more about the project and the role.",
        time: "4:30 PM",
        sender_id: "user_id",
      },
      {
        id: 3,
        sender: "Sugandha Chauhan",
        text: "We're building a cutting-edge e-commerce platform with microservices architecture. The tech stack includes React, Node.js, MongoDB, and AWS. Are you available for a quick call this week?",
        time: "4:45 PM",
        sender_id: "sugandha_id",
      },
      {
        id: 4,
        sender: "You",
        text: "That sounds very interesting! I'm available for a call on Thursday or Friday afternoon. What time works best for you?",
        time: "5:00 PM",
        sender_id: "user_id",
      },
    ],
  },
  {
    id: 5,
    name: "Muhsina v",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    snippet: "You: I'm from Bangalore too!",
    date: "May 31",
    unread: false,
    sponsored: false,
    is_group: false,
    messages: [
      {
        id: 1,
        sender: "Muhsina v",
        text: "Hey Mohammed! I noticed you're also from Bangalore. Small world! How long have you been in the tech industry?",
        time: "Yesterday",
        sender_id: "muhsina_id",
      },
      {
        id: 2,
        sender: "You",
        text: "Hi Muhsina! Yes, I'm from Bangalore too! I've been in tech for about 4 years now. What about you?",
        time: "Yesterday",
        sender_id: "user_id",
      },
      {
        id: 3,
        sender: "Muhsina v",
        text: "That's awesome! I've been working as a UI/UX designer for 2 years. Maybe we should meet up for coffee sometime and discuss the tech scene in Bangalore!",
        time: "Yesterday",
        sender_id: "muhsina_id",
      },
      {
        id: 4,
        sender: "You",
        text: "I'm from Bangalore too! That sounds like a great idea. There are so many great cafes in Koramangala and Indiranagar.",
        time: "Yesterday",
        sender_id: "user_id",
      },
    ],
  },
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
  const { user, loading } = useSupabaseAuth();
  const [activeTab, setActiveTab] = useState("Focused");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any>(null);

  // For demo, use hardcoded CONVERSATIONS (remove useConversations logic to avoid error in UI preview)
  const conversations = CONVERSATIONS;
  const loadingConvos = false;

  // Messages in the selected conversation - use hardcoded messages from CONVERSATIONS
  const messages = selected ? selected.messages : [];
  const loadingMsgs = false;
  const [messageInput, setMessageInput] = useState("");
  const [sending, setSending] = useState(false);

  // Send text/attachment - for demo, just add to local state
  async function sendMessage({ content, file }: { content?: string; file?: File }) {
    if (!selected || (!content && !file)) return;
    setSending(true);

    // For demo, just add the message to the conversation
    const newMessage = {
      id: Date.now(),
      sender: "You",
      text: content || "Attachment sent",
      time: new Date().toLocaleTimeString(),
      sender_id: "user_id",
    };

    selected.messages.push(newMessage);
    setMessageInput("");
    setSending(false);
  }

  if (loading) return <div className="p-10 text-center">Loading auth...</div>;
  if (!user) return <div className="p-10 text-center text-red-500">Please log in to view messages.</div>;

  return (
    <div className="flex flex-col w-full min-h-[85vh] bg-[#F3F6F8] justify-center py-10">
      <Navbar />
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
            {loadingConvos ? (
              <div className="p-6 text-center text-gray-400">Loading...</div>
            ) : (
              conversations.map(conv => (
                <div
                  key={conv.id}
                  className={`flex items-center gap-3 py-3 px-4 cursor-pointer ${
                    selected?.id === conv.id
                      ? "bg-[#e5f3ed]"
                      : "hover:bg-[#f6f6f9]"
                  }`}
                  onClick={() => setSelected(conv)}
                >
                  {/* Avatar image - fallback to initials if not available */}
                  {conv.avatar ? (
                    <img
                      src={conv.avatar}
                      alt={conv.name}
                      className="w-10 h-10 rounded-full object-cover border bg-blue-100"
                      onError={e => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold">
                      {conv.name?.[0] || "?"}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm truncate">
                        {conv.name || (conv.is_group ? "Group chat" : "Chat")}
                      </span>
                      <span className="text-xs text-gray-500 ml-3">{conv.date}</span>
                    </div>
                    <div className="text-xs text-gray-700 truncate">
                      {conv.snippet}
                    </div>
                  </div>
                  {/* Optionally: unread, sponsored badges, etc */}
                </div>
              ))
            )}
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
                  onError={e => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                />
                <div>
                  <div className="font-bold">{selected.name || (selected.is_group ? "Group chat" : "Chat")}</div>
                  <div className="text-sm text-gray-500">Active now</div>
                </div>
              </div>
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
                {loadingMsgs ? (
                  <div className="text-gray-400">Loading chat...</div>
                ) : (
                  messages.map((m) => (
                    <div
                      key={m.id}
                      className={`rounded-lg px-4 py-2 max-w-md ${m.sender_id === "user_id" ? "ml-auto bg-blue-100" : "bg-[#f3f6f8]"}`}
                    >
                      <div className="text-sm font-semibold mb-1">
                        {m.sender_id === "user_id" ? "You" : m.sender}
                        <span className="ml-2 text-xs text-gray-400">{m.time}</span>
                      </div>
                      <div className="text-sm text-gray-800 break-words whitespace-pre-wrap">
                        {m.text}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <form
                className="border-t p-4 flex items-center gap-3"
                onSubmit={e => {
                  e.preventDefault();
                  if (!sending && messageInput.trim()) {
                    sendMessage({ content: messageInput });
                  }
                }}
              >
                <input
                  type="text"
                  className="flex-1 border rounded-full px-4 py-2 text-sm"
                  placeholder="Write a message..."
                  value={messageInput}
                  onChange={e => setMessageInput(e.target.value)}
                  disabled={sending}
                />
                <AttachmentUploader
                  onUpload={file => sendMessage({ file })}
                />
                <button
                  className="px-4 py-2 rounded-full bg-[#157347] text-white text-sm font-semibold disabled:opacity-50"
                  type="submit"
                  disabled={sending || !messageInput.trim()}
                >
                  Send
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Select a conversation to view messages.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messaging;
