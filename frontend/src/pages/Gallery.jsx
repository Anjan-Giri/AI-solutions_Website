import React from "react";
import projectBG from "../images/project-bg.jpg";
import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpeg";
import gallery4 from "../images/gallery4.jpeg";
import gallery5 from "../images/gallery5.jpeg";
import gallery6 from "../images/gallery6.jpeg";

function Gallery() {
  const galleryItems = [
    {
      image: gallery1,
      date: "June 15, 2024",
      title: "AI Innovations Conference",
      description:
        "Exploring advancements in AI-driven workplace technologies.",
    },
    {
      image: gallery2,
      date: "April 22, 2024",
      title: "Prototyping Showcase",
      description:
        "Highlighting cutting-edge AI-powered prototyping solutions.",
    },
    {
      image: gallery3,
      date: "January 10, 2024",
      title: "Team Building Event",
      description: "Fostering collaboration and innovation among team members.",
    },
    {
      image: gallery4,
      date: "August 18, 2023",
      title: "Tech Meetup",
      description:
        "Engaging industry leaders to discuss AI trends and challenges.",
    },
    {
      image: gallery5,
      date: "March 5, 2023",
      title: "AI Workshop",
      description:
        "A hands-on session introducing AI-powered prototyping tools.",
    },
    {
      image: gallery6,
      date: "November 20, 2022",
      title: "Product Launch Event",
      description:
        "Unveiling our latest AI-powered software solutions for workplaces.",
    },
  ];

  const GalleryItem = ({ image, date, title, description }) => (
    <div className="bg-white border border-[#ddd] rounded-lg shadow-md overflow-hidden relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-5 text-center">
        <span className="inline-block text-sm font-bold text-white bg-[#4A90E2] px-2.5 py-1 rounded mb-2.5">
          {date}
        </span>
        <h3 className="text-2xl mb-2.5 text-[#333]">{title}</h3>
        <p className="text-base text-[#555] mb-2.5">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <section
        className="h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-5 text-[rgb(253,253,253)]"
        style={{ backgroundImage: `url(${projectBG})` }}
      >
        <h2 className="text-5xl mb-5">Gallery</h2>
        <p className="text-2xl mb-8">
          Explore our past events and milestones that shape our journey.
        </p>
      </section>
      <main className="font-sans bg-[#f4f4f9] text-[#333]">
        <div className="max-w-[1200px] mx-auto p-5">
          <div className="text-center mb-10">
            <h1 className="text-4xl text-[#333] mb-2.5">Gallery</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
