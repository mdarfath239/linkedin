
import FeedPostCard from "./FeedPostCard";

const FEED_POSTS = [
  {
    id: 1,
    user: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      title: "Product Designer at EditNow",
    },
    time: "2h",
    content: "Excited to share our product’s latest update—introducing dark mode for all users! ✨",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
    likes: 89,
    comments: 24,
  },
  {
    id: 2,
    user: {
      name: "Mark Evans",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      title: "Recruiter at PeopleCorp",
    },
    time: "5h",
    content:
      "We’re hiring React engineers! DM if interested or refer a friend. #hiring #reactjs",
    image: "",
    likes: 124,
    comments: 31,
  },
];

const Feed = () => {
  return (
    <div className="w-full space-y-4">
      <div className="bg-white rounded-lg shadow border border-gray-200 p-5 flex gap-3 items-center">
        <img
          src="https://randomuser.me/api/portraits/men/11.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <input
          className="bg-gray-100 rounded-full flex-1 px-4 py-2 text-sm border border-gray-200 outline-none focus:ring-2 focus:ring-[#0A66C2]"
          placeholder="Start a post"
          disabled
        />
        <button className="text-[#0A66C2] hover:bg-[#edf3f8] py-2 px-4 rounded-full font-semibold transition">Post</button>
      </div>
      {FEED_POSTS.map(post => (
        <FeedPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
