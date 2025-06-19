
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface CreatePostModalProps {
  onCreate: (post: { content: string; image?: string; video?: string }) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onCreate }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [video, setVideo] = useState<string | undefined>(undefined);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (file.type.startsWith("image/")) {
        setImage(fileReader.result as string);
        setVideo(undefined);
      } else if (file.type.startsWith("video/")) {
        setVideo(fileReader.result as string);
        setImage(undefined);
      }
    };
    fileReader.readAsDataURL(file);
  };

  const handlePost = () => {
    if (content.trim() || image || video) {
      onCreate({ content, image, video });
      setContent("");
      setImage(undefined);
      setVideo(undefined);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex-1 bg-transparent border border-gray-300 rounded-full px-4 py-3 text-left text-gray-500 hover:bg-gray-50 transition-colors">
          Start a post
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>
        <Textarea
          placeholder="What do you want to talk about?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          accept="image/*,video/mp4,video/webm"
          className="my-2"
          onChange={handleMediaChange}
        />
        {image && (
          <img src={image} alt="Preview" className="rounded w-full mb-2 mt-1 max-h-64 object-contain" />
        )}
        {video && (
          <video controls className="rounded w-full mb-2 mt-1 max-h-64 object-contain">
            <source src={video} />
            Your browser does not support the video tag.
          </video>
        )}
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handlePost} disabled={!content.trim() && !image && !video}>Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
