import { useContext, useState, lazy, Suspense } from "react";
import { ThemeContext } from "../Context.jsx";
import { data } from "../reference.js";

export default function ReadPage() {
	const context = useContext(ThemeContext);
	const path = import.meta.resolve('../reference.jsx');
	const Article = lazy(() => import(path));
	// try to make up some consts with state for inner static use

	return (
		<section className={`main main-${context}`}>
			<div className="main-restricter">
				<Suspense fallback={<progress value={null}></progress>}>
					<Article context={context}></Article>
				</Suspense>
			</div>
		</section>
	);
}
