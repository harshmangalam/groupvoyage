import Image from "next/image";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  posterUrl: string;
  eventName: string;
  price: number;
  date: Date;
  time: string;
  numberOfDays: number;
  location: string;
  groupName: string;
  dayName: string;
}

export function EventCard({
  posterUrl,
  eventName,
  price,
  date,
  time,
  numberOfDays,
  location,
  dayName,
  groupName,
}: EventCardProps) {
  return (
    <Card className="w-full mx-auto overflow-hidden shadow-lg">
      <div className="relative h-48 sm:h-64">
        <Image
          src={posterUrl || "/placeholder.svg"}
          alt={`${eventName} poster`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{eventName}</h3>
        <p className="text-lg font-semibold text-green-600 mb-2">
          ${price.toFixed(2)}
        </p>
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
          <p className="text-sm text-gray-600">
            {dayName}, {date.toLocaleDateString()} at {time}
          </p>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
          <p className="text-sm text-gray-600">
            {numberOfDays} day{numberOfDays > 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center mb-2">
          <MapPin className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="flex items-center mb-2">
          <Users className="w-5 h-5 mr-2 text-gray-600 flex-shrink-0" />
          <p className="text-sm text-gray-600">{groupName}</p>
        </div>
      </CardContent>
    </Card>
  );
}
