import React from 'react'
import "../Podcast/Podcast.css"
import { FaYoutubeSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Podcast = () => {
    return (
        <>
            <div style={{ backgroundColor: "#222831" }} className='pb-5'>
                <div className='text-center font-monospace text-white pt-5 usp' >
                    <h1>PODCASTS</h1>
                    <div className='hr2p'></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='pt-5'>
                                <h1 className='text-info'>SKRILLEX -</h1>
                                <img src="images/pcsk.jpg" style={{ width: "80%" }} alt="" />
                            </div>
                            <div className='pt-3 nav-item'>
                                <h3 className='text-white'>The Evolution Of Skrillex's Drums 2023 (Why He Is The Best)</h3>
                                    <h5 className='text-secondary'>28k Views &nbsp;&nbsp;&nbsp; 1 month ago</h5>
                                <h4 className='text-success'>By : XLNTSOUND &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="https://www.youtube.com/@XLNTSOUND" className="text-danger fs-3"><FaYoutubeSquare /></Link></h4>
                            </div>
                            <Link to="https://www.youtube.com/watch?v=bw89WfQ1cgA" className='nav-link'> 
                            <button className="ui-btn">
                                <span>
                                    Play
                                </span>
                            </button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='hr1p'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='pt-5'>
                                <h1 className='text-info'>ALAN WALKER -</h1>
                                <img src="images/pcaw.jpg" style={{ width: "80%" }} alt="" />
                            </div>
                            <div className='pt-3 nav-item'>
                                <h3 className='text-white'>Alan Walker & Mood Melodies on creating Alone</h3>
                                    <h5 className='text-secondary'>591k Views &nbsp;&nbsp;&nbsp; 5 years ago</h5>
                                <h4 className='text-success'>By : MusicRadar Tech &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="https://www.youtube.com/@MusicRadarTechD" className="text-danger fs-3"><FaYoutubeSquare /></Link></h4>
                            </div>
                            <Link to="https://www.youtube.com/watch?v=VwCdRqTVvBs" className='nav-link'> 
                            <button className="ui-btn">
                                <span>
                                    Play
                                </span>
                            </button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='hr1p'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='pt-5'>
                                <h1 className='text-info'>DJ SNAKE -</h1>
                                <img src="images/pcds.jpg" style={{ width: "80%" }} alt="" />
                            </div>
                            <div className='pt-3 nav-item'>
                                <h3 className='text-white'>DJ Snake shares Exclusive DJ Premier Remix + why he gives music for free!</h3>
                                    <h5 className='text-secondary'>526k Views &nbsp;&nbsp;&nbsp; 7 years ago</h5>
                                <h4 className='text-success'>By : HOT 97 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="https://www.youtube.com/@hot97" className="text-danger fs-3"><FaYoutubeSquare /></Link></h4>
                            </div>
                            <Link to="https://www.youtube.com/watch?v=RsLGEk5n6HU" className='nav-link'> 
                            <button className="ui-btn">
                                <span>
                                    Play
                                </span>
                            </button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='hr1p'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='pt-5'>
                                <h1 className='text-info'>HARDWELL -</h1>
                                <img src="images/pchw.jpg" style={{ width: "80%" }} alt="" />
                            </div>
                            <div className='pt-3 nav-item'>
                                <h3 className='text-white'>Hardwell: 'Rebels Never Die,' Unspoken Realities of Touring and Evolving EDM Scene</h3>
                                    <h5 className='text-secondary'>15k Views &nbsp;&nbsp;&nbsp; 9 months ago</h5>
                                <h4 className='text-success'>By : Apple Music  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="https://www.youtube.com/@AppleMusic" className="text-danger fs-3"><FaYoutubeSquare /></Link></h4>
                            </div>
                            <Link to="https://www.youtube.com/watch?v=iW41l36Vi8A" className='nav-link'> 
                            <button className="ui-btn">
                                <span>
                                    Play
                                </span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hr1p'></div>
            </div>
        </>
    )
}

export default Podcast