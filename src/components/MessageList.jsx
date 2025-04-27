import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="space-y-4">
      {messages.map(msg => (
        <div key={msg._id} className="border p-4 rounded shadow">
          <p><strong>Name:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>
          <p className="text-sm text-gray-500">{new Date(msg.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;