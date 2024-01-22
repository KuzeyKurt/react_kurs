import React from "react";
import { connect } from "react-redux";
import { getEventsThunkCreator } from "../../../redux/reducers/eventInfo-reducer";
import ChooseEvent from "./ChooseEvent";
const mapStateToProps = (state) =>{
	return{
		aboutEvent: state.eventPage.eventInfoData
	}
}

const ChooseEventContainer = connect(mapStateToProps, {getEventsThunkCreator})(ChooseEvent);

export default ChooseEventContainer;