import React from "react";
import s from "./ChooseArticle.module.css"
import "../../../css/App.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const EachArticleCard = (props) => {
	const dispatch = useDispatch();
	let linkId = '';
	let copyLink = () =>{
		linkId = window.location.origin + '/article/' + props.id;
		navigator.clipboard.writeText(linkId)
	}
	let getArticleId = () =>{
		dispatch({type: 'GetArticleId', clickedArticleId: props.id})
	}
	return (
		<>
			<div className={s.articles__card}>
				<Link onClick={getArticleId} to={`/article/${props.id}`} className={s.articles__card_image}>
					<img src={props.image} alt="" />
				</Link>
				<div className={s.articles__card_text}>
					<div className={s.articles__card_text_title}>
						<Link onClick={getArticleId} to={`/article/${props.id}`}>
							{props.title}
						</Link>
					</div>
					<div className={s.articles__card_text_dscr}>
						<p>
							{props.description}
						</p>
					</div>
					<div className={s.articles__cart_link_wrapper}>
						<div onClick={copyLink} className={s.articles__card_link}>
							<img src="/img/link.png" alt="" />
						</div>
					</div>

				</div>

			</div>
		</>
	)
}
export default EachArticleCard;