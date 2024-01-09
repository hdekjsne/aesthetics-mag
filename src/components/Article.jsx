import { useContext } from "react";
import { data } from "../reference.js";
import { ThemeContext } from "../Context.jsx";

export default function Article() {
	const context = useContext(ThemeContext);
	return <article><ArticleCustom context={context}></ArticleCustom></article>;
}