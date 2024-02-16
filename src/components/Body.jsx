import { Suspense, useState } from "react";
import Header from "./Header.jsx"
import WelcomePage from "./WelcomePage.jsx";
import ReadPage from "./ReadPage.jsx";
import SearchPage from "./SearchPage.jsx";
import Footer from "./Footer.jsx";
import { ThemeContext } from "../Context.jsx";

function bindingFunc(innerFunc, param) {
	return () => innerFunc(param);
}

export default function Body() {
	const [mode, setMode] = useState('welcome');
	const [theme, setTheme] = useState('light');

	function switchMode(mode) {
		setMode(mode);
	}
	function switchTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	let main;
	switch (mode) {
		case 'welcome':
			main = <WelcomePage modeSwitcherRead={bindingFunc(switchMode, 'read')}></WelcomePage>;
			break;
		case 'about':
			break;
		case 'topics':
			break;
		case 'participate':
			break;
		case 'contacts':
			break;
		case 'search':
			main = <SearchPage></SearchPage>;
			break;
		case 'read':
			main = <ReadPage></ReadPage>;
			break;	
		default:
			console.log('no mode was provided');
	}
	return (
		<>
			<ThemeContext.Provider value={theme}>
				<Header
					modeSwitcherWelcome={bindingFunc(switchMode, 'welcome')}
					modeSwitcherAbout={bindingFunc(switchMode, 'about')}
					modeSwitcherTopics={bindingFunc(switchMode, 'topics')}
					modeSwitcherParticipate={bindingFunc(switchMode, 'participate')}
					modeSwitcherContacts={bindingFunc(switchMode, 'contacts')}
					modeSwitcherSearch={bindingFunc(switchMode, 'search')}
					themeSwitcher={bindingFunc(switchTheme)}>
				</Header>
				<Suspense fallback={<progress value={null}></progress>}>
					{main}
				</Suspense>
				<Footer></Footer>
			</ThemeContext.Provider>

		</>
	)
}