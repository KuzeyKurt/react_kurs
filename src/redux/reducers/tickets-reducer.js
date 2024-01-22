let initialState = {
	date: [],
	time: [
		{ t: '8:00', background: '#F8F8F8' },
		{ t: '10:00', background: '#F8F8F8' },
		{ t: '12:00', background: '#F8F8F8' },
		{ t: '15:00', background: '#F8F8F8' },
		{ t: '17:00', background: '#F8F8F8' },
	],
	bookInfo: {
		// id присваивается автоматически в монго
		day: '', // заполняется
		time: '', // заполняется
		email: '',
		phone: '',
		fullName: '',
		totalQuantity: 0, // заполняется
		dayOfBooking: '', // после того как закончу форму (дата и время когда клиент забронировал билеты)
		timeOfBooking: '', // после того как закончу форму
		sum: 0,

		adultsQuantity: 0, // кол-во билетов на категорию заполняется
		studentsQuantity: 0,
		childs7To17Quantity: 0,
		childsTo6Quantity: 0,
		pensionersQuantity: 0,

		agreementToRecNews: false,
		termsAgreement: false,
	},
	categories: [
		{ title: 'Взрослые', cost: 500, quantity: 0, rest: 4, sum: 0 },
		{ title: 'Студенты', cost: 300, quantity: 0, rest: 4, sum: 0 },
		{ title: 'Дети от 7 до 17 лет включительно', cost: 300, quantity: 0, rest: 4, sum: 0 },
		{ title: 'Дети до 6 лет включительно', cost: 0, quantity: 0, rest: 4, sum: 0 },
		{ title: 'Пенсионеры', cost: 300, quantity: 0, rest: 4, sum: 0 },
	],
	formError: '',
	formSuccess: '',
}
const ticketsReducer = (state = initialState, action) => {
	let stateCopy = { ...state }
	let sum = 0;
	let wdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

	let date = new Date();
	// let year = 2024;
	// let day = 26;
	// let currentMonth = 1;

	// let time = date.getTime();


	switch (action.type) {
		case "SetDateValue":
			stateCopy.date = [...state.date]
			stateCopy.date = [];

			let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

			
			let year = date.getFullYear();
			let day = date.getDate();
			let currentMonth = date.getMonth();
			let wday = date.getDay();

			let currentDate = '';

			let nextMonth = '';
			let monthIndex = 0;
			let wdayIndex;
			if (wday === 0) {
				wdayIndex = 6
			} else {
				wdayIndex = wday - 1;
			}

			for (let i = 0; i <= currentMonth; i++) {
				if (i === currentMonth) {
					currentMonth = months[i]
					nextMonth = months[i + 1]
					monthIndex = i;
				}
			}

		
			for (let i = 0; i < 6; i++) {
				wday = wdays[wdayIndex]
				let newDate = {
					day: day,
					month: currentMonth,
					wday: wday,
				}
				if (i === 0) {
					currentDate = newDate.day + ' ' + newDate.month + ', ' + newDate.wday;
					stateCopy.bookInfo.dayOfBooking = currentDate;
				}

				stateCopy.date.push(newDate);
				day += 1;
				if (wdayIndex === 6) {
					wdayIndex = 0;
				} else {
					wdayIndex += 1;
				}

				if ((monthIndex === 3 || 5 || 8 || 10) && (day > 30)) {
					currentMonth = nextMonth;
					day = 1;
				}
				if ((monthIndex === 0 || 2 || 4 || 6 || 7 || 9 || 11) && (day > 31)) {
					currentMonth = nextMonth;
					day = 1;
				}
				if ((year === (2024 || 2028)) && (monthIndex === 1) && (day > 29)) {
					currentMonth = nextMonth
					day = 1;
				}
				if ((year !== (2024 || 2028)) && (monthIndex === 1) && (day > 28)) {
					currentMonth = nextMonth
					day = 1;
				}
			}
			return stateCopy

		case "GetDateInfo":
			
			let fullWdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
			let currentWday = action.action.wday;
			for (let i = 0; i <= wdays.length; i++) {
				if (currentWday === wdays[i]) {
					currentWday = fullWdays[i];
				}
			}
			let dayOfBooking = action.action.day + ' ' + action.action.month + ', ' + currentWday;
			stateCopy.bookInfo.day = dayOfBooking;
			return stateCopy

		case "GetTimeInfo":
			stateCopy.bookInfo.time = action.action.time;
			return stateCopy

		case "SetDateColor":
			for (let i = 0; i < 6; i++) {
				if (stateCopy.date[i].day !== action.action.day) {
					stateCopy.date[i].background = '#F8F8F8';
				} else {
					stateCopy.date[i].background = "#E8E1C1";
				}
			}
			return stateCopy

		case "SetTimeColor":
			for (let i = 0; i < 5; i++) {
				if (stateCopy.time[i].t !== action.action.time) {
					stateCopy.time[i].background = '#F8F8F8';
				} else {
					stateCopy.time[i].background = "#E8E1C1";
				}
			}
			return stateCopy

		case "SetCategQuantity":
		return {
			...state,
			categories: state.categories.map(category => {
				let categs = {
					'Взрослые': 'adultsQuantity',
					'Студенты': 'studentsQuantity',
					'Дети от 7 до 17 лет включительно': 'childs7To17Quantity',
					'Дети до 6 лет включительно': 'childsTo6Quantity',
					'Пенсионеры': 'pensionersQuantity',
				}
				let property = categs[action.categTitle];

				if ((category.title === action.categTitle && action.changeQuantity) && (state.bookInfo.totalQuantity < 4)) {
					state.bookInfo[property] += 1;
					state.bookInfo.totalQuantity += 1;
					
					for(let i = 0; i < 5; i++){
						sum += state.categories[i].sum ;
					}
					sum += category.cost;
					state.bookInfo.sum = sum;
					// state.bookInfo.sum = sum;
					return {
						...category,
						quantity: category.quantity + 1,
						rest: category.rest - 1, 
						sum: category.cost * (category.quantity + 1) ,
					};
				}
				if (category.title === action.categTitle && !action.changeQuantity && category.quantity > 0) {
					state.bookInfo[property] -= 1;
					state.bookInfo.totalQuantity -= 1;
					for(let i = 0; i < 5; i++){
						sum += state.categories[i].sum ;
					}
					sum -= category.cost;
					state.bookInfo.sum = sum;
					return {
						...category,
						quantity: category.quantity - 1,
						rest: category.rest + 1, 
						sum: category.cost * (category.quantity - 1) ,
					};
				}
				return { ...category };
			}),

		};

		case "GetFormData":
			stateCopy.bookInfo.email = action.formData.email;
			stateCopy.bookInfo.phone = action.formData.phone;
			stateCopy.bookInfo.agreementToRecNews = action.formData.recieveAgreement;
			stateCopy.bookInfo.termsAgreement = action.formData.usersAgreement;
			stateCopy.bookInfo.fullName = action.formData.fullName;

			
			stateCopy.bookInfo.timeOfBooking = date.getHours() + ":" + date.getMinutes();

			let error = '';
			let success = ''

			if((stateCopy.bookInfo.day === '') || (stateCopy.bookInfo.time === '')){
				error = 'Вы не выбрали дату и/или время'
				
			} 

			if(stateCopy.bookInfo.totalQuantity === 0){
				if(error.length !== 0){
					error += ', а также категорию билета'
				}else{
					error += 'Выберите как минимум 1 категорию билета'
				}
			}
			
			if(error === ''){
				success = 'Бронирование билета прошло успешно'
				stateCopy.formSuccess = success
				console.log(stateCopy.bookInfo)
			}
			stateCopy.formError = error;
		
			return stateCopy
	}

	return state;
}

export let setDateValue = () => {
	return ({
		type: "SetDateValue",
	})
}
export let getDateInfo = (wday, day, month) => {
	return ({
		type: "GetDateInfo",
		day,
		month,
		wday,
	})
}

export let getTimeInfo = (time) => {
	return ({
		type: "GetTimeInfo",
		time
	})
}

export let setDateColor = (day) => {
	return ({
		type: 'SetDateColor',
		day
	})
}

export let setTimeColor = (time) => {
	return ({
		type: 'SetTimeColor',
		time,
	})
}

export let setCategQuantity = (changeQuantity, categTitle) => {
	return ({
		type: 'SetCategQuantity',
		changeQuantity,
		categTitle
	})
}


export let getFormData = (formData) =>{
 return({
	type: 'GetFormData',
	formData,
 })
}


export default ticketsReducer;