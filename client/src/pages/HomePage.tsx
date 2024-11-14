import React, { useEffect, useState } from "react";
import EventList from "../components/event/event_list/EventList";
import EventForm from "../components/event/event_form/EventForm";
import {
  fetchEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../services/api";
import { Event } from "../types/Event";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const handleCreate = async (event: Omit<Event, "id">) => {
    const newEvent = await createEvent(event);
    setEvents([...events, newEvent]);
  };

  const handleUpdate = async (event: Event) => {
    const updatedEvent = await updateEvent(event);
    setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
    setSelectedEvent(null);
  };

  const handleDelete = async (id: string) => {
    await deleteEvent(id);
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <>
      <div>
        <h1>Event Management</h1>
        <h2>Create or Edit an Event</h2>
      </div>
      <div className="container">
        <EventForm
          onSubmit={selectedEvent ? handleUpdate : handleCreate}
          event={selectedEvent}
        />
        <EventList
          events={events}
          onEdit={setSelectedEvent}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default HomePage;
