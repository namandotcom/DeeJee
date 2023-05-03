import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Admin = () => {
    const [getData, getSetdata] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3010/allData")
            .then((res) => {
                getSetdata(res.data)
                console.log(res.data);
            })
    }, [])
    return (
        <>
            <table border={1} width={'50%'} align='center'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.f_name}</td>
                                <td>{item.e_mail}</td>
                                <td>{item.sub}</td>
                                <td>{item.desc}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Admin