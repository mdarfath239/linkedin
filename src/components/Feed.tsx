
import React, { useState } from "react";
import FeedPostCard from "./FeedPostCard";
import CreatePostModal from "./CreatePostModal";
import { Comment } from "./CommentSection";

const INITIAL_USER = {
  name: "Jane Smith",
  avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  title: "Product Designer at EditNow",
};

// Example initial posts
const INITIAL_POSTS = [
  {
    id: 1,
    user: INITIAL_USER,
    time: "2h",
    content: "Excited to share our product’s latest update—introducing dark mode for all users! ✨",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
    likes: 6,
    comments: 2,
    reactions: { like: 6 },
    allComments: [
      {
        id: 1,
        user: {
          name: "John Doe",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        text: "Congrats! Looks awesome 🙌",
        createdAt: "1h",
      },
      {
        id: 2,
        user: {
          name: "Sally Field",
          avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        },
        text: "Can't wait to try.",
        createdAt: "50m",
      },
    ],
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
    likes: 3,
    comments: 1,
    reactions: { like: 3 },
    allComments: [
      {
        id: 3,
        user: {
          name: "Jane Smith",
          avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        },
        text: "I'll pass this along!",
        createdAt: "1h",
      },
    ],
  },
];

const CURRENT_USER = {
  name: "You",
  avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  title: "Frontend Developer at LinkEdit",
};

const Feed = () => {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  // Track which posts are liked (by ID)
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});

  const handleCreatePost = ({
    content,
    image,
  }: {
    content: string;
    image?: string;
  }) => {
    const newPost = {
      id: Date.now(),
      user: CURRENT_USER,
      time: "now",
      content,
      image,
      likes: 0,
      comments: 0,
      reactions: { like: 0 },
      allComments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleReact = (id: number, type: string) => {
    setLikedPosts((prev) => ({ ...prev, [id]: true }));
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id && type === "like" && !likedPosts[id]
          ? {
              ...post,
              reactions: {
                ...post.reactions,
                [type]: (post.reactions?.[type] || 0) + 1,
              },
              likes: post.likes + 1,
            }
          : post
      )
    );
  };

  const handleComment = (id: number, text: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: post.comments + 1,
              allComments: [
                ...(post.allComments || []),
                {
                  id: Date.now(),
                  user: CURRENT_USER,
                  text,
                  createdAt: "now",
                } as Comment,
              ],
            }
          : post
      )
    );
  };

  const handleShare = (id: number) => {
    const postToShare = posts.find((p) => p.id === id);
    if (!postToShare) return;
    const sharedPost = {
      ...postToShare,
      id: Date.now(),
      user: CURRENT_USER,
      content: `Shared: ${postToShare.content}`,
      time: "now",
    };
    setPosts([sharedPost, ...posts]);
  };

  return (
    <div className="w-full space-y-4">
      <div className="bg-white rounded-lg shadow border border-gray-200 p-5 flex gap-3 items-center">
        <img
          src={CURRENT_USER.avatar}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <CreatePostModal onCreate={handleCreatePost} />
      </div>
      {posts.map((post) => (
        <FeedPostCard
          key={post.id}
          post={post}
          onReact={(type) => {
            if (type === "like" && likedPosts[post.id]) return; // Do nothing if already liked
            handleReact(post.id, type);
          }}
          onComment={(text) => handleComment(post.id, text)}
          onShare={() => handleShare(post.id)}
          isLiked={!!likedPosts[post.id]}
        />
      ))}
    </div>
  );
};

export default Feed;
