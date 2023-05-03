import React from 'react'
import "../Footer/Social.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

const Social = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div className='scl1'><FaFacebook/></div>
                </div>
                <div className="col-md-2">
                <div className='scl1'><FaTwitter/></div>
                </div>
                <div className="col-md-2">
                <div className='scl1'><FaInstagram/></div>
                </div>
                <div className="col-md-2">
                <div className='scl1'><FaLinkedin/></div>
                </div>
                <div className="col-md-2">
                <div className='scl1'><FaPinterest/></div>
                </div>
                <div className="col-md-2">
                <div className='scl1'><FaYoutube/></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Social