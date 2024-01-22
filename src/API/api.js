import axios from "axios"
const instance = axios.create({
	withCredentials: true,
	baseURL: `http://localhost:4444/`
})
export const collectionsApi = {
	getCollections(){
		return instance.get(`collections`).then( response => response.data)
	}
}

export const eventsApi = {
	getEvents(){
		return instance.get(`events`).then(response => response.data)
	}
} 

export const articlesApi = {
	getArticles(){
		return instance.get(`articles`).then(responce => responce.data)
	}
}