import React from "react";
import { connect } from "react-redux";
import Main from "./Main"
import { setDateValue } from "../../redux/reducers/tickets-reducer";
const mapStateToProps = (state) =>{
	return{
		dates: state.ticketsBlock.date,
		times: state.ticketsBlock.time,
		dateOfBooking: state.ticketsBlock.bookInfo.day,
		timeOfBooking: state.ticketsBlock.bookInfo.time,
		categories: state.ticketsBlock.categories,
		bookInfo: state.ticketsBlock.bookInfo,
		formError: state.ticketsBlock.formError,
		formSuccess: state.ticketsBlock.formSuccess,
	}
}

const MainContainer = connect(mapStateToProps, {setDateValue})(Main);

export default MainContainer;