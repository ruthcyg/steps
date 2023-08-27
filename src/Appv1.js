// Import necessary hooks from React
import { useState, useCallback } from "react";

// Array containing messages to display at each step
const messages = [
	"Learn React ⚛️",
	"Component  💼",
	"Derived state 🤑",
	"Learn Children Props",
];

// Define the total number of steps
const totalSteps = messages.length;
// Define the App component
export default function App() {
	return (
		<div>
			<Steps />
			<StepMessage step={1}>
				<p>Pass in Content </p>
			</StepMessage>
			<StepMessage step={2}>
				<p>Read Children Props in React </p>
			</StepMessage>
		</div>
	);
}

// Define the Step component
function Steps() {
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

					<StepMessage step={step}>
						{messages[step - 1]}{" "}
						<Button
							bgColor="#e7e7e7"
							textColor="yellow"
							onClick={() => alert(`Learn  ${messages[step - 1]}`)}
						>
							Learn More
						</Button>
					</StepMessage>

					{/* Display the Previous and Next buttons */}
					<div className="buttons">
						<Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
							{" "}
							<span>👈</span> Previous
						</Button>

						<Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
							{/* Read about the children Props*/}
							Next <span>👉</span>
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

/* Creating a reusable button using children props */

function StepMessage({ step, children }) {
	return (
		<p className="message">
			<h3>Step {step} </h3>
			{children}
		</p>
	);
}

function Button({ textColor, bgColor, onClick, children }) {
	return (
		<button
			className="button"
			style={{ backgroundColor: bgColor, color: textColor }}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
