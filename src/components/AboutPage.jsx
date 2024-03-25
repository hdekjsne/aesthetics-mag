import { useContext } from "react";
import { ThemeContext } from "../Context";

export default function AboutPage(props) {
  const context = useContext(ThemeContext);

  return (
    <section className={`main main-${context}`}>
      <div className="main-restricter">
        <div className="info-block">
          <p>У всех нас есть свой уникальный набор интересов, которые многим хотелось бы реализовывать с комфортом и в компании единомышленников. Институт - это как раз подходящее место для подобной деятельности, но, к сожалению, когда я искала для себя студенческое объединение, я так и не смогла найти то, которое было бы мне близко своей философией или направлением деятельности.</p>
          <p>Герцена пока не выпускает периодику на тему эстетического, а доступные университетские сетевые ресурсы не предлагают неформальную практическую деятельность. В связи с этим у меня появилась идея своими силами создать проект, который бы предоставлял своим участникам широкие возможности самовыражения без давления и формальных рамок оформления своих мыслей. Безусловно, у проекта есть определённые требования к публикуемому материалу, но они ограничиваются небольшими рекомендациями (подробнее: *ссылка на «принять участие»#тексты*).</p>
        </div>
        <div className="info-block">
          <p>«Красивое» - это студенческий проект, целью которого является создание и поддержка развития сетевого журнала об эстетике, созданный на базе Института философии человека РГПУ им. Герцена.</p>
          <p>“Красивое” ставит своей задачей обратить внимание на эстетическое в самом университете, осветить эстетические опыты и исследования студентов (подробнее: *ссылка на “темы”*).</p>
        </div>
        <div className="info-block">
          <p className="marker-star">
            <span style={{ fontSize: '24px', fontStyle: 'oblique' }}>- Гибкий формат участия</span>
          </p>
          <p>В цели проекта не входит создание чёткой редакционной структуры. Поэтому, если Вы хотите принять в нём участие, Вы можете делать это по мере Ваших возможностей и наличия интереса.</p>
          <p className="marker-star">
            <span style={{ fontSize: '24px', fontStyle: 'oblique' }}>- Отсутствие стандарта оценки</span>
          </p>
          <p>Проект не направлен на продвижение какой-либо идеи, он выступает платформой для реализации творческого потенциала.</p>
          <p>
            <span style={{ fontSize: '24px', fontStyle: 'oblique' }}>- Модульность и изменяемость</span>
          </p>
          <p>Архитектура проекта предполагает возможность изменения и расширения.</p>
        </div>
      </div>
    </section>
  );
}
