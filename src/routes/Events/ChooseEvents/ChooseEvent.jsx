	import React, { useEffect } from "react";
	import s from "./ChooseEvent.module.css"
	import "../../../css/App.css"
	import EachEventCard from "./EachEventCard";
	import { useDispatch } from "react-redux";
	import { getEventsThunkCreator } from "../../../redux/reducers/eventInfo-reducer";
	const ChooseEvent = (props) => {
		const dispatch = useDispatch();

		useEffect(() => {
		dispatch(getEventsThunkCreator())
	  }, [dispatch])

		let eachEventCard = props.aboutEvent.map(e => <EachEventCard key={e.id} id={e.id} title={e.title} description={e.shortDescription} organizer={e.organizer} imageUrl={e.imageUrl} day={e.plannedEventDay} month={e.shortMonth} time={e.plannedEventTime} wday={e.plannedEventWday}/>)
		return (
			<>
				<div className={s.choose_event}>
					<div className="container">
						<div className={s.choose_event__content}>
							<div className={s.choose_event__title}>
								<p>Запланированные мероприятия</p>
							</div>
							<div className={s.choose_event__evcards}>
								{eachEventCard}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
	export default ChooseEvent;