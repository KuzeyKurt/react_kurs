import React, { useEffect, useState } from "react";
import s from "./Article.module.css"
import "../../../css/App.css"
import { useDispatch, useSelector } from "react-redux";
import { getArticlesThunkCreator } from "../../../redux/reducers/articles-reducer";

const Article = (props) => {
	const dispatch = useDispatch();
	const state = useSelector(state => state)
	const [dataLoaded, setDataLoaded] = useState(false);


	useEffect(() => {
		dispatch(getArticlesThunkCreator(window.location.pathname));
	}, [dispatch])


	useEffect(() => {
		if (Object.keys(state.articlesPage.articles).length !== 0) {
			setDataLoaded(true);
		}
	}, [state.articlesPage]);

	useEffect(() => {
		if (dataLoaded === true) {
			// dispatch({type: 'SetOpenedEventData', newEventId: clickedEventId})
			console.log('Диспатч на редьюсер в котором загрузится ин-фа в choosedArticleData а в качестве данных отправить state')
			dispatch({ type: 'SetOpenedArticle', openedArticleId: window.location.pathname })
		}
	}, [dataLoaded])


	let linkId = '';
	let copyLink = () => {
		linkId = window.location.origin + '/article/' + props.aboutArticle._id;
		navigator.clipboard.writeText(linkId)
	}


	return (
		<>
			<div className={s.about_event}>
				<div className="container">
					<div className={s.about_event__content}>
						<div className={s.about_event__about}>
							<div className={s.about_event__about_info}>

								<div className={s.about_event__about_info_date}>
									<p><span>Автор:</span> {props.aboutArticle.author}</p>
								</div>

								<div className={s.about_event__about_info_title}>
									<p>{props.aboutArticle.title}</p>
								</div>

								<div className={s.article__about_datelink}>

									<div className={s.article__about_date}>
										<p><span>Опубликовано:</span> {props.aboutArticle.dateOfPublication}</p>
									</div>
									<div onClick={copyLink} className={s.article__about_linkCopy}>
										<img src="/img/link.png" alt="" />
									</div>

								</div>
							</div>
							<div className={s.about_event__about_image}>
								<img src={props.aboutArticle.bigImage} alt="" />
							</div>
						</div>
						<div className={s.about_event__main_content}>
							<div className={s.about_event__main_content_text}>
								<p>
									{props.aboutArticle.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Article;