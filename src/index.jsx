import { createRoot } from "react-dom/client";
import Body from "./components/Body.jsx";
import { ThemeContext } from "./Context.jsx";
import { useState } from "react";

console.log("Hello via Bun!");

const body = document.querySelector('body');
const root = createRoot(body);
const jsx = (
	<ThemeContext.Provider value='dark'>
			<Body></Body>
	</ThemeContext.Provider>
);
root.render(jsx);
