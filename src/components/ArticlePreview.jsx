function Tag({ tags }) {
	return (
		<div className="tags-container">
			{tags.map((tag) => <p key={tag}>{tag}</p>)}
		</div>
		);
}

function Authors({ authors }) {
	return (
		<div className="authors-container">
			{authors.map((author) => <p key={author}>{author}</p>)}
		</div>
	);
}

export default function ArticlePreview(props) {
	return (
		<div className="article-preview">
			<img src="" alt="" />
			<div>
				<p className="title-container">{props.title}</p>
				<Tag tags={props.tags}></Tag>
				<Authors authors={props.authors}></Authors>
				<p className="description">{props.filling}</p>
			</div>
		</div>
	)
}