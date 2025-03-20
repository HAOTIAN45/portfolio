import React from 'react'
import { useNavigate } from 'react-router-dom'
import CircularText from "../components/CircularText.jsx"
import SplashCursor from "../components/SplashCursor.jsx"

const Home = () => {

    const navigate = useNavigate()

    const goToAbout = () => {
        navigate("/before-about")
    }

    return (
        <div>
            <div className='bg-black w-full h-screen flex flex-col items-center justify-center'>
                <SplashCursor/>
                <CircularText
                    text="CHRISTIAN*DWI*NUGROHO*"
                    onHover='speedUp'
                    spinDuration={20}
                    className='custom-class'
                    onClick={goToAbout}
                />
            </div>
            
        </div>
    )
}

export default Home
