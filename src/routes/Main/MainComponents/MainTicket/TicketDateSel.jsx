import React, { useEffect } from "react";
import s from "./MainTicket.module.css"
import "../../../../css/App.css"
import { useDispatch } from "react-redux";

const DateSelection = (props) => {
	const dispatch = useDispatch();
		let wday = props.wday;
		let day = props.day;
		let month = props.month;
	let getDate = () =>{
		dispatch({type: 'GetDateInfo', action: {wday, day, month}})
	}

	let changeBackground = () =>{
		dispatch({type: 'SetDateColor', action: {day}})
	}
	let color = props.color;
	
	if (props.day) {
		return (
			<>
				<div onClick={changeBackground} style={{background: color}}  className={s.main_ticket__date_selection}>
					<div onClick={getDate} className={s.main_ticket__date_selection_content}>
						<div className={s.main_ticket__date_selection_dw}>
							<p>{props.wday}</p>
						</div>
						<div className={s.main_ticket__date_selection_nd}>
							<p>{props.day}</p>
						</div>
						<div className={s.main_ticket__date_selection_month}>
							<p>{props.month}</p>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default DateSelection;