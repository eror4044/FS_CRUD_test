import React from "react";
import EventItem from "../event_item/EventItem";
import { Event } from "../../../types/Event";
import "./EventList.css";

interface EventListProps {
  events: Event[];
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEdit, onDelete }) => {
  return (
    <div className="event-list-wrapper">
      {events.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EventList;
