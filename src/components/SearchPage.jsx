import { useContext } from "react";
import { ThemeContext } from "../Context";
import Tags from "./Tags.jsx";
import Authors from "./Authors.jsx";

export default function SearchPage() {
	const context = useContext(ThemeContext);
	return (
	<section className={`main search search-${context}`}>
		<div className="main-restricter">
			<input type="text" />
			<Tags tags={[
				'личность', 'мероприятие', 'кино', 'литература',
				'фотография', 'архитектура', 'интервью', 'талант',
			]}></Tags>
			<Authors authors={
				['выдержка', 'статья', 'эссе', 'мнение', 'перевод']
			}></Authors>
		</div>
	</section>);
}