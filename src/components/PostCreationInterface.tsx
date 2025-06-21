
import React, { useRef } from "react";
import { Video, Image, FileText } from "lucide-react";
import CreatePostModal from "./CreatePostModal";

interface PostCreationInterfaceProps {
  currentUser: {
    name: string;
    avatar: string;
    title: string;
  };
  onCreate: (post: { content: string; image?: string; video?: string }) => void;
}

const PostCreationInterface: React.FC<PostCreationInterfaceProps> = ({
  currentUser,
  onCreate,
}) => {
  const videoInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        onCreate({
          content: "",
          video: fileReader.result as string,
        });
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        onCreate({
          content: "",
          image: fileReader.result as string,
        });
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleVideoClick = () => {
    videoInputRef.current?.click();
  };

  const handlePhotoClick = () => {
    photoInputRef.current?.click();
  };

  const handleWriteArticle = () => {
    onCreate({
      content: "Check out my latest article! What are your thoughts on the current trends in our industry?",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-4 mb-4">
      {/* Hidden file inputs */}
      <input
        ref={videoInputRef}
        type="file"
        accept="video/mp4,video/webm,video/mov"
        className="hidden"
        onChange={handleVideoUpload}
      />
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoUpload}
      />
      
      {/* Top section with avatar and input */}
      <div className="flex gap-3 items-center mb-3">
        <img
          src={"/profile.jpg"}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <CreatePostModal onCreate={onCreate} />
      </div>
      
      {/* Bottom section with action buttons */}
      <div className="flex justify-between items-center pt-2">
        <PostActionButton
          icon={<Video className="w-5 h-5 text-green-600" />}
          label="Video"
          onClick={handleVideoClick}
        />
        <PostActionButton
          icon={<Image className="w-5 h-5 text-blue-500" />}
          label="Photo"
          onClick={handlePhotoClick}
        />
        <PostActionButton
          icon={<FileText className="w-5 h-5 text-orange-500" />}
          label="Write article"
          onClick={handleWriteArticle}
        />
      </div>
    </div>
  );
};

function PostActionButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 font-medium text-sm flex-1 justify-center"
      onClick={onClick}
      type="button"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export default PostCreationInterface;
