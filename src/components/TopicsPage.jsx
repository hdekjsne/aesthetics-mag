import { useContext } from "react";
import { ThemeContext } from "../Context";
import Tags from "./Tags.jsx";

function RepeatedPTags({ allTags }) {
  return allTags.map(([tag, description]) => {
    return (
      <>
        <Tags tags={[tag]}></Tags>
        <p className="margin-left-50">{description}</p>
      </>
    );
  });
} 

export default function AboutPage(props) {
  const context = useContext(ThemeContext);

  return (
    <section className={`main main-${context}`}>
      <div className="main-restricter">
        <div className="info-block">
          <p>Проект сконцентрирован на освещении эстетических феноменов, существующих в самом университете и за его пределами, через призму восприятия студентов.</p>
        </div>
        <div className="info-block">
          <p>Статьи принимаются на любую тему в рамках обозначенного предмета.</p>
          <p>Для удобства темы разделены на рубрики:</p>
          <RepeatedPTags allTags={[
            ['личность', ' - рассказ о человеке, его жизни и деятельности.'],
            ['мероприятие', ' - обзор любого мероприятия, совпадающего с проектом по теме.'],
            ['кино', ' - о кинематографе.'],
            ['литература', ' - о литературе и рекомендации.'],
            ['фотография', '.'],
            ['архитектура', '.'],
            ['интервью', '.'],
            ['талант', ' - освещение личного творчества студентов РГПУ.'],
          ]}></RepeatedPTags>
          <p>По типу материалы могут быть разделены следующим образом:</p>
          <RepeatedPTags allTags={[
            ['выдержка', ' - отрывок книги/статьи/монографии и пр.'],
            ['статья', ' - полноценная статья со ссылками на источники.'],
            ['эссе', ' - оформленное рассуждение без ссылок на источники.'],
            ['мнение', ' - выражение личного мнения.'],
            ['перевод', '.'],
          ]}></RepeatedPTags>
        </div>
      </div>
    </section>
  );
}
