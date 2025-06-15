
import { User, MessageSquare, Share2, ThumbsUp } from "lucide-react";

const FeedPostCard = ({
  post,
}: {
  post: {
    user: { name: string; avatar: string; title: string };
    time: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
  };
}) => (
  <article className="bg-white rounded-lg shadow border border-gray-200 p-5">
    <div className="flex items-center gap-3 mb-2">
      <img className="w-11 h-11 rounded-full" src={post.user.avatar} alt={post.user.name} />
      <div>
        <div className="font-semibold">{post.user.name}</div>
        <div className="text-xs text-gray-500">{post.user.title}</div>
        <div className="text-[11px] text-gray-400">{post.time} ago</div>
      </div>
    </div>
    <div className="mb-3 text-[15px]">{post.content}</div>
    {post.image && (
      <img
        src={post.image}
        alt="Feed"
        className="rounded-lg w-full object-cover max-h-96 mb-3 border"
      />
    )}
    <div className="flex items-center gap-6 mb-2 text-xs text-gray-500">
      <span>{post.likes} likes</span>
      <span>{post.comments} comments</span>
    </div>
    <hr className="mb-2" />
    <div className="flex justify-between">
      <FeedAction Icon={ThumbsUp} label="Like" />
      <FeedAction Icon={MessageSquare} label="Comment" />
      <FeedAction Icon={Share2} label="Share" />
    </div>
  </article>
);

function FeedAction({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button className="group flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors text-gray-500 font-medium text-sm">
      <Icon className="w-5 h-5 group-hover:text-[#0A66C2]" />
      <span className="group-hover:text-[#0A66C2]">{label}</span>
    </button>
  );
}

export default FeedPostCard;
