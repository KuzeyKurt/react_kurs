import React, { useEffect } from "react";
import { setDateValue } from "../../redux/reducers/tickets-reducer";
import MainWelcome from "./MainComponents/MainWeclome/MainWelcome";
import MainAbout from "./MainComponents/MainAbout/MainAbout";
import MainNavigation from "./MainComponents/MainNavigation/MainNavigation";
import MainTicket from "./MainComponents/MainTicket/MainTicket";
import MainMap from "./MainComponents/MainMap/MainMap";
const Main = (props) => {
		useEffect(()=>{
			props.setDateValue();
		},[])
	return (
		<>
		<div className="main_page_wrapper">
			<MainWelcome/>
			<MainAbout/>
			<MainNavigation/>
			<MainTicket formSuccess={props.formSuccess} formError={props.formError} bookInfo={props.bookInfo} categories={props.categories} dates={props.dates} times={props.times} dateOfBooking={props.dateOfBooking} timeOfBooking={props.timeOfBooking}/>
			<MainMap/>
		</div>
		</>
	)
}

export default Main;