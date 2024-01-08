import Tags from "./Tags.jsx";
import Authors from "./Authors.jsx";

export default function ArticlePreview(props) {
	return (
		<div className="article-preview">
			<img src="../src/assets/7C506DA1-9B4A-435F-A6DB-0ACF496A2073_1_201_a.jpeg" alt="" height='100%' />
			<div>
				<p className="title-container" onClick={props.modeSwitcherRead}>{props.title}</p>
				<Tags tags={props.tags}></Tags>
				<Authors authors={props.authors}></Authors>
				<p className="description">{props.description}</p>
			</div>
		</div>
	)
}