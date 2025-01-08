import React, { useState } from 'react';
import "../App.css";
import { div } from 'framer-motion/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission logic (e.g., an API call)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ email: '', subject: '', message: '' }); // Clear the form
    }, 2000);
  };

  return (
    <div >
        <h2 className="mb-4 text-5xl tracking-tight font-bold text-opacity-70 text-white text-center">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 text-center text-white sm:text-xl font-light text-opacity-40">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
      </p>
        <div className="back bg-fixed py-8 lg:py-16 px-4 mx-auto dm-serif-text-regular">
      <div >
      
      <div className="max-w-screen-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-3 text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
