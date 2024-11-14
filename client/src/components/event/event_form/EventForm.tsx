import React, { useState, useEffect } from "react";
import { Event } from "../../../types/Event";
import "./EventForm.css";

interface EventFormProps {
  onSubmit: any;
  event?: Event | null;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, event }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setLocation(event.location);
      setDescription(event.description);
    }
  }, [event]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //is valid check for empty fields
    let isValid = !!(title && date && location && description);
    setIsValid(isValid);
    isValid &&
      onSubmit({ id: event?.id || "", title, date, location, description });
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className={isValid ? "" : "btn_error"}>
        {event ? "Update Event" : "Create Event"}
      </button>
    </form>
  );
};

export default EventForm;
