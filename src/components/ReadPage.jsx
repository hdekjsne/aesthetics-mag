import { useContext, useState, lazy, Suspense } from "react";
import { ThemeContext } from "../Context.jsx";
import { data } from "../reference.js";

export default function ReadPage() {
	const context = useContext(ThemeContext);
	const path = import.meta.resolve('../reference.jsx');
	const Article = lazy(() => import(path));

	return (
		<section className={`main main-${context}`}>
			<div className="main-restricter">
				<Suspense fallback={<p>loading...</p>}>
					<Article context={context}></Article>
				</Suspense>
			</div>
		</section>
	);
}
