export default function Tags({ tags, style }) {
	return (
		<div className="tags-container" style={style}>
			{tags.map((tag) => <p key={tag}>{tag}</p>)}
		</div>
		);
}
