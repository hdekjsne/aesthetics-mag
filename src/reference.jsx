import Tags from './components/Tags.jsx';
import Authors from './components/Authors.jsx';
import { data } from './reference.js';
import { useState } from 'react';

function GalleryCustom(props) {
	const [visible, setVisible] = useState(0);
	const themeVars = {
		light: {
			switcherBg: '#b8b0d2',
			borderColor: '#0a0915',
		},
		dark: {
			switcherBg: '#4a3249',
			borderColor: '#0a0915',
		},
	}
	return (
		<section style={{
			width: '100%',
			height: '300px',
			borderRadius: '0 0 20px 20px',
		}}>
			<div style={{ borderBottom: `1px solid ${themeVars[props.context].borderColor}`, height: '30px' }}>
				<div style={{
					backgroundColor: visible === 0 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 1 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 2 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 3 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 4 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 5 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 6 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 7 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 8 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
				<div style={{
					backgroundColor: visible === 9 ? themeVars[props.context].switcherBg : 'transparent',
					borderLeft: `1px solid ${themeVars[props.context].borderColor}`,
					width: '70px',
				}}></div>
			</div>
			<div>
				<div style={{
					display: 'flex',
					gap: '25px',
				}}>
					<img src="" alt="Cottagecore" width='150px' height='150px' />
					<div>
						<p className="title-container" style={{ marginBottom: '25px' }}></p>
						<p className='description'></p>
					</div>
				</div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</section>
	)
}

export default function ArticleCustom(props) {
	return (
		<>
			<p style={{
				width: '100%',
				backgroundColor: props.context === 'light' ? '#b8b0d2' : '#4a3249',
				marginTop: '25px',
				marginBottom: '10px',
				padding: '10px 50px',
				fontSize: '20px',
				color: props.context === 'light' ? '#0a0915' : '#8FB5E1',
			}}>{data.title}</p>
			<Tags tags={data.tags} style={{
				marginBottom: '10px',
				marginLeft: '50px',
			}}></Tags>
			<Authors authors={data.authors} style={{
				marginLeft: '50px',
			}}></Authors>
			<div className="article-preview-container" style={{
				fontSize: '15px',
				color: props.context === 'light' ? '#0a0915' : '#faf9fb',
			}}>
				<p style={{ marginBottom: '25px' }}>Приметой времени можно назвать колоссальные темпы развития технологий. Интернет, который 20 лет назад ещё, можно сказать, только зарождался, сейчас уже является рутинной частью жизни современного человека. Влияние распространяется и на укоренившиеся эстетические стандарты.</p>
				<p style={{ marginBottom: '25px' }}>«Интернет-эстетика» - это общее название концепции стилистического и жанрового деления интернет-контента. Контент при этом может быть самым разнообразным: музыка, видео, текст, изображения. Единственное, что выделает контент как принадлежащий к определённому жанру интернет-эстетики, это цель его публикации и распространения - эстетическое наслаждение.</p>
				<p style={{ marginBottom: '25px' }}>Помимо ориентации на эстетический опыт, чтобы стать отдельным жанром, направление должно соответствовать нескольким критериям:
					<ol>
						<li>жанр/стиль должен быть массовым, то есть он должен нравится сразу большой группе интернет-пользователей, а не единичному пользователю;</li>
						<li>жанр не должен быть оскорбительным и не должен принижать значение широких культурных пластов;</li>
						<li>жанр не должен быть как слишком широким, так и слишком узким.</li>
					</ol>
				</p>
				{{/* <GalleryCustom context={props.context}></GalleryCustom> */}}
				<p style={{ marginBottom: '25px' }}>Подобная концепция очень популярна. В интернете существует большое количество тематических групп, авторских аккаунтов и даже целых информационных сайтов.</p>
				<p style={{ marginBottom: '25px' }}>Особой популярности интернет-эстетики достигли в начале 2010-х и 2020-х годов. Но если в первом случае они распространялись, в основном, в низовом интернет-пространстве, то во втором уже вышли на более официальный уровень. Статьи на эту тему появлялись в Vogue, Glamour, The Atlantic, и продолжают появляться. Российский маркетплейс Lamoda составляет подборки товаров, используя стили интернет-эстетик как основу. Многие названия жанров уже стали нарицательными.</p>
				<p style={{ marginBottom: '25px' }}>Самым крупным сообществом, посвящённым непосредственно интернет-эстетике без конкретизации жанра, остаётся Aesthetics Wiki. Данный сервис содержит около тысячи статей с информацией о различных жанрах и направлениях, у него присутствуют оригинальная англоязычная версия и переведённая русскоязычная с меньшим количеством материала. Ресурс не является коммерческим, и любой человек может добавить статью о любом новом направлении, если та пройдёт модерацию.</p>
				<p style={{ marginBottom: '25px' }}>Основой для любого жанра чаще всего становятся какие-либо реальные феномены. Это могут быть одежда и макияж, исторические эпохи, стиль жизни, определённые географические местности (как доступные, так и не доступные человеку) и т.д.</p>
				<p style={{ marginBottom: '25px' }}>Таким образом, жанры интернет-эстетики запечатлевают современную интернет-моду. Как только группа интернет-пользователей создаёт инфраструктуру для распространения и обсуждения какого-либо стилистического направления, это направление уже можно считать отдельным жанром. Жанры формируются стихийно и развиваются по воле тех, кому они интересны.</p>
				<p style={{ marginBottom: '25px' }}>При этом, несмотря на то что в основе жанров всегда лежит нечто реальное, сами они не обязаны оказывать сильное влияние на реальность. Основным посылом концепции является то, что интернет-эстетика никому ничего не навязывает. Сейчас многие проводят параллели между интернет-эстетикой и субкультурами, но в этом и есть их главное отличие: если субкультура регламентирует поведение и стиль жизни своих последователей, то эстетические предпочтения существуют сами по себе, никого ни к чему не обязывая.</p>
				<p>Концепция интернет-эстетик характерна и для русскоязычного сегмента интернета, хоть и с некоторыми отличиями. Во-первых, в российских ресурсах контент обычно объединён по стилю, но его жанр часто не заявлен. Во-вторых, не все западные стили пользуются популярностью здесь.</p>
			</div>
		</>
	);
}
