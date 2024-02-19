import { useContext } from "react";
import { ThemeContext } from "../Context";


export function StreamlineAsterisk1Solid(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}><path fill={props.context === 'light' ? '#627e8a' : '#8FB5E1'} fillRule="evenodd" d="M7 .09a1 1 0 0 1 1 1v4.088l3.463-2.204a1 1 0 0 1 1.074 1.688L8.863 7l3.674 2.338a1 1 0 0 1-1.074 1.688L8 8.822v4.087a1 1 0 1 1-2 0V8.822l-3.463 2.204a1 1 0 1 1-1.074-1.688L5.137 7L1.463 4.662a1 1 0 1 1 1.074-1.688L6 5.178V1.091a1 1 0 0 1 1-1Z" clipRule="evenodd"></path></svg>
  )
}

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
            <StreamlineAsterisk1Solid context={context} className="marker-star"></StreamlineAsterisk1Solid>
            <span style={{ fontSize: '24px', fontStyle: 'oblique' }}>Гибкий формат участия</span>
          </p>
          <p>В цели проекта не входит создание чёткой редакционной структуры. Поэтому, если Вы хотите принять в нём участие, Вы можете делать это по мере Ваших возможностей и наличия интереса.</p>
          <p className="marker-star">
            <StreamlineAsterisk1Solid context={context} className="marker-star"></StreamlineAsterisk1Solid>
            <span style={{ fontSize: '24px', fontStyle: 'oblique' }}>Отсутствие стандарта оценки</span>
          </p>
          <p>Проект не направлен на продвижение какой-либо идеи, он выступает платформой для реализации творческого потенциала.</p>
          <p>
            <StreamlineAsterisk1Solid context={context} className="marker-star"></StreamlineAsterisk1Solid>
            <span style={{ fontSize: '24px', fontStyle: 'oblique' }}>Модульность и изменяемость</span>
          </p>
          <p>Архитектура проекта предполагает возможность изменения и расширения.</p>
        </div>
      </div>
    </section>
  );
}
