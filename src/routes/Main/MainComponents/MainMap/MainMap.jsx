import React from "react";
import s from "./MainMap.module.css"
import "../../../../css/App.css"

const MainMap = (props) => {
	return (
		<>
			<div className={s.main_map}>
				<div className="container">
					<div className={s.main_nav__content}>
						<div id="map" className={s.main_nav__map_wrapper}>
							<iframe className={s.main_nav__map_styles} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90362.92815533865!2d34.02681325280569!3d44.94688987338695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eadddedf991cc5%3A0x9c29422fbc780b40!2z0KHQuNC80YTQtdGA0L7Qv9C-0LvRjA!5e0!3m2!1sru!2s!4v1698178435892!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainMap;