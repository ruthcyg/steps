// Import necessary hooks from React
import { useState, useCallback } from "react";

// Array containing messages to display at each step
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Nice one"
];

// Define the total number of steps
const totalSteps = messages.length;

// Define the App component
export default function App() {
  // Declare state variables for the current step and the open status of the step guide
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // Define the function to go to the previous step, using useCallback for performance optimization
  const handlePrevious = useCallback(() => {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }, [step]);

  // Define the function to go to the next step, using useCallback for performance optimization
  const handleNext = useCallback(() => {
    if (step < totalSteps) {
      setStep((currentStep) => currentStep + 1);
    }
  }, [step]);

  // Define the function to toggle the open status of the step guide, using useCallback for performance optimization
  const toggleOpen = useCallback(() => {
    setIsOpen((isNotOpen) => !isNotOpen);
  }, []);

  // Render the UI of the component
  return (
    <>
      {/* Close button to toggle the step guide */}
      <button className="close" onClick={toggleOpen}>
        &times;
      </button>

      {/* Display the step guide only when isOpen is true */}
      {isOpen && (
        <div className="steps">
          {/* Display the step numbers */}
          <div className="numbers">
            {/* Use Array.map to generate the step numbers */}
            {[...Array(totalSteps)].map((_, i) => (
              <div key={i} className={step >= i + 1 ? "active" : ""}>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Display the current step number and message */}
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          {/* Display the Previous and Next buttons */}
          <div className="buttons">
            <button className="button" onClick={handlePrevious}>
              Previous
            </button>
            <button className="button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
