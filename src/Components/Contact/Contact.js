import React, { useState } from 'react'
import "../Contact/Contact.css"
import axios from 'axios'

const Contact = () => {

    const [state,setState] = useState({
        f_name:'',
        e_mail:'',
        sub:'',
        desc:''
    })
    const handleChange = (event) =>{
        const {name,value}=event.target
        // console.log(event.target);
        setState({...state,[name]:value})
    }

    const saveData = (event) =>{
        event.preventDefault();
        console.log(state);
        axios.post("http://localhost:3010/allData", state)
        .then((res)=>{
            console.log(res);
        })
        .then((err)=>{
            console.log(err);
        })
    }
    return (
        <>
            <div className="cubg">
                <div className='text-center font-monospace text-white pt-5 uscu' >
                    <h1>Contact Us</h1>
                    <div className='hr1cu'></div>
                </div>
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-8">
                            <form action="#" onSubmit={saveData}>
                                <div>
                                    <label htmlFor="" className="cufl text-secondary fs-5 ps-1">Full Name</label> <br />
                                    <input type="text" name='f_name' onChange={handleChange} className='cufi bg-transparent h6 text-white ps-3 mt-2' value={state.f_name||''} placeholder='Full Name' />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="" className="cufl text-secondary fs-5 ps-1">Email</label> <br />
                                    <input type="email" name='e_mail' onChange={handleChange} className='cufi bg-transparent h6 text-white ps-3 mt-2' value={state.e_mail||''} placeholder='Email Address' />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="" className="cufl text-secondary fs-5 ps-1">Subject</label> <br />
                                    <input type="text" name='sub' onChange={handleChange} className='cufi bg-transparent h6 text-white ps-3 mt-2' value={state.sub||''} placeholder='Subject'  />
                                </div>
                                <br />
                                <div >
                                    <label htmlFor="" className="cufl text-secondary fs-5 ps-1">Message</label> <br />
                                    <textarea name="desc" onChange={handleChange} className='cuft bg-transparent h6 text-white ps-3 pt-2 mt-2' value={state.desc||''} placeholder='Say hello to us' ></textarea>
                                </div>
                                <div >
                                    <input type="submit" value="Send Message" onClick={()=> window.location.reload(false)} className='cufb' />
                                </div>
                            </form>
                            <div className='cuci'>
                                <label htmlFor="" className="text-white fs-2 fw-bold pt-2 ">Address :</label> <br />
                                <p className='text-white fs-5 pt-1 '>A-31 Pitampura, Delhi - 110043</p>
                                <label htmlFor="" className="text-white fs-2 fw-bold pt-1 ">Phone Number :</label> <br />
                                <p className='text-white fs-5 pt-1 '>9315716144</p>
                                <label htmlFor="" className="text-white fs-2 fw-bold pt-1 ">Email Address :</label> <br />
                                <p className='text-white fs-5 pt-1 '>deejee@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact