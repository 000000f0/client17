import React, { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

type ContactPageProps = {
  isDark: boolean;
};

const ContactPage: React.FC<ContactPageProps> = ({ isDark }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [response, setResponse] = useState<string>('');

  useEffect(() => {
    const newSocket = io('http://18.200.219.78:80/');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: Record<string, string> = {};

    const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
    
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);
      if (element.name && element.value) {
        formData[element.name] = element.value;
      }
    }

    if (socket) {
      socket.emit('contact', formData, (response: string) => {
        setResponse(response);
      });
    }
  };

  return (
    <div className="main" style={{ backgroundImage: isDark ? 'radial-gradient(#ffffff 1px, #000000 1px)' : 'radial-gradient(#000000 1px, #ffffff 1px)' }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us by filling in the form below:</p>
      <form onSubmit={handleSubmit} className="contact-form" style={{ backgroundColor: isDark ? '#000' : '#fff', border: isDark ? '1px solid white' : '1px solid black' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Your name here" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Your email address" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" placeholder="Type your message here"></textarea>
        <button type="submit">Send Message</button>
      </form>
      {response && <div>{response}</div>}
    </div>
  );
};

export default ContactPage;