import React, { useState } from 'react'
import "../Cards/Card_one.css"

const CardOne = () => {
    let [card] = useState()
    card = [
        {
            dj: "WITH Martin Garrix",
            img: "images/mg.jpg",
            e_name: "This Is The Day",
            date: "Friday 1:00 PM - 2:30 PM"
        },
        {
            dj: "WITH Hardwell",
            img: "images/hw.jpg",
            e_name: "Electro Party",
            date: "Wednesday 5:00 PM - 7:30 PM"
        },
        {
            dj: "WITH DJ Snake",
            img: "images/ds.jpg",
            e_name: "Classic Hits",
            date: "Friday 11:00 AM - 2:00 PM"
        },
        {
            dj: "WITH Alan Walker",
            img: "images/aw.jpg",
            e_name: "Classic Songs",
            date: "Friday 8:00 PM - 9:30 PM"
        }
    ]
    return (
        <>
            <div className='pb-4'>
                <div className='text-center font-monospace text-white pt-5 pb-5 us' >
                    <h1>UPCOMING SHOWS</h1>
                    <div className='hr1'></div>
                </div>
                <p className='text-secondary text-center fs-4'>The performance may be by a single musician, <br /> sometimes then called a recital, <br /> or by a musical ensemble, <br /> such as an orchestra, choir, or band.</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        card.map((item, index) =>
                            <div className="col-md-3" key={index} style={{ padding: "10px" }}>
                                <div className="card" style={{ width: "100%", height: "320px" }}>
                                    <img src={item.img} className="card-img hvr" alt="..." style={{ height: "320px" }} />
                                    <div className="card-img-overlay mar_manco">
                                        <p className='e'>
                                            {item.e_name}
                                        </p>
                                        <div className='date'>
                                            <p>{item.date}</p>
                                            <p style={{ marginTop: "-5%" }}>{item.dj}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}


export default CardOne