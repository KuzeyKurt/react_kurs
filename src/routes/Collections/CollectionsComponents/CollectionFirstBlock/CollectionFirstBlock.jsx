import React from "react";
import s from "./CollectionFirstBlock.module.css"
import CollectionsNav from "./CollectionsNav";
const CollectionFirstBlock = (props) =>{
	return(
		<>
		<div className={s.collections__first_content}>
			<div className={s.collections__first_text}>
				<div className={s.collections__first_text_title}>
					<p>Collections</p>
				</div>
				<div className={s.collections__first_text_text}>
					<p>
					The National Archaeological Museum is the largest museum in Greece and one of the most important in the world. Originally destined to receive all the 19th century excavations, mainly from Attica and other parts of the country, it gradually took the form of a central National Archaeological Museum and was enriched with finds from all parts of the Greek world. His rich collections, enumerating more than 11,000 exhibits, offer the visitor a panorama of ancient Greek culture from the prehistory to the late antiquity.
					</p>
				
				</div>
			</div>
		<CollectionsNav collElements={props.collElements}/>
		</div>
		</>
	)
}
export default CollectionFirstBlock;