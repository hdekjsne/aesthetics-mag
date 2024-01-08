import { useContext } from "react";
import { ThemeContext } from "../Context.jsx";
import ArticlePreview from "./ArticlePreview.jsx";
import { data } from "../reference.js";

export default function WelcomePage(props) {
	const context = useContext(ThemeContext);
	return (
		<section className={`main main-${context}`}>
			<div className="main-restricter">
			<section className="article-preview-container">
				<ArticlePreview
					title={data.title} tags={data.tags}
					authors={data.authors} description={data.description}
					modeSwitcherRead={props.modeSwitcherRead}>
				</ArticlePreview>
			</section>
			</div>
		</section>
	)
}