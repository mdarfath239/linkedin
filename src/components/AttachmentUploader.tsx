
import React, { useRef } from "react";

/**
 * File attachment uploader for messaging
 * Usage: <AttachmentUploader onUpload={(file) => ...} />
 */
const AttachmentUploader = ({ onUpload }: { onUpload: (file: File) => void }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
      e.target.value = "";
    }
  };

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
        onChange={handleChange}
      />
    </div>
  );
};

export default AttachmentUploader;
