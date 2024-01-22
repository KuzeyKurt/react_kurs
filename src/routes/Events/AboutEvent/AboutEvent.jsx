import React from "react";
import s from "./AboutEvent.module.css"
import "../../../css/App.css"
import { Link } from "react-router-dom";
const AboutEvent = (props) => {
	return(
		<>
		<div className={s.about_event}>
			<div className="container">
				<div className={s.about_event__content}>
					<div className={s.about_event__about}>
						<div className={s.about_event__about_info}>
							<div className={s.about_event__about_info_date}>
								<p>{props.aboutEvent.organizer}</p>
							</div>
							<div className={s.about_event__about_info_title}>
								<p>событие</p>
								<p>{props.aboutEvent.title}</p>
							</div>
							<div className={s.about_event__about_info_button}>
							<Link to="/">
								<p>Посмотреть на карте</p>
								</Link>
							</div>
						</div>
						<div className={s.about_event__about_image}>
							<img src={props.aboutEvent.imageUrl} alt="" />
						</div>
					</div>
					<div className={s.about_event__main_content}>
						<div className={s.about_event__main_content_text}>
							<p>
							{props.aboutEvent.description}
							</p>
							
						</div>
						<div className={s.about_event__main_content_dtl}>
							<div className={s.about_event__main_content_date}>
								<p>
									<span>{props.aboutEvent.plannedEventDay}</span> {props.aboutEvent.month} {props.aboutEvent.plannedEventWday}
								</p>
							</div>
							<div className={s.about_event__main_content_time}>
								<p>
									Время: <span>{props.aboutEvent.plannedEventTime}</span>
								</p>
							</div>
							<div className={s.about_event__main_content_location}>
								<div className={s.about_event__main_content_location_title}>
									<p>
									Локация:
									</p>
								</div>
								<div className={s.about_event__main_content_location_adress}>
									<p>
									The Saints and Scholars of Ireland is located Dublin 2D02 FH48
									</p>
								</div>
							</div>
							<div className={s.about_event__main_content_button}>
								<Link to="/">
								<p>
								Посмотреть на карте
								</p>
								</Link>
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}
export default AboutEvent;