import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Details from "./components/Details";
import useFetch from "./components/useFetch";

function App() {
	const [inputVal, setInputVal] = useState("Habib-0007");
	const [username, setUsername] = useState("Habib-0007");
	const [lightmode, setLightmode] = useState(true);

	function handleInputVal() {
		setInputVal(event.target.value);
	}

	function handleUsername() {
		setUsername(inputVal);
	}

	const { data, isLoading, error } = useFetch(
		`https://api.github.com/users/${username}`
	);

	function changeMode() {
		setLightmode(!lightmode);
		document.body.classList.toggle("dark-theme");
	}

	return (
		<section className={lightmode ? "container" : "container dark-mode"}>
			<Header
				lightmode={lightmode}
				changeMode={changeMode}
			/>
			<Search
				inputVal={inputVal}
				handleInputVal={handleInputVal}
				handleUsername={handleUsername}
			/>
			<Details
				isLoading={isLoading}
				data={data}
				error={error}
			/>
		</section>
	);
}

export default App;
