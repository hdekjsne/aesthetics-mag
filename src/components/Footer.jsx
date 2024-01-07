import { useContext } from "react"
import { ThemeContext } from "../Context"

export default function Footer() {
	const context = useContext(ThemeContext);
	return (
		<div className={`footer footer-${context}`}>
			<p></p>
		</div>
	)
}