import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

type EmailPageProps = {
  isDark: boolean;
};

const EmailPage: React.FC<EmailPageProps> = ({ isDark }) => {
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
      <table className='contact_form'  style={{ backgroundColor: isDark ? '#000' : '#fff' , border: isDark ? '1px solid white' : '1px solid black'}}>
        <tbody>
          <tr>
            <td><br /><input style={{ backgroundColor: isDark ? '#000' : '#fff' , color: isDark ? '#fff' : '#000' , borderBottom: isDark ? '1px solid white' : '1px solid black'}} type="text" placeholder="Name"/></td>
          </tr>
          <tr>
            <td><input style={{ backgroundColor: isDark ? '#000' : '#fff' , color: isDark ? '#fff' : '#000' , borderBottom: isDark ? '1px solid white' : '1px solid black'}}  type="email" placeholder="Email"/></td>
          </tr>
          <tr>
            <td><textarea style={{ backgroundColor: isDark ? '#000' : '#fff' , color: isDark ? '#fff' : '#000' , borderBottom: isDark ? '1px solid white' : '1px solid black'}} value={message} onChange={e => setMessage(e.target.value)} placeholder="Message"></textarea></td>
          </tr>
          <tr>
            <td><button onClick={handleSubmit} style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>Contact Us</button><br /></td>
          </tr>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>{message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default EmailPage;