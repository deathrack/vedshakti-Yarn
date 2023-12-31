import React from 'react';
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi' 
import CountUp from 'react-countup';

const Hero = () => {
  return (
   <section className="hero-wrapper">
     <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
           <div className="hero-title">
            <div className='white-circle'/>
             <h1>
                Search <br/>
                The Directory
             </h1>
           </div>
           <div className='flexColStart hero-des'>
            <span>Find a variety of formulations needed to treat the patient that suit them</span>
            <span>Forget all difficulties in finding the right thing just get it from the source</span>
           </div>
           <div className='flexCenter search-bar'>
             <HiLocationMarker color="red" size={25}></HiLocationMarker>
             <input type='text' />
             <button className='button'>Search</button>
           </div>
           <div className='flexCenter stats'>
              <div className='flexColStart stat'>
                 <span>
                    <CountUp start={1000} end={1200} duration={1}/><span>+</span>
                    </span><span className='secondaryText'>
                        Premium Products
                 </span>
                 
              </div>  
              <div className='flexColStart stat'>
                 <span>
                    <CountUp start={1000} end={12000} duration={2}/><span>+</span>
                    </span><span>
                        Live Subscribers
                 </span>
                 
              </div>  
              <div className='flexColStart stat'>
                 <span>
                    <CountUp start={1000} end={120000} duration={3}/><span>+</span>
                    </span><span>
                        Views
                 </span>
                 
              </div>  
           </div>
        </div>
        {/* right side */}
        <div className='flexCenter hero-right'>
            <div className='image-container'>
                <img src="./hero-image.png" alt="" />
            </div>
        </div>
     </div>
   </section>
  );
}

export default Hero;
