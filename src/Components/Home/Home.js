import "../Home/Home.css"
import CardOne from '../Cards/CardOne'
import CardTwo from '../Cards/CardTwo'
import CardThree from '../Cards/CardThree'


const Home = () => {

    return (
        <>
            <div style={{ backgroundColor: "#222831" }}>
                <div>
                    <CardOne />
                </div>
            </div>
            <div style={{ backgroundColor: "#222831" }}>
                <div className='pb-5'>
                    <CardThree />
                </div>
            </div>
            <div className="bg-dark">
                <CardTwo/>
            </div>
            
        </>
    )
}

export default Home