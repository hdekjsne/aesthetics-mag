import { useContext } from "react";
import { ThemeContext } from "../Context";

export default function AboutPage(props) {
  const context = useContext(ThemeContext);

  return (
    <section className={`main main-${context}`}>
      <div className="main-restricter"></div>
    </section>
  );
}
