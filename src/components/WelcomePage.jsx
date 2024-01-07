import { useContext } from "react";
import { ThemeContext } from "../Context.jsx";
import ArticlePreview from "./ArticlePreview.jsx";

export default function WelcomePage() {
	const context = useContext(ThemeContext);
	const authors = ['Анастасия Мамаева'];
	const tags = ['статья', 'эссе'];
	const title = 'Интернет-эстетики';
	const filling = 'Тестовое короткая информационная статья на тему интернет-эстетик. Написана на основе курсовой работы специально для этого макета.';
	return (
		<section className={`main main-${context}`}>
			<div className="main-restricter">
			<section className="article-preview-container">
				<ArticlePreview title={title} tags={tags} authors={authors} filling={filling}></ArticlePreview>
			</section>
			</div>
		</section>
	)
}