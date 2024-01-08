import { useContext, useRef } from "react"
import { ThemeContext } from "../Context"
import Article from "./Article.jsx";

export default function ReadPage() {
	const context = useContext(ThemeContext);
	return (
		<section className={`main main-${context}`}>
			<div className="main-restricter">
				<Article></Article>
			</div>
		</section>
	);
}
