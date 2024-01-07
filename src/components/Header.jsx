import { useContext } from "react";
import { ThemeContext } from "../Context.jsx";

export default function Header(props) {
	const context = useContext(ThemeContext);
	return (
		<div className={`header header-${context}`}>
			<p>КРАСИВОЕ</p>
			<nav>
				<div>
					<span>о проекте</span>
					<hr/>
				</div>
				<div>
					<span>темы</span>
					<hr/>
				</div>
				<div>
					<span>принять участие</span>
					<hr/>
				</div>
				<div>
					<span>контакты</span>
					<hr/>
				</div>
				<div>
					<span>поиск</span>
					<hr/>
				</div>
			</nav>
		</div>
	);
}