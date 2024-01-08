import { useContext } from "react"
import { ThemeContext } from "../Context"

export default function ThemeSwitcher(props) {
	const context = useContext(ThemeContext);
	return (
		<div className="theme-switcher-container" onClick={props.themeSwitcher}>
			<div className={`theme-switcher theme-switcher-${context}`}>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}