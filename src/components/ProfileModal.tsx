
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const CURRENT_USER = {
  name: "You",
  avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  title: "Frontend Developer at LinkEdit",
  location: "Bengaluru, Karnataka",
  bio: "Passionate frontend dev, React enthusiast, and UI builder.",
};

const ProfileModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{CURRENT_USER.name}'s Profile</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 mt-2">
          <img className="w-24 h-24 rounded-full border-4 border-[#0A66C2]" src={CURRENT_USER.avatar} alt="Avatar" />
          <div className="text-center">
            <div className="font-semibold text-lg">{CURRENT_USER.name}</div>
            <div className="text-[#0A66C2] font-medium text-sm">{CURRENT_USER.title}</div>
            <div className="text-xs text-gray-500 mt-2">{CURRENT_USER.location}</div>
            <div className="text-sm text-gray-700 mt-2">{CURRENT_USER.bio}</div>
          </div>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
