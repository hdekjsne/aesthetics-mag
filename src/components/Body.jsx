import { useState } from "react";
import Header from "./Header.jsx"
import WelcomePage from "./WelcomePage.jsx";
import ReadPage from "./ReadPage.jsx";
import SearchPage from "./SearchPage.jsx";

export default function Body() {
	const [mode, setMode] = useState('welcome');
	let main;
	switch (mode) {
		case 'welcome':
			main = <WelcomePage></WelcomePage>;
			break;
		case 'read':
			main = <ReadPage></ReadPage>;
			break;
		case 'search':
			main = <SearchPage></SearchPage>;
			break;
		default:
			console.log('no mode was provided');
	}
	return (
		<>
			<Header></Header>
			{main}
		</>
	)
}