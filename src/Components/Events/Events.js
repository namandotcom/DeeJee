import React from 'react'
import "../Events/Events.css"

const Events = () => {
    return (
        <>
            <div style={{ backgroundColor: "#222831" }}>
                <div className='text-center font-monospace text-white pt-5 usev' >
                    <h1>UPCOMING EVENTS</h1>
                    <div className='hr1ev'></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='pt-5'>
                                <h1 className='text-info'>SKRILLEX -</h1>
                                <img src="images/uesk.jpg" style={{ width: "100%" }} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 ps-5">
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>DATE & TIME :</label>
                                <h5 className='text-secondary'>Friday 23, June <br /> 9 : 00 AM</h5>
                            </div>
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>LOCATION :</label>
                                <h5 className='text-secondary'>The National Arena<br /> <p className='pt-2 h6'>Bucharest, Romania</p> </h5>
                            </div>
                            <br />
                            <button className='buttonev'>BUY TICKETS</button>
                        </div>
                    </div>
                </div>
                <div className='hr2ev'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='pt-5'>
                                <h1 className='text-info'>ALAN WALKER -</h1>
                                <img src="images/ueaw.jpg" style={{ width: "100%", height: "350px" }} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 ps-5">
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>DATE & TIME :</label>
                                <h5 className='text-secondary'>Sunday 28, May <br /> 11 : 00 AM</h5>
                            </div>
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>LOCATION :</label>
                                <h5 className='text-secondary'>Hard Rock Event Center<br /> <p className='pt-2 h6'>Pool, US</p> </h5>
                            </div>
                            <br />
                            <button className='buttonev'>BUY TICKETS</button> 
                        </div>
                    </div>
                </div>
                <div className='hr2ev'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='pt-5'>
                                <h1 className='text-info'>DJ SNAKE -</h1>
                                <img src="images/ueds.jpg" style={{ width: "100%", height: "350px" }} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 ps-5">
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>DATE & TIME :</label>
                                <h5 className='text-secondary'>Saturday 6, May <br /> 10 : 00 PM</h5>
                            </div>
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>LOCATION :</label>
                                <h5 className='text-secondary'>Zouk Nightclub<br /> <p className='pt-2 h6'>Las Vegas, NV, US</p> </h5>
                            </div>
                            <br />
                            <button className='buttonev'>BUY TICKETS</button> 
                        </div>
                    </div>
                </div>
                <div className='hr2ev'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='pt-5'>
                                <h1 className='text-info'>HARDWELL -</h1>
                                <img src="images/uehw.jpg" style={{ width: "100%", height: "350px" }} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 ps-5">
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>DATE & TIME :</label>
                                <h5 className='text-secondary'>Saturday 22, July <br /> 11 : 15 PM</h5>
                            </div>
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>LOCATION :</label>
                                <h5 className='text-secondary'>Airport Weeze<br /> <p className='pt-2 h6'>Weeze, Germany</p> </h5>
                            </div>
                            <br />
                            <button className='buttonev'>BUY TICKETS</button> 
                        </div>
                    </div>
                </div>
                <div className='hr2ev'></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className='pt-5'>
                                <h1 className='text-info'>MARSHMELLO -</h1>
                                <img src="images/uemm.jpg" style={{ width: "100%", height: "350px" }} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 ps-5">
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>DATE & TIME :</label>
                                <h5 className='text-secondary'>Saturday 17, June <br /> 11 : 00 AM</h5>
                            </div>
                            <div className='pt-5'>
                                <label htmlFor="" className='text-primary h2'>LOCATION :</label>
                                <h5 className='text-secondary'>Encore Beach Club <br /> <p className='pt-2 h6'>Las Vegas</p> </h5>
                            </div>
                            <br />
                            <button className='buttonev'>BUY TICKETS</button> 
                        </div>
                    </div>
                </div>
                <div className='hr2ev'></div>
                <br />
            </div>
        </>
    )
}

export default Events