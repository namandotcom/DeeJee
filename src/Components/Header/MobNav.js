import React from 'react'
import "../Header/MobNav.css"
import { Link } from 'react-router-dom'

const MobNav = () => {
    return (
        <>
            <div className='mnu'>
                <ul>
                <li>
                <Link className='lnk' to={"/"}>HomePage</Link><br />
                </li>
                <li>
                <Link className='lnk' to={"/"}>HomePage</Link><br />
                </li>
                <li>
                <Link className='lnk' to={"/"}>HomePage</Link><br />
                </li>
                <li>
                <Link className='lnk' to={"/"}>HomePage</Link><br />
                </li>
                <li>
                <Link className='lnk' to={"/"}>HomePage</Link><br />
                </li>
                </ul>
            </div>
        </>
    )
}

export default MobNav