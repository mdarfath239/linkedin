
import React, { useState } from "react";
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, Trash2 } from "lucide-react";
import CommentSection, { Comment } from "./CommentSection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
    video?: string;
    likes: number;
    comments: number;
    reactions?: Record<string, number>;
    allComments?: Comment[];
  };
  onReact: (type: string) => void;
  onComment: (text: string) => void;
  onShare: () => void;
  onDelete?: () => void;
  isLiked?: boolean;
  canDelete?: boolean;
}

const FeedPostCard: React.FC<FeedPostCardProps> = ({
  post,
  onReact,
  onComment,
  onShare,
  onDelete,
  isLiked = false,
  canDelete = false,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete?.();
    setShowDeleteDialog(false);
  };

  return (
    <>
      <article className="bg-white rounded-lg shadow border border-gray-200 p-5 mb-2">
        <div className="flex items-center gap-3 mb-2">
          <img className="w-11 h-11 rounded-full" src={post.user.avatar} alt={post.user.name} />
          <div className="flex-1">
            <div className="font-semibold">{post.user.name}</div>
            <div className="text-xs text-gray-500">{post.user.title}</div>
            <div className="text-[11px] text-gray-400">{post.time} ago</div>
          </div>
          {canDelete && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={handleDeleteClick}
                  className="text-red-600 focus:text-red-600 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete post
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <div className="mb-3 text-[15px] whitespace-pre-line">{post.content}</div>
        {post.image && (
          <img
            src={post.image}
            alt="Feed"
            className="rounded-lg w-full object-cover max-h-96 mb-3 border"
          />
        )}
        {post.video && (
          <video
            controls
            className="rounded-lg w-full object-cover max-h-96 mb-3 border bg-black"
          >
            <source src={post.video} />
            Your browser does not support the video tag.
          </video>
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
          <FeedAction
            Icon={ThumbsUp}
            label="Like"
            onClick={() => onReact("like")}
            active={isLiked}
          />
          <FeedAction
            Icon={MessageSquare}
            label="Comment"
            onClick={() => setShowComments((c) => !c)}
          />
          <FeedAction Icon={Share2} label="Share" onClick={onShare} />
        </div>
        {showComments && (
          <CommentSection
            comments={post.allComments || []}
            onAddComment={onComment}
          />
        )}
      </article>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

function FeedAction({
  Icon,
  label,
  onClick,
  active,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  // Change color on Like if active
  const isLike = label === "Like";
  const activeColor = isLike && active ? "#0A66C2" : undefined;
  return (
    <button
      className={`group flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors text-gray-500 font-medium text-sm ${isLike && active ? "text-[#0A66C2]" : ""}`}
      onClick={onClick}
      type="button"
      disabled={isLike && active}
    >
      <Icon
        className={`w-5 h-5 group-hover:text-[#0A66C2] ${
          isLike && active ? "text-[#0A66C2]" : ""
        }`}
      />
      <span className={`group-hover:text-[#0A66C2] ${isLike && active ? "text-[#0A66C2]" : ""}`}>
        {label}
      </span>
    </button>
  );
}

export default FeedPostCard;
