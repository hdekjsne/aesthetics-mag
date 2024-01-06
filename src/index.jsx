import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";

console.log("Hello via Bun!");

const body = document.querySelector('body');
const root = createRoot(body);
const jsx = <Header></Header>;
root.render(jsx);
