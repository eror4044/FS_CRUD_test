import { Event } from '../types/Event';

const API_URL = 'http://localhost:3000/api/events';

export const fetchEvents = async (): Promise<Event[]> => {
    const response = await fetch(API_URL);
    return response.json();
};

export const createEvent = async (event: Omit<Event, 'id'>): Promise<Event> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
    });
    return response.json();
};

export const updateEvent = async (event: Event): Promise<Event> => {
    const response = await fetch(`${API_URL}/${event.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
    });
    return response.json();
};

export const deleteEvent = async (id: string): Promise<void> => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};
