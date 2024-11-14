import React from "react";
import { Event } from "../../../types/Event";
import "./EventItem.css";

interface EventItemProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

const EventItem: React.FC<EventItemProps> = ({ event, onEdit, onDelete }) => {
  return (
    <div className="event-item-wrapper">
      <div className="event-item">
        <h3>{event.title}</h3>
        <p className="event-item-description">{event.description}</p>
      </div>

      <div className="event-item-bottom">
        <div className="event-item-details">
          <p className="event-item-date">{event.date}</p>
          <p className="event-item-location">{event.location}</p>
        </div>
        <div className="event-item-buttons">
          <button className="edit-button" onClick={() => onEdit(event)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => onDelete(event.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
