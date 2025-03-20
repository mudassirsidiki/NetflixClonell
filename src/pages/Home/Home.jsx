import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>The Protector (2005) is a high-octane martial arts thriller starring Tony Jaa as Kham, a Thai warrior on a mission to rescue his stolen elephant, a sacred symbol of his family's heritage. The journey takes him to Australia, where he battles an international crime syndicate through a series of intense, visually stunning fight sequences, including a famous single-take scene. .</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>  
          <Titlecards />
        </div>
      </div>
      {/* <div className="morecards">
            <Titlecards title={"Blockbuster Movies"} />
            <Titlecards title={"Only on Netflix"} />
            <Titlecards title={"Upcoming"} />
            <Titlecards title={"Top Pics for You"} />
          </div> */}

    <Footer />




    </div>
  )
}

export default Home
