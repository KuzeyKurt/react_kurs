import React, { useEffect } from "react";
import s from "./ChooseArticle.module.css"
import "../../../css/App.css"
import EachArticleCard from "./EachArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesThunkCreator } from "../../../redux/reducers/articles-reducer";

const ChooseArticle = (props) =>{
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(getArticlesThunkCreator());
		console.log(3)
	}, [dispatch])
	console.log(props)
	let eachEventCard = props.aboutArticle.map( a => <EachArticleCard key={a._id} id={a._id} title={a.title} image={a.smallImage} description={a.shortDescription}/>)
	return(
		<>
		<div className={s.articles}>
			<div className="container">
				<div className={s.articles__content}>
					<div className={s.articles__title}>
						<p>
						Статьи об археологии
						</p>
					</div>
					<div className={s.articles__cards}>
						{eachEventCard}
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default ChooseArticle;