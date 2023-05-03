import React, { useState } from 'react'
import Slider from 'react-slick'
import "../Cards/Card_three.css"

const CardTwo = () => {
  // let [settings] = useState({
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  // });
  let [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  return (
    <>
      <div className='pt-5 pb-4'>
        <div className='text-center font-monospace text-white pt-5 pb-5 us' >
          <h1>LOVE BY OUR LISTENERS</h1>
          <div className='hr1'></div>
        </div>
      </div>
      <div className='container bg-dark pb-5 ' align="center" >
        <Slider  {...settings} className='mar_manct'>
          <div>
            <div className="card" style={{height:"400px"}} >
              <div align="center">
                <img src="images/abe.jpg" className="card-img-top rounded-pill w-50 h-100" alt="..." />
              </div>
              <div className="card-body">
                <h6>St3phen</h6>
                <p className="card-text"><i>"Alan Walker is such a big motivator to me, he's one of the main reasons why I started making music. I hope to be as great as you one day, it would be a dream ❤"</i></p>
                <h6>The Spectre</h6>
                <h6><b>-Alan Walker</b></h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{height:"400px"}}>
              <div align="center">
                <img src="images/age.jpg" className="card-img-top rounded-pill w-50 h-100" alt="..." />
              </div>
              <div className="card-body">
                <h6>Janelle M</h6>
                <p className="card-text"><i>"One of my all time favorite songs and videos from Skrillex, you just get transported to the story feeling the music down to your bones. Absolutely love it and never get tired of it! ❤."</i></p>
                <h6>MAKE IT BUN DEM</h6>
                <h6><b>-Skrillex</b></h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{height:"400px"}}>
              <div align="center">
                <img src="images/abe.jpg" className="card-img-top rounded-pill w-50 h-100" alt="..." />
              </div>
              <div className="card-body">
                <h6>Ricardo Martins</h6>
                <p className="card-text"><i>"The perfect track just stayed amazing,because it has the perfect vocal.
                  Spaceman is gonna be like,the track of the millenium! And finally we reached the next-level music....  ❤."</i></p>
                <h6>SPACEMEN</h6>
                <h6><b>-Hardwell</b></h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{height:"400px"}}>
              <div align="center">
                <img src="images/age.jpg" className="card-img-top rounded-pill w-50 h-100" alt="..." />
              </div>
              <div className="card-body">
                <h6>Riya Singh</h6>
                <p className="card-text"><i>"This song never fails to give goosebumps and lighten up the mood even after years..... really masterpiece 🔥🔥🔥"</i></p>
                <h6>MEGENTA RIDDEM</h6>
                <h6><b>-Dj Snake</b></h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{height:"400px"}}>
              <div align="center">
                <img src="images/abe.jpg" className="card-img-top rounded-pill w-50 h-100" alt="..." />
              </div>
              <div className="card-body">
                <h6>Spongenoob</h6>
                <p className="card-text"><i>"As a little kid I never thought I'd actually relate to this song the way I do now, thank you Marshmello for all of the beautiful memories you helped us make through your music ❤."</i></p>
                <h6>ALONE</h6>
                <h6><b>-Marshmello</b></h6>
              </div>
            </div>
          </div>
          <div>
            <div className="card" style={{height:"400px"}}>
              <div align="center">
                <img src="images/abe.jpg" className="card-img-top rounded-pill w-50 h-100" alt="..." />
              </div>
              <div className="card-body">
                <h6>4ido Music</h6>
                <p className="card-text"><i>"One of the hardest drops in history. i remember watching martin's livestreams back then explaining how he made this. truly an inspiration ❤."</i></p>
                <h6>ANIMALS</h6>
                <h6><b>-Martin Garrix</b></h6>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default CardTwo