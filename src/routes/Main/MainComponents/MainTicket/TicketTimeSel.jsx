import React from "react";
import s from "./MainTicket.module.css"
import "../../../../css/App.css"
import { useDispatch } from "react-redux";

const TimeSelection = (props) =>{
	const dispatch = useDispatch();
	let time = props.time;
	let getTime = () =>{
		dispatch({type: 'GetTimeInfo', action: {time}})
	}

	let changeBackground = () =>{
		dispatch({type: 'SetTimeColor', action: {time}})
	}

	let timeFuncs = () =>{
		getTime();
		changeBackground();
	}
	let color = props.color;
	return(
		<>
		<div  className={s.main_ticket__time_selection}>
			<div  className={s.main_ticket__time_selection_content}>
				<div style={{background: color}} onClick={timeFuncs} className={s.main_ticket__time_selection_time}>
					<p>{props.time}</p>	
				</div>
				<div className={s.main_ticket__time_selection_quantity}>
					<p>64 шт.</p>
				</div>
			</div>
		</div>
		</>
	)
}

export default TimeSelection;