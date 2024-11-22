import { useState } from 'react';
import { Calendar, dateFns } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function ReservationCalendar() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Reservation Title');
        if (title) {
            setEvents([
                ...events,
                {
                    start,
                    end,
                    title,
                },
            ]);
        }
    };

    return (
        <div className="h-screen p-4">
            <Calendar
                selectable
                localizer={dateFns}
                events={events}
                defaultView="month"
                views={['month', 'week', 'day']}
                defaultDate={new Date()}
                onSelectSlot={handleSelect}
                onSelectEvent={event => alert(event.title)}
            />
        </div>
    );
}
