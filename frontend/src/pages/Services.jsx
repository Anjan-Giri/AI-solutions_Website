import React, { useState } from "react";
import bg from "../images/services-bg.jpg";
import aiAssistant from "../images/ai-assistant.jpeg";
import prototyping from "../images/prototyping.jpeg";
import softwareDevelopment from "../images/software-development.jpeg";
import dataAnalytics from "../images/analytics.jpeg";
import technicalSupport from "../images/technical-support.jpeg";
import training from "../images/training.jpeg";

const Services = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(null); // Track the rating value
  const [feedback, setFeedback] = useState(""); // Track the feedback text
  const [userFeedback, setUserFeedback] = useState([]); // Store customer feedback

  const testimonials = [
    {
      feedback:
        "Turbo Farm has completely transformed the way we approach agriculture. With its AI-driven insights and automation, we’ve seen a significant boost in crop yields while reducing resource usage. The real-time monitoring system is a game-changer, allowing us to address issues before they become problems. Not only has it made our operations more efficient, but it’s also helped us embrace sustainable farming practices. Turbo Farm is truly the future of agriculture!",
      author: "David Wisseman",
      position: "Owner at Warner Farm",
      rating: "4.8 out of 5",
    },
    {
      feedback:
        "Log AI has revolutionized our inventory management system. The AI-driven optimization has helped us maintain perfect stock levels, reducing both overstock and stockouts. The real-time tracking and predictive analytics have made our supply chain more efficient, and we’re now able to make data-driven decisions that save both time and money. The seamless integration with our existing systems was a huge plus. Log AI is a must-have for any business looking to streamline inventory operations and stay ahead of the competition!",
      author: "Michael Reed",
      position: "Supply Chain Manager at Vaux Brewery",
      rating: "4.2 out of 5",
    },
    {
      feedback:
        "As an investor, Stockk has completely changed the way I approach trading. The AI-powered insights and real-time market analysis have given me a huge advantage in making informed decisions. The automated trading feature has helped me execute trades at the right moments, even when I’m not able to monitor the market. Whether you’re a beginner or an experienced trader, Stockk simplifies the process while maximizing potential returns. It's an essential tool in my investment strategy!",
      author: "Sarah Lampard",
      position: "Independent Investor",
      rating: "4.9 out of 5",
    },
    {
      feedback:
        "LaundriQ is a groundbreaking innovation that perfectly complements Samsung’s commitment to smart home solutions. As a regional manager, I’ve seen firsthand how this AI-powered tool enhances the laundry experience for our customers. By intelligently detecting fabric quality and optimizing detergent usage, LaundriQ not only ensures superior cleaning results but also supports eco-friendly practices. This collaboration with LaundriQ aligns with our vision of creating smarter, more sustainable home appliances. It’s truly a game-changer in the world of laundry care.",
      author: "James Lee",
      position: "Regional Manager at Samsung Electronics",
      rating: "4.7 out of 5",
    },
  ];

  // Add more testimonials here as needed

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitted(true); // Update the state to show the popup

    // Add the feedback to the list
    setUserFeedback([
      ...userFeedback,
      { feedback, rating, author: "Anonymous", ratingValue: `${rating}/5` },
    ]);

    // Reset the rating and feedback after submission
    setTimeout(() => {
      setIsSubmitted(false); // Hide the popup after 3 seconds
      setRating(null); // Reset rating
      setFeedback(""); // Reset feedback textarea
    }, 3000);
  };

  const services = [
    {
      title: "AI Virtual Assistants",
      image: aiAssistant,
      description:
        "Enhance workplace productivity with our AI-driven virtual assistants. These intelligent tools can automate routine tasks, provide real-time data insights, and help employees stay focused on strategic priorities. Designed to integrate seamlessly with your workflows, they improve efficiency and collaboration across teams.",
    },
    {
      title: "Prototyping Services",
      image: prototyping,
      description:
        "Transform your ideas into reality with our rapid and affordable prototyping solutions. Our team ensures quick iterations and real-world testing to refine your concepts into market-ready products. Whether it's software or hardware, we bring your vision to life with precision and speed.",
    },
    {
      title: "Custom Software Development",
      image: softwareDevelopment,
      description:
        "Leverage bespoke software solutions tailored to your business needs. From automation tools to large-scale enterprise systems, we craft robust, scalable, and user-friendly applications that solve complex challenges and drive innovation within your organization.",
    },
    {
      title: "Data Analytics",
      image: dataAnalytics,
      description:
        "Unlock the power of data with advanced analytics tools that deliver actionable insights. Our solutions help you monitor key performance metrics, identify trends, and make data-driven decisions to enhance business strategies and improve overall efficiency.",
    },
    {
      title: "Technical Support",
      image: technicalSupport,
      description:
        "Stay ahead with our dedicated technical support team. From seamless system integration to troubleshooting complex issues, we ensure your business operates without interruptions. Our expertise guarantees reliability and peace of mind for your operations.",
    },
    {
      title: "Employee Training",
      image: training,
      description:
        "Equip your team with the skills to succeed in an AI-driven world. Our tailored training programs focus on maximizing the potential of AI tools, enhancing technical proficiency, and fostering a culture of innovation within your organization.",
    },
  ];

  const handleRatingChange = (value) => {
    setRating(value); // Update rating when a star is clicked
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value); // Update feedback text
  };

  return (
    <div>
      {/* Services Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-5 text-white"
        style={{
          backgroundImage: `url(${bg})`,
          height: "80vh",
        }}
      >
        <h2 className="text-5xl mb-5">Services</h2>
        <p className="text-2xl max-w-3xl">
          At AI Solution Innovation, we provide cutting-edge AI-driven tools and
          services designed to optimize your business processes, enhance
          productivity, and unlock new opportunities. Let us empower your
          journey toward innovation and success.
        </p>
      </section>

      {/* Services List */}
      <section className="py-12 px-5 bg-gray-50">
        <h2 className="text-4xl mb-10 text-center text-gray-800">
          Our Services
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-5 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[350px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What Our Customers Say */}
      <section className="py-12 px-5 bg-gray-50">
        <h2 className="text-4xl uppercase tracking-wide text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <p className="italic text-gray-600 mb-4 leading-relaxed">
                {testimonial.feedback}
              </p>
              <p className="font-bold text-gray-800">
                — {testimonial.author}, {testimonial.position}
              </p>
              <p className="text-cyan-500 font-bold">
                Ratings: {testimonial.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Ratings & Feedback Form */}
      <section className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-xl shadow-lg relative">
        <h2 className="text-2xl font-bold text-blue-600 mb-5 text-center">
          Leave Your Feedback
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label
            htmlFor="rating"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Rate Us:
          </label>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={value} className="relative">
                <input
                  type="radio"
                  id={`star${value}`}
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={() => handleRatingChange(value)}
                  className="hidden"
                />
                <label
                  htmlFor={`star${value}`}
                  className={`text-3xl cursor-pointer ${
                    rating >= value ? "text-yellow-400" : "text-gray-300"
                  } hover:text-yellow-400`}
                >
                  ★
                </label>
              </div>
            ))}
          </div>

          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows="5"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
            required
          />
          <button
            type="submit"
            className="w-full py-4 px-8 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all"
          >
            Submit Feedback
          </button>
        </form>

        {isSubmitted && (
          <div className="absolute top-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
            Successfully sent!
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
