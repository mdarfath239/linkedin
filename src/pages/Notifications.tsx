
import React from "react";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Viewed your profile",
    description: "Jane Doe has viewed your profile.",
    time: "2h ago",
    user: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      headline: "Front-End Developer at Example Corp"
    },
    type: "profile-view"
  },
  {
    id: 2,
    title: "New connection",
    description: "John Appleseed accepted your connection request.",
    time: "5h ago",
    user: {
      name: "John Appleseed",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      headline: "Designer at Apple"
    },
    type: "connection"
  },
  {
    id: 3,
    title: "Job alert: Node.js Developer",
    description: "HCLTech has posted a new job matching your profile.",
    time: "1d ago",
    user: {
      name: "HCLTech",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5e/HCL_Technologies_Logo.svg",
      headline: "Company"
    },
    type: "job"
  },
  {
    id: 4,
    title: "React Bootcamp starting soon",
    description: "Don't forget to sign up for the React Bootcamp next week.",
    time: "2d ago",
    user: {
      name: "LinkedClone",
      avatar: "/placeholder.svg",
      headline: "Platform Notification"
    },
    type: "event"
  },
];

const NotificationCard = ({ notification }: { notification: typeof notifications[0] }) => (
  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition group animate-fade-in">
    <img
      src={notification.user.avatar}
      alt={notification.user.name}
      className="w-12 h-12 rounded-full object-cover border shadow-sm"
    />
    <div className="flex-1 min-w-0">
      <div className="flex flex-row items-center gap-2">
        <span className="font-semibold text-base text-gray-900">{notification.user.name}</span>
        {notification.type === "job" && (
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded">Job Alert</span>
        )}
        {notification.type === "connection" && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded">New Connection</span>
        )}
      </div>
      <div className="text-sm text-gray-700">{notification.description}</div>
      <div className="text-xs text-gray-400 mt-0.5">{notification.user.headline}</div>
    </div>
    <div className="min-w-max flex flex-col items-end gap-2">
      <span className="text-xs text-gray-400">{notification.time}</span>
    </div>
  </div>
);

const Notifications = () => {
  return (
    <div className="min-h-screen bg-[#F3F6F8] flex flex-col items-center px-2 py-8 w-full">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow border p-0 md:p-6 flex flex-col gap-2">
        <div className="flex items-center gap-3 border-b pb-4 px-4 pt-4 md:p-0">
          <Bell className="text-[#0A66C2] w-8 h-8" />
          <span className="text-2xl font-bold text-[#0A66C2]">Notifications</span>
        </div>
        <div className="p-2 md:p-0 flex flex-col gap-2 mt-1">
          {notifications.map((n) => (
            <NotificationCard key={n.id} notification={n} />
          ))}
        </div>
      </div>
      {/* Footer mimic */}
      <footer className="w-full flex flex-col items-center justify-center text-xs text-gray-400 mt-8 pb-3 gap-2">
        <div className="flex flex-wrap gap-4">
          <span>About</span>
          <span>Accessibility</span>
          <span>Help Center</span>
          <span>Privacy &amp; Terms</span>
          <span>Ad Choices</span>
        </div>
        <div>
          LinkedClone &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Notifications;
