import { articlesApi } from "../../API/api";

let initialState = {
	articles: [],
	clickedArticleId: '',
	choosedArticleData: {},
}

const articlesReducer = (state = initialState, action) => {
	let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

	switch (action.type) {

		case "SetArticlesValue":
			// let pathArray = [];
			// let lastElement = '';

			// if (action.spareLink) {
			// 	pathArray = action.spareLink.split('/')
			// 	lastElement = pathArray[pathArray.length - 1]
			// }

			let newArticle = {}
			let articles = []

			let dateOfPublication = '';
			let datesOfPubl = []
			let monthOfPubl = []

			for (let i = 0; i < action.articles.length; i++) {
				monthOfPubl.push(months[action.articles[i].monthOfPublication])
			}


			for (let i = 0; i < action.articles.length; i++) {
				dateOfPublication = action.articles[i].dayOfPublication + ' ' + monthOfPubl[i] + ' ' + action.articles[i].yearOfPublication;
				datesOfPubl.push(dateOfPublication)
			}


			for (let i = 0; i < action.articles.length; i++) {
				newArticle = {
					author: action.articles[i].author,
					bigImage: action.articles[i].bigImage,
					description: action.articles[i].description,

					dateOfPublication: datesOfPubl[i],

					shortDescription: action.articles[i].shortDescription,
					smallImage: action.articles[i].smallImage,
					title: action.articles[i].title,
					_id: action.articles[i]._id,
				}
				articles.push(newArticle)
			}

			return {
				...state,
				articles: articles
			}
		case 'GetArticleId':
			let choosedArticleData = {}
			for (let i = 0; i < state.articles.length; i++) {
				if (action.clickedArticleId === state.articles[i]._id) {
					choosedArticleData = state.articles[i]
				}
			}

			return {
				...state,
				clickedArticleId: action.clickedArticleId,
				choosedArticleData: choosedArticleData
			}
		case "SetOpenedArticle":
			let pathArray = [];
			let lastElement = '';
			let openedArticleData = {}
			if (action.openedArticleId) {
				pathArray = action.openedArticleId.split('/')
				lastElement = pathArray[pathArray.length - 1]
			}
			console.log(lastElement)
			for(let i = 0; i < state.articles.length; i++){
				if(state.articles[i]._id === lastElement){
					openedArticleData = state.articles[i]
				}
			}
			console.log(openedArticleData)
			return{
				...state,
				choosedArticleData: openedArticleData
			}
	}

	return state;
}
export let setArticlesValue = (articles, spareLink) => {
	return ({
		type: "SetArticlesValue",
		articles,
		spareLink
	})
}

export let getArticleId = (clickedArticleId) => {
	return ({
		type: 'GetArticleId',
		clickedArticleId
	})
}

export let setOpenedArticle = (openedArticleId) =>{
	return({
		type: 'SetOpenedArticle',
		openedArticleId
	})
}


export let getArticlesThunkCreator = (spareLink) => async (dispatch) => {
	try {
		const data = await articlesApi.getArticles();
		dispatch(setArticlesValue(data, spareLink));
	} catch (error) {
		console.log(error);
	}
}



export default articlesReducer;