import React from "react";
import s from "./CollectionFirstBlock.module.css"
const CollectionsNav = (props) =>{
	// console.log(props.collElements[0])
	return(
		<>
			<div className={s.collections__first_nav}>
				<div className={s.collections__first_nav_title}>
					<p>Museum collections</p>
				</div>
				<div className={s.collections__first_nav_list}>
						{props.collElements.map(t => <a key={t._id} href={`#${t.id}`}><span>{t.id}.</span>{t.name}</a>)}
				</div>
			</div>
		</>
	)
}
export default CollectionsNav;