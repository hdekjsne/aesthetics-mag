import { useContext } from "react"
import { ThemeContext } from "../Context"

export default function ThemeSwitcher(props) {
	const context = useContext(ThemeContext);
	return (
		<div className="theme-switcher-container">
			<div className={`theme-switcher theme-switcher-${context}`}
				onClick={props.themeSwitcher}>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}