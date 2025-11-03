import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        Temukan Beragam Event <br /> Developer Mahasiswa
      </h1>
      <p className="text-center mt-5">
        Hackathon, Meetup, dan Konferensi — Semua Tersaji di Satu Tempat.
      </p>

      <ExploreBtn />

      <div className="mt-7 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
