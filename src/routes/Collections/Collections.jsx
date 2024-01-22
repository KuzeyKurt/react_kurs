import React, {useEffect} from "react";
import s from "./Collections.module.css"
import "../../css/App.css"
import CollectionFirstBlock from "./CollectionsComponents/CollectionFirstBlock/CollectionFirstBlock";
import CollectionContent from "./CollectionsComponents/CollectionContent/CollectionContent";
const Collections = (props) => {
	useEffect(()=>{
		props.getCollectionsThunkCreator()
	},[])
	let postElements = props.collElements.map(p => <CollectionContent key={p._id} id={p.id} _id={p._id} shortDescription={p.shortDescription} title={p.name} description={p.description} image={p.imageUrl}/>)

	return(
		<>
		<div className={s.collections}>
			<div className="container">
			<CollectionFirstBlock collElements={props.collElements}/>
			{ postElements }
			</div>
		</div>
		</>
	)
}

export default Collections;