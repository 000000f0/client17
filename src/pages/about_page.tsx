import React from 'react';
import { Link } from 'react-router-dom';

type AboutPageProps = {
  isDark: boolean;
};

const AboutPage: React.FC<AboutPageProps> = ({ isDark }) => {
  return (
    
    
      <div className='grey_background'>
        <center>
      <div className="banner">
        
  <iframe width="60%" height="500" src="https://www.youtube.com/embed/VIDEO_ID" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
  
</div>
</center>


<div className='main4'  style={{ backgroundImage: isDark ? 'radial-gradient( ellipse farthest-corner at 12px 12px , #0c0c0c, #0c0c0c 50%, #000000 50%)' : 'radial-gradient( ellipse farthest-corner at 12px 12px , #ebebeb, #ebebeb 50%, #ffffff 50%)', color: isDark ? 'white':'black'}}>
     

     
     <h1>Ark4</h1>
      
      

      <h3 >Why?</h3>
      <p> There are problems in the world which communities are solving in their own way.
      <br/><br/>
The focus of Ark4 is building a sustainable future for our future generations through self-sustaining descentralized economies.
‍<br/><br/>
You may ask what about the planet, are we doing our bit? Are we a green company? Yes.
Is it our main focus? No.
<br/><br/>
We are a green company in that we utilize renewable resources and our output is sustainable.
<br/><br/>
Ark4 originates in Southern Africa, where the ever increasing power shortage is bringing economies to their knees. The escalating cost of living and worries over energy sources, though, is a global problem!
<br/><br/>
So in a world so reliant on energy, how do we take back our voice, our control?
You own the power! It is the key to economic freedom!
This is where the blockchain comes in and where the Dao comes into play. Everyone has a voice, a vote, a meaningful say with full transparency.
‍<br/><br/>
To be bold, this is how we change the world. We can’t do it alone. We start, we build and we collaborate with like minded organisations. Organisations aligned to the voice of their communities.
<br/><br/>
Some might view this as a tall objective, perhaps a mountain. Even Everest was conquered, but not in a day.
We start small. We start one volt at a time.
<br/><br/>
We grow. We do it together.
<br/><br/>
We are taking action
        
</p>



  </div>

  <div className='main4'  style={{ background:'url("https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/vision_render1.jpg")' ,  backgroundSize: "cover",
  backgroundPosition: "center", color: isDark ? 'white':'black' ,textShadow:  isDark ? '0 0 1px #000, 0 0 2px #000, 0 0 3px #000, 0 0 4px #000'
  :'0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff'}}>




<b>
<h2 >Beta Close</h2>
      <p> Beta Close is a new gen farm for a new generation.
‍<br /><br />
Join us in Turning The Sun into Dollars for You, Now!
<br /><br />
A physical (IRL) sustainable farm within a self-governing, decentralized economies.
We envisage this to contain many such farms globally.
<br /><br />
Ark4 is continuously watching and experimenting with the power of Solar, Wind, Water and Earth to develop future sustainable energy sources.
<br /><br />
Our focus is on building core infrastructure for sustainable economies in the real world and digital platforms such as Web3 and the Metaverse.
‍<br /><br />
We achieve this through various digital communication platforms that enable you to have a voice.
</p>
</b>
</div>

  <div className='main4'  style={{ backgroundColor: isDark ? '#000' : '#fff', color: isDark ? 'white':'black'}}>
     

     
      

      <h2 >Power</h2>
      <p> Ark4 introduces the monetization of energy, providing a revenue stream and building the core infrastructures.
      <br/><br/>
We need energy to become self-sustainable. Energy powers our world and we cannot thrive without it.
        
</p>



</div>

<div className='main4'  style={{ backgroundColor: isDark ? '#013220' : '#90EE90', color: isDark ? 'white':'black'}}>
     

     
      

      <h2 >Green Mining</h2>
      <p> Sustainable BTC Mining is the key to our monetization strategy.
‍<br/><br/>
We achieve this through a combination of our mining equipment and partnerships with global players.
<br/><br/>
It is a well known fact that the largest cost of mining is power.
Our BTC mining is powered by 100% renewable energy, providing sustainable returns for you.
<br/><br/>
We are mining green. BTC green.
</p>



</div>
<div className='main4'  style={{ backgroundColor: isDark ? '#000' : '#fff',
  color: isDark ? 'white' : 'black',}}>

      

      <h2 ><img width="30px" style={{marginBottom:'-6px'}} src={isDark? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/dao_dark.jpg':'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/dao_light.jpg'}/> DAO</h2>
      <p> We utilise the blockchain as the foundation of Ark4’s governance.
The DAO gives the community a voice and enables each of us to be heard.
<br/><br/>
Click Here to secure your own Dollar based NFT and become part of a sustainable energy future where your voice counts.
<br/><br/>
Membership includes:
 Ownership without the fear of having it taken away from you.
 Income through investment and yields.
 Empowerment through freedom and returning fundamental rights to the people.
 A future through skills, training and upliftment.
</p>

</div>
  <div className='founders'>
  <h2>Meet the Founders</h2>
  <div className='founders-container'>
    <div className='founders-img'>
      <img src='https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/founder_1.jpeg' alt='Founder 1' />
      <h3>Sean</h3>
      <p>Co-Founder & CEO</p>
    </div>
    <div className='founders-img'>
      <img src='https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/founder_2.jpeg' alt='Founder 2' />
      <h3>Sean</h3>
      <p>Co-Founder & CTO</p>
    </div>
  </div>
</div>

    
    




</div>









  );
};


export default AboutPage;
