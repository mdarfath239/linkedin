
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export interface Comment {
  id: number;
  user: { name: string; avatar: string };
  text: string;
  createdAt: string;
}

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (text: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, onAddComment }) => {
  const [text, setText] = useState("");
  return (
    <div className="mt-2">
      <div className="space-y-2">
        {comments.map(c => (
          <div key={c.id} className="flex items-start gap-2 bg-gray-50 rounded p-2 text-sm">
            <img src={c.user.avatar} alt={c.user.name} className="w-8 h-8 rounded-full" />
            <div>
              <b>{c.user.name}</b> <span className="text-gray-400 text-xs">{c.createdAt}</span>
              <div>{c.text}</div>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (text.trim()) {
            onAddComment(text);
            setText("");
          }
        }}
        className="flex items-end gap-2 mt-2"
      >
        <Textarea
          placeholder="Add a comment..."
          value={text}
          rows={1}
          className="flex-1"
          onChange={e => setText(e.target.value)}
        />
        <Button type="submit" size="sm" disabled={!text.trim()}>Comment</Button>
      </form>
    </div>
  );
};

export default CommentSection;
