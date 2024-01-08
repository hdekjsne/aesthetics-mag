export default function Authors({ authors, style }) {
	return (
		<div className="authors-container" style={style}>
			{authors.map((author) => <p key={author}>{author}</p>)}
		</div>
	);
}
