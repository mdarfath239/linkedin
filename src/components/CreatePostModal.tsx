
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface CreatePostModalProps {
  onCreate: (post: { content: string; image?: string }) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onCreate }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => setImage(fileReader.result as string);
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlePost = () => {
    if (content.trim() || image) {
      onCreate({ content, image });
      setContent("");
      setImage(undefined);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#0A66C2]" variant="default">Start a Post</Button>
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
          accept="image/*"
          className="my-2"
          onChange={handleImageChange}
        />
        {image && (
          <img src={image} alt="Preview" className="rounded w-full mb-2 mt-1 max-h-64 object-contain" />
        )}
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handlePost} disabled={!content.trim() && !image}>Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
