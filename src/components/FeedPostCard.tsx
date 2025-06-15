
import React, { useState } from "react";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import CommentSection, { Comment } from "./CommentSection";

const REACTION_TYPES = [
  { type: "like", label: "Like", icon: ThumbsUp, color: "#0A66C2" },
  { type: "celebrate", label: "Celebrate", icon: ThumbsUp, color: "#FFC53D" },
  { type: "love", label: "Love", icon: ThumbsUp, color: "#E44D70" },
];

export interface FeedPostCardProps {
  post: {
    id: number;
    user: { name: string; avatar: string; title: string };
    time: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    reactions?: Record<string, number>;
    allComments?: Comment[];
  };
  onReact: (type: string) => void;
  onComment: (text: string) => void;
  onShare: () => void;
}

const FeedPostCard: React.FC<FeedPostCardProps> = ({
  post,
  onReact,
  onComment,
  onShare,
}) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow border border-gray-200 p-5 mb-2">
      <div className="flex items-center gap-3 mb-2">
        <img className="w-11 h-11 rounded-full" src={post.user.avatar} alt={post.user.name} />
        <div>
          <div className="font-semibold">{post.user.name}</div>
          <div className="text-xs text-gray-500">{post.user.title}</div>
          <div className="text-[11px] text-gray-400">{post.time} ago</div>
        </div>
      </div>
      <div className="mb-3 text-[15px] whitespace-pre-line">{post.content}</div>
      {post.image && (
        <img
          src={post.image}
          alt="Feed"
          className="rounded-lg w-full object-cover max-h-96 mb-3 border"
        />
      )}
      {/* Reactions summary */}
      <div className="flex items-center gap-6 mb-2 text-xs text-gray-500">
        <span>
          {Object.entries(post.reactions || { like: post.likes }).map(
            ([key, value]) =>
              value > 0 ? (
                <span key={key} className="mr-2">
                  {REACTION_TYPES.find((r) => r.type === key)?.label || key}: {value}
                </span>
              ) : null
          )}
        </span>
        <span>{post.comments} comments</span>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-between">
        <FeedAction Icon={ThumbsUp} label="Like" onClick={() => onReact("like")} />
        <FeedAction Icon={MessageSquare} label="Comment" onClick={() => setShowComments((c) => !c)} />
        <FeedAction Icon={Share2} label="Share" onClick={onShare} />
      </div>
      {showComments && (
        <CommentSection
          comments={post.allComments || []}
          onAddComment={onComment}
        />
      )}
    </article>
  );
};

function FeedAction({
  Icon,
  label,
  onClick,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="group flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors text-gray-500 font-medium text-sm"
      onClick={onClick}
      type="button"
    >
      <Icon className="w-5 h-5 group-hover:text-[#0A66C2]" />
      <span className="group-hover:text-[#0A66C2]">{label}</span>
    </button>
  );
}

export default FeedPostCard;
