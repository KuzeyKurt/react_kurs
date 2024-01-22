import { eventsApi } from "../../API/api";
let initialState = {
	eventInfoData: [],
	choosedEventId: '',
	choosedEventData: {},
}


const eventInfoReducer = (state = initialState, action) => {

	let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
	let shortMonths = ["янв.", "февр.", "марта", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек."]
	let wdays = ['пн.', 'вт.', 'ср.', 'чт.', 'пт.', 'сб.', 'вс.'];
	switch (action.type) {
		case 'SetEventsValue':
		let month = [];
		let shortMonth = [];
		let wday = [];

		let events = [];
		for(let i = 0; i < action.events.length; i++){
			month.push(months[action.events[i].plannedEventMonth]) 
			shortMonth.push(shortMonths[action.events[i].plannedEventMonth])
			wday.push(wdays[action.events[i].plannedEventWday])
		}

		for(let i = 0; i < action.events.length; i++){
			let newEvent = {
				description: action.events[i].description,
				imageUrl: action.events[i].imageUrl,
				organizer: action.events[i].organizer,
				plannedEventDay: action.events[i].plannedEventDay,
				month: month[i],
				shortMonth: shortMonth[i],
				plannedEventTime: action.events[i].plannedEventTime,
				plannedEventWday: wday[i],
				shortDescription: action.events[i].shortDescription,
				title: action.events[i].title,
				id: action.events[i]._id
			}		
			events.push(newEvent)
		}
		
			return {
				...state,
				eventInfoData: events,
			}
		case 'GetEventId':
			let eventId;
			let eventData = {};
		
			for(let i = 0; i < state.eventInfoData.length; i++){
				if(state.eventInfoData[i].id === action.clickedEventId){
					eventData = state.eventInfoData[i];
				}
			}
			
			return {
				...state,
				choosedEventId: eventId,
				choosedEventData: eventData,
			}


			case 'SetOpenedEventData':
			const pathArray = action.newEventId.split("/");
			const lastElement = pathArray[pathArray.length - 1];
			let choosedEventData = {}
			if(pathArray[1] === 'event'){
			for (let i = 0; i < state.eventInfoData.length; i++) {
				if (state.eventInfoData[i].id === lastElement) {
					choosedEventData = state.eventInfoData[i]
				}
			}
		}
		return {
			...state,
			choosedEventData: choosedEventData
		}
	}
	
	return state;
}

export let setEventsValue = (events, eventId) => {
	return ({
		type: "SetEventsValue",
		events,
		eventId
	})
}

export const getEventsThunkCreator = (eventId) => async (dispatch) => {
	try {
		const data = await eventsApi.getEvents();
		dispatch(setEventsValue(data, eventId));
	} catch (error) {
		console.log(error);
	}
};

export const getEventId = (clickedEventId) =>{
	return({
		type: 'GetEventId',
		clickedEventId
	})
}


export const setOpenedEventData = (newEventId) =>{
	return({
		type: 'SetOpenedEventData',
		newEventId
	})
}

export default eventInfoReducer;