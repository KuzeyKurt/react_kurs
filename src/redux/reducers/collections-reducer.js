import { collectionsApi } from "../../API/api";

let initialState = {
	collections: [],
}

const collectionsReducer = (state = initialState, action) => {

	switch (action.type) {
		case "SetCollectionsValue":
		let shortDescriptions = []
		let newCollection = {}
		let newCollections = []
		for(let i = 0; i < action.collections.length; i++){
			shortDescriptions.push(action.collections[i].description.substring(0, 120))
		}
			for(let i = 0; i < action.collections.length; i++){
				newCollection = {
					description: action.collections[i].description,
					shortDescription: shortDescriptions[i],
					id: i + 1,
					imageUrl: action.collections[i].imageUrl,
					name: action.collections[i].name,
					_id: action.collections[i]._id,
				}
				newCollections.push(newCollection)
			}

			return {
				...state, collections: newCollections
			}
		}

	return state;
}


export let setCollectionsValue = (collections) =>{
	return({
		type: "SetCollectionsValue",
		collections
	})
}

export let setTextSize = () =>{
	return({
		type: 'SetTextSize',
	})
}

export const getCollectionsThunkCreator = () => async (dispatch) => {
  try {
    const data = await collectionsApi.getCollections();
    dispatch(setCollectionsValue(data));
  } catch (error) {
    console.log(error);
  }
};

export default collectionsReducer;