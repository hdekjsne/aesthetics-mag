import { useContext, useState, lazy, Suspense } from "react";
import { ThemeContext } from "../Context.jsx";
import { data } from "../reference.js";

export default function ReadPage() {
	const context = useContext(ThemeContext);
	//const [state, setState] = useState('load');
/*
	const { default: Article } = import(data.jsxPath).then((received) => {
			setState('show');
			console.log(received);
			return received;
		}).catch(() => setState('error'));
	let jsx;
*/
	const path = import.meta.resolve('../reference.jsx');
	const Article = lazy(() => import(path));
/*
	switch (state) {
		case 'load':
			jsx = <p>loading...</p>
			break;
		case 'show':
			console.log(state);
			console.log(ThemeContext);
			console.log(Article);
			jsx = <Article context={context}></Article>;
			break;
		case 'error':
			jsx = <p>error occured!</p>
			break;
		default:
			console.log('even \'error\' state didn\'t help. something is deeply wrong');
	}
*/
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
