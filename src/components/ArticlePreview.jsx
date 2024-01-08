import Tags from "./Tags.jsx";
import Authors from "./Authors.jsx";

export default function ArticlePreview(props) {
	return (
		<div className="article-preview">
			<img src="../src/assets/C0A7087F-A3FE-4670-B8E7-471CDF75D2BC_1_201_a.jpeg" alt="" height='100%' />
			<div>
				<p className="title-container" onClick={props.modeSwitcherRead}>{props.title}</p>
				<Tags tags={props.tags}></Tags>
				<Authors authors={props.authors}></Authors>
				<p className="description">{props.description}</p>
			</div>
		</div>
	)
}