import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

type DiscordPageProps = {
  isDark: boolean;
};

const DiscordPage: React.FC<DiscordPageProps> = ({ isDark }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const socket = io('http://localhost:4000'); // replace the URL with your server address

  useEffect(() => {
    socket.on('message', (data: string) => {
      setMessages((messages) => [...messages, data]);
    });
  }, [socket]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() !== '') {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div>
    <div className='main2' style={{ backgroundImage: isDark ? 'radial-gradient(#ffffff 1px, #000000 1px)' 
    :
     'radial-gradient(#000000 1px, #ffffff 1px)' }}>      
      <h1>Discord Chat Bot</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: isDark ? '#000' : '#fff' , border: isDark ? '1px solid white' : '1px solid black'}}>
        <label>
          Enter your message:
          <input type="text" value={message} onChange={e => setMessage(e.target.value)}
          style={{ backgroundColor: isDark ? '#000' : '#fff' , color: isDark ? '#fff' : '#000' , borderBottom: isDark ? '1px solid white' : '1px solid black'}} />
        </label>
        <button type="submit" style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>Send</button>
      </form>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
    </div>
  );
};

export default DiscordPage;