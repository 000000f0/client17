import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

type HomePageProps = {
  isDark: boolean;
};

const HomePage: React.FC<HomePageProps> = ({ isDark }) => {
  return (
    <div>




    <div className='home1' style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>
      <div>
      <h1 style={{ textShadow:  !isDark ? '0 0 1px #000, 0 0 2px #000, 0 0 3px #000, 0 0 4px #000'
      :'0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff'
       }}>The Energy Company<br />You Own</h1>
        <Link to="/about"><button style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? '#fff' : '#000' , border: isDark ? '1px solid white' : '1px solid black'}}>About</button></Link>
      </div>
    </div>
    
<div className='home2' style={{ backgroundColor: isDark ? '#fff' : '#000', color: isDark ? '#000' : '#fff' }}>
      <div>
        <h1 style={{ textShadow:  !isDark ? '0 0 1px #000, 0 0 2px #000, 0 0 3px #000, 0 0 4px #000'
      :'0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff'
       }}>Meet Up<br />Announcements</h1>
        <Link to="/about"><button style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? '#fff' : '#000' , border: isDark ? '1px solid white' : '1px solid black'}}><FontAwesomeIcon icon={faBroadcastTower} /></button></Link>
      </div>
    </div>

    </div>
  );
};

export default HomePage;







