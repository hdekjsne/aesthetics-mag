import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import { ThemeContext } from "./Context.jsx";

console.log("Hello via Bun!");

const body = document.querySelector('body');
const root = createRoot(body);
const jsx = (
	<ThemeContext.Provider value='dark'>
			<Header></Header>
	</ThemeContext.Provider>
);
root.render(jsx);
