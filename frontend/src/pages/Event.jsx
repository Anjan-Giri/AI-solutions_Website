import React from "react";
import projectBG from "../images/project-bg.jpg";
import event1 from "../images/event1.jpeg.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";

function UpcomingEvents() {
  const upcomingEventItems = [
    {
      image: event1,
      date: "February 25, 2025",
      title: "AI-Driven Automation Summit",
      description:
        "Join us as we explore the future of AI automation in various industries.",
      venue: "Convention Center, New York, NY",
    },
    {
      image: event2,
      date: "March 10, 2025",
      title: "Tech Innovation Expo",
      description: "Discover the latest innovations in AI and technology.",
      venue: "Tech Park, San Francisco, CA",
    },
    {
      image: event3,
      date: "April 20, 2025",
      title: "Startup Networking Gala",
      description:
        "Meet innovative startups and network with industry experts.",
      venue: "Grand Hall, Los Angeles, CA",
    },
  ];

  const EventItem = ({ image, date, title, description, venue }) => (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-5" />
      <div className="px-6 py-4">
        <div className="mb-3">
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500 mb-4">
          <strong>Venue: </strong>
          {venue}
        </div>
        <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section
        className="h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-5 text-white"
        style={{ backgroundImage: `url(${projectBG})` }}
      >
        <h2 className="text-5xl font-bold mb-5">Upcoming Events</h2>
        <p className="text-xl max-w-[600px] mb-8">
          Stay ahead by attending our upcoming events, conferences, and
          workshops focused on technology and innovation.
        </p>
      </section>

      <main className="bg-gray-50 py-10">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingEventItems.map((item, index) => (
              <EventItem
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.description}
                venue={item.venue}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default UpcomingEvents;
