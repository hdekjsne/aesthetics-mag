import { useContext } from "react";
import { ThemeContext } from "../Context.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export default function Header(props) {
	const context = useContext(ThemeContext);
	return (
		<div className={`header header-${context}`}>
			<p onClick={props.modeSwitcherWelcome}>КРАСИВОЕ</p>
			<nav>
				<div onClick={props.modeSwitcherAbout}>
					<span>о проекте</span>
					<hr/>
				</div>
				<div onClick={props.modeSwitcherTopics}>
					<span>темы</span>
					<hr/>
				</div>
				<div onClick={props.modeSwitcherParticipate}>
					<span>принять участие</span>
					<hr/>
				</div>
				<div onClick={props.modeSwitcherContacts}>
					<span>контакты</span>
					<hr/>
				</div>
				<div onClick={props.modeSwitcherSearch}>
					<span>поиск</span>
					<hr/>
				</div>
				<ThemeSwitcher themeSwitcher={props.themeSwitcher}></ThemeSwitcher>
			</nav>
		</div>
	);
}