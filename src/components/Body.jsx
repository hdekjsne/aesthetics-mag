import { useState } from "react";
import Header from "./Header.jsx"
import WelcomePage from "./WelcomePage.jsx";
import ReadPage from "./ReadPage.jsx";
import SearchPage from "./SearchPage.jsx";
import Footer from "./Footer.jsx";

function bindingFunc(inner) {
	return inner;
}

export default function Body() {
	const [mode, setMode] = useState('welcome');

	function switchToRead() {
		setMode('read');
	}
	function switchToWelcome() {
		setMode('welcome');
	}
	function switchToSearch() {
		setMode('search');
	}

	let main;
	switch (mode) {
		case 'welcome':
			main = <WelcomePage modeSwitcherRead={bindingFunc(switchToRead)}></WelcomePage>;
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
			<Header
				modeSwitcherWelcome={bindingFunc(switchToWelcome)}
				modeSwitcherSearch={bindingFunc(switchToSearch)}>
			</Header>
			{main}
			<Footer></Footer>
		</>
	)
}