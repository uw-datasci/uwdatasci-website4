import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../../store/firebase-context';
import Carousel from '../UI/Carousel';
import EventCard from '../cards/EventCard';
import ID from '../other/ID';
import { EVENTS } from '../../constants/data';

export default function EventsCarousel({ showTitle }) {
  const firebaseContext = useContext(FirebaseContext);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (firebaseContext.events.length !== 0) {
      setEvents(firebaseContext.events);
    }
  }, [firebaseContext.events]);

  return (
    <section className="section relative ">
      <ID id="events" />
      <Carousel title={showTitle ? 'Events' : ''} gap="mr-6 lg:mr-8">
        {events.map((event) => (
          <EventCard
            title={event.title}
            description={event.description}
            time={event.time}
            location={event.location}
            image={event.image}
            key={event.title}
          />
        ))}
      </Carousel>
    </section>
  );
}
