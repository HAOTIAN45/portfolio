import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper, { Step } from "../components/Stepper.jsx";

const BeforeAbout = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const validateStep = (step) => {
        if (step === 2 && !name.trim()) {
            return false; 
        }
        return true; 
    };

    const handleFinalStepClick = () => {
        setTimeout(() => {
            navigate("/about"); 
        }, 1000); 
    };

    return (
        <div>
            <div className='bg-black w-full h-screen'>
                <Stepper
                    initialStep={1}
                    onStepChange={(step) => {
                        console.log(step);
                    }}
                    onFinalStepCompleted={() => console.log("All steps completed!")}
                    onFinalStepClick={handleFinalStepClick}
                    validateStep={validateStep} 
                    backButtonText="Previous"
                    nextButtonText="Next"
                >
                    <Step>
                        <h2>Welcome to My Portfolio Journey!</h2>
                    </Step>
                    <Step>
                        <h2>What's Your Name?</h2>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name?"
                            className="mt-4 p-2 rounded-lg w-full text-white"
                        />
                    </Step>
                    <Step>
                        <h2>Thanks, {name}!</h2>
                        <p>Let's go to the main page!</p>
                    </Step>
                </Stepper>
            </div>
        </div>
    );
};

export default BeforeAbout;