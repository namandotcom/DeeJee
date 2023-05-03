import React from 'react'
import Social from './Social'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import PrivacyPolicy from '../Privacy-Policy/PrivacyPolicy'

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "deeppink" }}>
        <Social />
      </div>
      <div style={{ backgroundColor: "#222831" }} className='pt-5'>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h3 className='text-white font-monospace usf'>ABOUT DEEJEE</h3>
                <div className='hrf'></div>
                <p className=' fs-5 text-secondary pt-3'>DEEJEE is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world. Basic functions such as playing music are totally free, but you can also choose to upgrade to DEEJEE Premium.</p>
              </div>
              <div className='pt-5'>
                <h3 className='text-white font-monospace usf'>SUBSCRIBE</h3>
                <div className='hrf'></div>
                <div className='pt-3'>
                  <input type="text"
                    style={{ width: "70%", height: "60px", backgroundColor: "transparent", border: "solid 2px white", fontStyle: "italic", fontSize: "18px", textAlign: "center", color: "grey" }} placeholder='Enter your email' />
                  <span>
                    <button style={{ backgroundColor: "deeppink", width: "30%", height: "62px", border: "0px", color: "white", fontSize: "18px", marginLeft: "-2%", borderRadius: "5%" }}>Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3 className='text-white font-monospace usf'>NAVIGATIONS</h3>
                <div className='hrf'></div>
                <div>
                  <div className="container pt-2">
                    <div className="row">
                      <div className="col-md-6">
                        <ul className='navbar-nav'>
                          <li className="nav-item fnh">
                            <Link className='nav-link fs-5 ' to="/">Home</Link>
                          </li>
                          <li className="nav-item fnh">
                            <Link className='nav-link fs-5 ' to="Djs ">DJs</Link>
                          </li>
                          <li className="nav-item fnh" >
                            <div className="btn-group dropend">
                              <div type="button" className=" dropdown-toggle fs-5" data-bs-toggle="dropdown" aria-expanded="false">
                                Shows
                              </div>
                              <ul className="dropdown-menu dropdown-menu-dark ms-3">
                                <li><Link className="dropdown-item text-white fs-5" to="events">Events</Link></li>
                                <li><Link className="dropdown-item text-white fs-5" to="podcasts">Podcast</Link></li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className='navbar-nav'>
                          <li className="nav-item fnh">
                            <Link to="about-us" className='nav-link fs-5 '>About Us</Link>
                          </li>
                          <li className="nav-item fnh">
                            <Link to="contact-us" className='nav-link fs-5 '>Contact Us</Link>
                          </li>
                          <li className='nav-item'>
                            <Link className="fnh nav-link fs-5 text-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Privacy Policy
                            </Link>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body fpm">
                                    <PrivacyPolicy/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item fnh">
                            <Link to="admin" className='nav-link fs-5 '>Admin</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className='pt-3'>
                  <h3 className='text-white font-monospace usf'>FOLLOW US</h3>
                  <div className='hrf'></div>
                  <div style={{ paddingTop: "5%" }}>
                    <span className='fnh fs-4'><FaFacebook /></span> &nbsp; <span className='fnh fs-4'><FaInstagram /></span> &nbsp; <span className='fnh fs-4'><FaTwitter /></span> &nbsp; <span className='fnh fs-4'><FaLinkedin /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3 className='text-white font-monospace usf'>WATCH LIVE STREAMING</h3>
                <div className='hrf'></div>
                <div className='mt-3 wls'>
                  <div style={{ paddingTop: "60%" }} align="center">
                    <Link to="https://www.youtube.com/watch?v=uPhsq1msjl8">
                      <button>
                        P L A Y
                        <div id="clip">
                          <div id="leftTop" className="corner"></div>
                          <div id="rightBottom" className="corner"></div>
                          <div id="rightTop" className="corner"></div>
                          <div id="leftBottom" className="corner"></div>
                        </div>
                        <span id="rightArrow" className="arrow"></span>
                        <span id="leftArrow" className="arrow"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer