import { useState } from "react";
import Header from "./Header.jsx"
import WelcomePage from "./WelcomePage.jsx";
import ReadPage from "./ReadPage.jsx";
import SearchPage from "./SearchPage.jsx";
import Footer from "./Footer.jsx";
import { ThemeContext } from "../Context.jsx";

function bindingFunc(inner) {
	return inner;
}

export default function Body() {
	const [mode, setMode] = useState('welcome');
	let [theme, setTheme] = useState('light');

	function switchToRead() {
		setMode('read');
	}
	function switchToWelcome() {
		setMode('welcome');
	}
	function switchToSearch() {
		setMode('search');
	}
	function switchTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
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
			<ThemeContext.Provider value={theme}>
				<Header
					modeSwitcherWelcome={bindingFunc(switchToWelcome)}
					modeSwitcherSearch={bindingFunc(switchToSearch)}
					themeSwitcher={bindingFunc(switchTheme)}>
				</Header>
				{main}
				<Footer></Footer>
			</ThemeContext.Provider>

		</>
	)
}