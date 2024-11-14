import { Request, Response } from "express";
import { Event } from "../models/event";
import { v4 as uuidv4 } from "uuid";

let events: Event[] = [
  {
    id: "1",
    title: "Tech Conference 2024",
    date: "2024-12-05",
    location: "New York, NY",
    description:
      "Annual tech conference covering the latest in AI, ML, and cloud computing.",
  },
  {
    id: "2",
    title: "JavaScript Workshop",
    date: "2024-11-20",
    location: "San Francisco, CA",
    description:
      "Hands-on workshop focused on JavaScript fundamentals and best practices.",
  },
  {
    id: "3",
    title: "React Meetup",
    date: "2024-11-25",
    location: "Los Angeles, CA",
    description:
      "Meetup for React developers to discuss new features and share experiences.",
  },
  {
    id: "4",
    title: "Product Launch",
    date: "2024-12-10",
    location: "London, UK",
    description: "Launch event for an innovative new tech product.",
  },
];

export const getEvents = (req: Request, res: Response) => {
  res.json(events);
};

export const createEvent = (req: Request, res: Response) => {
  const { title, date, location, description } = req.body;
  const newEvent: Event = { id: uuidv4(), title, date, location, description };
  events.push(newEvent);
  res.status(201).json(newEvent);
};

export const updateEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, date, location, description } = req.body;
  const event = events.find((event) => event.id === id);

  if (event) {
    event.title = title;
    event.date = date;
    event.location = location;
    event.description = description;
    res.json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
};

export const deleteEvent = (req: Request, res: Response) => {
  const { id } = req.params;
  events = events.filter((event) => event.id !== id);
  res.status(204).send();
};
