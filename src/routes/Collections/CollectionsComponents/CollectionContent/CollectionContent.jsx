import React, { useState } from "react";
import s from "./CollectionContent.module.css"
import { useDispatch } from "react-redux";

const CollectionContent = (props) =>{
	const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


	return(
		<>
		<div id={props.id} className={s.collections__each_content}>
		
			<div className={s.collections__each_text}>
				<div className={s.collections__each_text_title}>
					<p><span>{props.id}.</span>{props.title}</p>
				</div>
				
				<div className={s.collections__each_text_text}>
					<p>
					{isCollapsed ? props.shortDescription: props.description}<span onClick={toggleCollapse}>{isCollapsed ? 'Развернуть' : 'Свернуть'}</span> {/*Здесь можно будет добавить возможность свернуть и развернуть текст*/}
					</p>
				</div>
			</div>
			<div className={s.collections__each_image}>
				<img src="/img/collect.jpg" alt="" />
			</div>
		</div>
		</>
	)
}
export default CollectionContent;