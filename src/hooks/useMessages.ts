
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useRealtimeMessages(conversationId: string | null) {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch messages
  const fetchMessages = useCallback(async () => {
    if (!conversationId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });
    setMessages(data || []);
    setLoading(false);
  }, [conversationId]);

  // Subscribe to new messages in realtime
  useEffect(() => {
    if (!conversationId) return;
    fetchMessages();
    const channel = supabase.channel(`chat_${conversationId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${conversationId}` },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId, fetchMessages]);

  return { messages, loading, refetch: fetchMessages };
}
