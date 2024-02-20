import { useContext } from "react";
import { ThemeContext } from "../Context";

export default function AboutPage(props) {
  const context = useContext(ThemeContext);

  return (
    <section className={`main main-${context}`}>
      <div className="main-restricter">
        <div className="info-block">
          <p>“Красивое” не предполагает жёсткую редакционную структуру. Принимать участие в проекте можно как на постоянной основе, так и сделав разовый деятельный вклад.</p>
        </div>
        <div className="info-block">
          <p>Вы можете</p>
          <div className="info-block">
            <p>ОТПРАВИТЬ ТЕКСТ</p>
            <p>Тексты принимаются на любую подходящую тему (*ссылка на “темы”*). Отправить текст можно мне (*ссылка на “контакты”*).</p>
            <ul>В тексте должны быть:
              <li>название</li>
              <li>имя автора</li>
              <li>сам текст любой структуры</li>
              <li>медиа, которые Вы хотели бы добавить в итоговую статью</li>
              <li>описание желаемого оформления.</li>
            </ul>
          </div>
          <p>или</p>
          <div className="info-block">ПРИНЯТЬ УЧАСТИЕ КАК</div>
        </div>
      </div>
    </section>
  );
}
