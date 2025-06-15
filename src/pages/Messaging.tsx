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
    avatar: "/lovable-uploads/b5e081a3-1e27-4950-b871-6268ca5548f2.png", // as in screenshot
    snippet: "Sponsored  Learn Data Science Now ...",
    date: "Jun 14",
    unread: true,
    sponsored: true,
    is_group: false,
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
    is_group: false,
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
    is_group: false,
    messages: [
      {
        id: 1,
        sender: "Pallavi M Shigli",
        text: "Thanks!",
        time: "Yesterday",
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
        text: "Great profile Mohammed, fancy leading our...",
        time: "2:15 PM",
      },
    ],
  },
  {
    id: 5,
    name: "Muhsina v",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    snippet: "You: I'm from Bangalore",
    date: "May 31",
    unread: false,
    sponsored: false,
    is_group: false,
    messages: [
      {
        id: 1,
        sender: "Muhsina v",
        text: "I'm from Bangalore",
        time: "Yesterday",
      },
    ],
  },
  // ...add similar profile images for more if needed...
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

  // Messages in the selected conversation
  const { messages, loading: loadingMsgs, refetch } = useRealtimeMessages(selected?.id || null);
  const [messageInput, setMessageInput] = useState("");
  const [sending, setSending] = useState(false);

  // Send text/attachment
  async function sendMessage({ content, file }: { content?: string; file?: File }) {
    if (!selected || !user || (!content && !file)) return;
    setSending(true);

    let attachment_url = null;
    let attachment_type = null;

    if (file) {
      // Upload to Supabase Storage (create 'chat-files' bucket if not exists!)
      const fileName = `${selected.id}/${Date.now()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("chat-files")
        .upload(fileName, file);

      if (uploadError) {
        alert("Failed to upload attachment");
        setSending(false);
        return;
      }
      attachment_url = uploadData?.path;
      attachment_type = file.type;
    }

    await supabase.from("messages").insert({
      conversation_id: selected.id,
      sender_id: user.id,
      content: content ?? "",
      attachment_url,
      attachment_type
    });

    setMessageInput("");
    setSending(false);
    setTimeout(refetch, 200); // Refetch in case realtime is delayed
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
                <div className="w-10 h-10 rounded-full bg-blue-200 flex justify-center items-center">{selected.is_group ? "👥" : "💬"}</div>
                <div>
                  <div className="font-bold">{selected.name || (selected.is_group ? "Group chat" : "Chat")}</div>
                  {/* ...add participants or typing indicators later... */}
                </div>
              </div>
              <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
                {loadingMsgs ? (
                  <div className="text-gray-400">Loading chat...</div>
                ) : (
                  messages.map((m) => (
                    <div
                      key={m.id}
                      className={`rounded-lg px-4 py-2 max-w-md ${m.sender_id === user.id ? "ml-auto bg-blue-100" : "bg-[#f3f6f8]"}`}
                    >
                      <div className="text-sm font-semibold mb-1">
                        {m.sender_id === user.id ? "You" : m.sender_id}
                        <span className="ml-2 text-xs text-gray-400">{new Date(m.created_at).toLocaleTimeString()}</span>
                      </div>
                      <div className="text-sm text-gray-800 break-words whitespace-pre-wrap">
                        {m.content}
                      </div>
                      {m.attachment_url && (
                        <div className="mt-2">
                          <a
                            href={supabase.storage.from("chat-files").getPublicUrl(m.attachment_url).data.publicUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline text-xs"
                          >
                            Attachment
                          </a>
                        </div>
                      )}
                      {/* ...read receipt UI can be added here next... */}
                    </div>
                  ))
                )}
              </div>
              <form
                className="border-t p-4 flex items-center gap-3"
                onSubmit={e => {
                  e.preventDefault();
                  if (!sending && (messageInput || undefined)) {
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
                  className="px-4 py-2 rounded-full bg-[#157347] text-white text-sm font-semibold"
                  type="submit"
                  disabled={sending || !messageInput}
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
