
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useConversations(userId: string | null) {
  const [convos, setConvos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
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
</lov_write>

<lov-write file_path="src/components/AttachmentUploader.tsx">
import React, { useRef } from "react";

/**
 * Usage: <AttachmentUploader onUpload={(file) => ...} />
 */
const AttachmentUploader = ({ onUpload }: { onUpload: (file: File) => void }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <button
        type="button"
        className="text-xs px-3 py-1 rounded bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200"
        onClick={() => inputRef.current?.click()}
      >
        📎 Attach
      </button>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        accept="image/*,application/pdf,application/msword,.doc,.docx"
        onChange={e => {
          if (e.target.files && e.target.files.length > 0) {
            onUpload(e.target.files[0]);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default AttachmentUploader;
