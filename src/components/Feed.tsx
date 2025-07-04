
import React, { useState } from "react";
import FeedPostCard from "./FeedPostCard";
import PostCreationInterface from "./PostCreationInterface";
import { Comment } from "./CommentSection";

const INITIAL_USER = {
  name: "Jane Smith",
  avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  title: "Product Designer at EditNow",
};

const INITIAL_POSTS = [
  {
    id: 1,
    user: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      title: "Product Designer at EditNow",
    },
    time: "2h",
    content: "Excited to share our product's latest update—introducing dark mode for all users! ✨",
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
      "We're hiring React engineers! DM if interested or refer a friend. #hiring #reactjs",
    image: undefined,
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
  {
    id: 3,
    user: {
      name: "Aman Azmi",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      title: "Motion Designer",
    },
    time: "12m",
    content: "Showreel 2024 — Latest motion graphics for modern brands. Feedback welcome! 🎬",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    likes: 2,
    comments: 0,
    reactions: { like: 2 },
    allComments: [],
  },
  {
    id: 4,
    user: {
      name: "Jessica Ling",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      title: "Full Stack Developer",
    },
    time: "25m",
    content: "Deployed a new dashboard for analytics. 🚀\nScreenshots below!",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&q=80",
    likes: 1,
    comments: 0,
    reactions: { like: 1 },
    allComments: [],
  },
  {
    id: 5,
    user: {
      name: "Promo Plus",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      title: "Brand",
    },
    time: "1h",
    content: "Introducing our new explainer video for 2024!\nLet us know what you think 🎥👇",
    video: "https://www.w3schools.com/html/movie.mp4",
    likes: 0,
    comments: 0,
    reactions: { like: 0 },
    allComments: [],
  },
  {
    id: 6,
    user: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      title: "UX Researcher at TechCorp",
    },
    time: "3h",
    content: "Just finished a fascinating user research study on mobile app navigation patterns. The insights are mind-blowing! 📱✨",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    likes: 8,
    comments: 3,
    reactions: { like: 8 },
    allComments: [
      {
        id: 4,
        user: {
          name: "Mike Chen",
          avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        text: "Would love to see the findings!",
        createdAt: "2h",
      },
    ],
  },
  {
    id: 7,
    user: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      title: "Frontend Engineer",
    },
    time: "4h",
    content: "Successfully migrated our entire codebase to TypeScript! The type safety is incredible and the developer experience is so much better. 💻",
    likes: 12,
    comments: 5,
    reactions: { like: 12 },
    allComments: [],
  },
  {
    id: 8,
    user: {
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      title: "Product Manager",
    },
    time: "6h",
    content: "Celebrating our team's achievement! We just hit 1 million active users 🎉\n\nThank you to everyone who believed in our vision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    likes: 25,
    comments: 8,
    reactions: { like: 25 },
    allComments: [],
  },
];

const CURRENT_USER = {
  name: "You",
  avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  title: "Frontend Developer at LinkEdit",
};

const Feed = ({ searchQuery = "" }: { searchQuery?: string }) => {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});

  const handleCreatePost = ({
    content,
    image,
    video,
  }: {
    content: string;
    image?: string;
    video?: string;
  }) => {
    let newPost;
    if (image && !video) {
      newPost = {
        id: Date.now(),
        user: CURRENT_USER,
        time: "now",
        content,
        image,
        likes: 0,
        comments: 0,
        reactions: { like: 0 },
        allComments: [],
        video: undefined,
      };
    } else if (video && !image) {
      newPost = {
        id: Date.now(),
        user: CURRENT_USER,
        time: "now",
        content,
        video,
        likes: 0,
        comments: 0,
        reactions: { like: 0 },
        allComments: [],
        image: undefined,
      };
    } else {
      newPost = {
        id: Date.now(),
        user: CURRENT_USER,
        time: "now",
        content,
        likes: 0,
        comments: 0,
        reactions: { like: 0 },
        allComments: [],
        image: undefined,
        video: undefined,
      };
    }
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
    setLikedPosts((prev) => {
      const newLikedPosts = { ...prev };
      delete newLikedPosts[id];
      return newLikedPosts;
    });
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

  const filteredPosts = searchQuery
    ? posts.filter((post) => {
        const q = searchQuery.toLowerCase();
        return (
          post.content.toLowerCase().includes(q) ||
          (post.user.name && post.user.name.toLowerCase().includes(q)) ||
          (post.user.title && post.user.title.toLowerCase().includes(q))
        );
      })
    : posts;

  return (
    <div className="w-full space-y-4">
      <PostCreationInterface
        currentUser={CURRENT_USER}
        onCreate={handleCreatePost}
      />
      {filteredPosts.map((post) => (
        <FeedPostCard
          key={post.id}
          post={post}
          onReact={(type) => {
            if (type === "like" && likedPosts[post.id]) return;
            handleReact(post.id, type);
          }}
          onComment={(text) => handleComment(post.id, text)}
          onShare={() => handleShare(post.id)}
          onDelete={() => handleDeletePost(post.id)}
          isLiked={!!likedPosts[post.id]}
          canDelete={post.user.name === CURRENT_USER.name}
        />
      ))}
      {!filteredPosts.length && (
        <div className="text-center text-gray-400 text-lg font-medium py-10">
          No posts found.
        </div>
      )}
    </div>
  );
};

export default Feed;
