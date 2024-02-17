import { Suspense, lazy, useState } from "react";
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

	let Main;
	switch (mode) {
		case 'welcome':
			Main = lazy(() => import('./WelcomePage.jsx'));
			break;
		case 'about':
			Main = lazy(() => import('./AboutPage.jsx'));
			break;
		case 'topics':
			Main = lazy(() => import('./TopicsPage.jsx'));
			break;
		case 'participate':
			Main = lazy(() => import('./ParticipatePage.jsx'));
			break;
		case 'contacts':
			Main = lazy(() => import('./ContactsPage.jsx'));
			break;
		case 'search':
			Main = lazy(() => import('./SearchPage.jsx'));
			break;
		case 'read':
			Main = lazy(() => import('./ReadPage.jsx'));
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
				<Suspense fallback={
					<section className="main">
						<progress value={null}></progress>
					</section>
				}>
					{<Main modeSwitcherRead={bindingFunc(switchMode, 'read')}></Main>}
				</Suspense>
				<Footer></Footer>
			</ThemeContext.Provider>
		</>
	)
}