
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Fetches conversations for a user.
 * @param userId The authenticated Supabase user id (UUID string).
 */
export function useConversations(userId: string | null) {
  const [convos, setConvos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setConvos([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    supabase
      .from("conversations")
      .select("*, conversation_participants!inner(user_id)")
      .filter("conversation_participants.user_id", "eq", userId)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setConvos(data || []);
        setLoading(false);
      });
  }, [userId]);

  return { conversations: convos, loading };
}
