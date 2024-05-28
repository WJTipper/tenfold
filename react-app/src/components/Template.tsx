import { useState } from "react";

interface Props {
	title: string;
	message: string;
}

function Template({ title, message }: Props) {
	// Conditional Rendering
	const exampleBool = true;
	const conditionalText = "Will only display if exampleBool is true";
	// Event Handler
	const handleButtonCClick = (event: React.MouseEvent) => console.log(event);
	// useState
	const defaultValue = 0;
	const [myVariable, setMyVariable] = useState(defaultValue);
	const handleButtonDClick = () => setMyVariable(1);

	return (
		<>
			<p>Title from Props: {title}</p>
			<p>Example JSX:</p>
			<p className="example-class"></p>
			<p>{exampleBool && conditionalText}</p>
			<p>
				<button onClick={() => console.log("Clicked!")}>A</button>
				<button onClick={(event) => console.log(event)}>B</button>
				<button onClick={handleButtonCClick}>C</button>
			</p>
			<p>Change myVariable by clicking this button:</p>
			<button onClick={handleButtonDClick}>D</button>
			<p>myVariable = {myVariable}</p>
			<p>Message from Props: {message}</p>
		</>
	);
}

export default Template;
