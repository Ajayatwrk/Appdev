import React from 'react';
import './CombinedMessageCard.css'; // Assuming you will style it separately

// Reusable MessageCard Component
const MessageCard = ({ profileImage, message, userName }) => {
  return (
    <div className="message-card">
      <div className="message-card-profile-pic" style={{ backgroundImage: `url(${profileImage})` }}>
        {!profileImage && 'No Image'} {/* Fallback text when no profile image is provided */}
      </div>
      <div className="message-card-content">
        <div className="message-card-username">{userName}</div>
        <div className="message-card-message">{message}</div>
      </div>
    </div>
  );
};

// Combined Component with Data and Card Layout
const CombinedMessageCard = () => {
  const messages = [
    {
      id: 1,
      profileImage: 'https://www.example.com/profile1.jpg',
      userName: 'John Doe',
      message: 'Hello, this is a test message!',
    },
    {
      id: 2,
      profileImage: 'https://www.example.com/profile2.jpg',
      userName: 'Jane Smith',
      message: 'This is another message.',
    },
    {
      id: 3,
      profileImage: '',
      userName: 'Alex Lee',
      message: 'Here is a message without a profile image.',
    },
  ];

  return (
    <div className="message-card-outer-container">
      {/* Message Card Container 1 */}
      <div className="message-card-container">
        {messages.slice(0, 2).map((msg) => (
          <MessageCard
            key={msg.id}
            profileImage={msg.profileImage}
            userName={msg.userName}
            message={msg.message}
          />
        ))}
      </div>

      {/* Message Card Container 2 */}
      <div className="message-card-container">
        {messages.slice(2, 3).map((msg) => (
          <MessageCard
            key={msg.id}
            profileImage={msg.profileImage}
            userName={msg.userName}
            message={msg.message}
          />
        ))}
      </div>
    </div>
  );
};

export default CombinedMessageCard;
