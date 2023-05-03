import React from 'react'
import "../About/About.css"
import CardThree from '../Cards/CardThree'
import CardTwo from '../Cards/CardTwo'


const About = () => {
  return (
    <>
      <div className='pb-1 bg-dark'>
        <div className='text-center font-monospace text-white pt-5 usau' >
          <h1>ABOUT US</h1>
          <div className='hr1au'></div>
        </div>
        <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className='text-secondary lh-sm text-center pt-5'>DEEJEE is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. Basic functions such as playing music are totally free, but you can also choose to upgrade to DEEJEE Premium.</h3>
          </div>
          <div className="col-md-6">
            <img src="images/au1.jpg" style={{width:"100%"}} alt="" />
          </div>
        </div>
      </div>
      <div className='container pt-5'>
        <h4 className='text-secondary text-center'>As the world's largest music and audio platform, DeeJee lets people discover and enjoy the greatest selection of music from the most diverse creator community on earth. Since launching in 2008, the platform has become renowned for its unique content and features, including the ability to share music and connect directly with artists, as well as unearth breakthrough tracks, raw demos, podcasts and more. This is made possible by an open platform that directly connects creators and their fans across the globe. Music and audio creators use DeeJee to both share and monetise their content with a global audience, as well as receive detailed stats and feedback from the DeeJee community.</h4>
      </div>
      <div className='pt-5'>
        <CardTwo/>
      </div>
      <div className='pt-5 pb-5'>
        <CardThree/>
      </div>
      </div>
      
    </>
  )
}

export default About