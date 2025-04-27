import React, { useEffect, useState } from 'react';
import MessageList from '../components/MessageList';

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/contact')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <MessageList messages={messages} />
    </div>
  );
};

export default Admin;