import React from 'react';
import { Link } from 'react-router-dom';

type ContactPageProps = {
  isDark: boolean;
};

const ContactPage: React.FC<ContactPageProps> = ({ isDark }) => {
  return (
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
      <td><textarea style={{ backgroundColor: isDark ? '#000' : '#fff' , color: isDark ? '#fff' : '#000' , borderBottom: isDark ? '1px solid white' : '1px solid black'}}  placeholder="Message"></textarea></td>
    </tr>
    <tr>
      <td><button style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>Contact Us</button><br /></td>
    </tr>
  </tbody>
</table>


      
       </div>
  );
};

export default ContactPage;
