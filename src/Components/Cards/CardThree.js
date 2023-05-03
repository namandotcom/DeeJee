import React, { useState } from 'react'
import "../Cards/Card_four.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const CardThree = () => {
    let [djs] = useState()
    djs = [
        {
            dj_name: "Martin Garrix",
            img: "images/mg.jpg",
            about: "Martijn Gerard Garritsen, known professionally as Martin Garrix and also as Ytram and GRX, is a Dutch DJ. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "Hardwell",
            img: "images/hw.jpg",
            about: "Robbert van de Corput, known professionally as Hardwell, is a Dutch DJ and music producer from Breda. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "DJ Snake",
            img: "images/ds.jpg",
            about: "William Sami Étienne Grigahcine, known by his stage name DJ Snake, is a French music producer and DJ. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "Alan Walker",
            img: "images/aw.jpg",
            about: "Alan Olav Walker is a British-Norwegian music producer and DJ. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "Skrillex",
            img: "images/sk.jpg",
            about: "Sonny John Moore, known professionally as Skrillex, is an American DJ and record producer. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "Marshmello",
            img: "images/mm.jpg",
            about: "Christopher Comstock, known professionally as Marshmello, is an American electronic music producer and DJ. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "Afrojack",
            img: "images/aj.jpg",
            about: "Nick Leonardus van de Wall, better known as Afrojack, is a Dutch DJ, music producer and remixer. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "DJ Alok",
            img: "images/ak.jpg",
            about: "Alok Achkar Peres Petrillo is a Brazilian musician, DJ, and record producer. ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        },
        {
            dj_name: "KSHMR",
            img: "images/kr.jpg",
            about: "Niles Hollowell-Dhar, known professionally as Kshmr, is an American musician, songwriter, DJ, record producer, former rapper, and singer ",
            fb: <FaFacebook />,
            tw: <FaTwitter />,
            ig: <FaInstagram />
        }
    ]
    return (
        <>
            <div className='pb-1'>
                <div className='text-center font-monospace text-white pt-5 us' >
                    <h1>OUR DJS</h1>
                    <div className='hr1'></div>
                </div>
            </div>
            <div className="container pt-5">
                <div className="row">
                    {
                        djs.map((item, index) =>
                            <div className="col-md-4 pt-5" key={index}>
                                <article className="card"  style={{ width: "100%", height: "400px" }}>
                                    <div className="temporary_text">
                                        <img src={item.img} alt="" width={"100%"} />
                                    </div>
                                    <div className="card_content">
                                        <span className="card_title fs-4 text-success">{item.dj_name}</span>
                                        <span className="card_subtitle">{item.about}</span>
                                        <p className="card_description">
                                            <span style={{ cursor: "pointer" }}>{item.fb}</span> &nbsp;
                                            <span style={{ cursor: "pointer" }}>{item.tw}</span> &nbsp;
                                            <span style={{ cursor: "pointer" }}>{item.ig}</span>
                                        </p>

                                    </div>
                                </article>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CardThree