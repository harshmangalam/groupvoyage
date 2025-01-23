import { useState } from "react";
import { Bell } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "New message",
    description: "You have a new message from your travel buddy",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: "2",
    title: "Upcoming trip",
    description: "Your trip to Paris is in 3 days",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    title: "Flight schedule changed",
    description: "Your flight to Rome has been rescheduled",
    time: "2 hours ago",
    read: true,
  },
];

export function NotificationPopover() {
  const [notifications] = useState(initialNotifications);

  return (
    <div className="w-80">
      <ScrollArea className="h-[300px]">
        {notifications.length === 0 ? (
          <p className="text-center text-muted-foreground">No notifications</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`flex items-start space-x-4 px-3 py-4 rounded-md bg-background hover:bg-accent`}
              >
                <Bell className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </ScrollArea>
    </div>
  );
}
