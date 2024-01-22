import React, { useEffect } from "react";
import s from "./ChooseEvent.module.css"
import "../../../css/App.css"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const EachEventCard = (props) => {
	const dispatch = useDispatch();
	let clickedEventId = props.id;
	let getEventId = () =>{
		dispatch({type: 'GetEventId', clickedEventId})
	}
	
	return (
		<>
			<div className={s.choose_event__evcard}>
				<div className={s.choose_event__evcard_dateinfo}>
					<div className={s.choose_event__evcard_datetime}>
						<div className={s.choose_event__evcard_date}>
							<div className={s.choose_event__evcard_date_num}>
								<p>{props.day}</p>
							</div>
							<div className={s.choose_event__evcard_date_md}>
								<p>{props.month}</p>
								<p>{props.wday}</p>
							</div>
						</div>
						<div className={s.choose_event__evcard_time}>
							<p>{props.time}</p>
						</div>
					</div>
					<div className={s.choose_event__evcard_location}>
						<div className={s.choose_event__evcard_location_title}>
							<p>
								Локация:
							</p>
						</div>
						<div className={s.choose_event__evcard_location_adress}>
							<p>
								The Saints and Scholars of Ireland is located Dublin 2D02 FH48
							</p>
						</div>
					</div>
					<NavLink onClick={getEventId} to={`/event/${props.id}`} className={s.choose_event__evcard_button}>
						<p>
							Подробнее
						</p>
					</NavLink>
				</div>
				<div className={s.choose_event__evcard_text}>
					<div className={s.choose_event__evcard_text_title}>
						<p>{props.title}</p>
					</div>
					<div className={s.choose_event__evcard_text_text}>
						<p>
							{props.description}
						</p>
					</div>
					<div className={s.choose_event__evcard_text_author}>
						<p>
							Представляет: {props.organizer}
						</p>
					</div>
				</div>
				<NavLink onClick={getEventId} to={`/event/${props.id}`} className={s.choose_event__evcard_image}>
					<img src={props.imageUrl} alt="" />
				</NavLink>
			</div>
		</>
	)
}
export default EachEventCard;