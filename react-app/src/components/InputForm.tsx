function InputForm() {
	const callClaude = (text: string) => {
		// Placeholder
		return "This is the response from input: " + text;
	};

	const handleFormSubmit = (event: React.FormEvent) => {
		// Prevent page from reloading
		event.preventDefault();
		// Get input data in JSON format
		const form = event.target;
		const formData = new FormData(form as HTMLFormElement);
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
		// Send to Claude and log response
		const response = callClaude(formJson.inputText.toString());
		console.log(response);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label>Enter text to send to Claude:</label>
			<input
				className="form-control"
				name="inputText"
				placeholder="Hello Claude, please write me a short poem."
			/>
			<button type="submit" className="btn btn-primary">
				Send to Claude!
			</button>
		</form>
	);
}

export default InputForm;
