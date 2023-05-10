import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

type ContactPageProps = {
  isDark: boolean;
};

const ContactPage: React.FC<ContactPageProps> = ({ isDark }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const socket = io('http://18.200.219.78:80'); // replace with the server address and port number

  useEffect(() => {
    socket.on('response', (data: { message: string }) => {
      setChatHistory((chatHistory) => [...chatHistory, `Server: ${data.message}`]);
    });
  }, [socket]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() !== '') {
      setChatHistory((chatHistory) => [...chatHistory, `You: ${message}`]);
      socket.emit('message', { message });
      setMessage('');
    }
  };

  return (
    <div>
      <div className='main2' style={{ backgroundImage: isDark ? 'radial-gradient(#ffffff 1px, #000000 1px)' : 'radial-gradient(#000000 1px, #ffffff 1px)' }}>
        <form onSubmit={handleSubmit}>
          <table className='contact_form' style={{ backgroundColor: isDark ? '#000' : '#fff', border: isDark ? '1px solid white' : '1px solid black' }}>
            <tbody>
              <tr>
                <td><textarea name='chat' style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? '#fff' : '#000', borderBottom: isDark ? '1px solid white' : '1px solid black' }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type your message here...'></textarea></td>
              </tr>
              <tr>
                <td><button type='submit' style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>Send</button><br /></td>
              </tr>
              {chatHistory.map((message, index) => (
                <tr key={index}>
                  <td style={{ textAlign: message.startsWith('You: ') ? 'right' : 'left', paddingRight: '10px', paddingLeft: '10px' }}>
                    <div style={{ backgroundColor: message.startsWith('You: ') ? '#DCF8C6' : '#F1F0F0', padding: '10px', borderRadius: '20px', display: 'inline-block', marginBottom: '5px', maxWidth: '70%' }}>
                      {message}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;


