import React from "react";
import s from "./MainNavigation.module.css"
import "../../../../css/App.css"
import { NavLink } from "react-router-dom";
const MainNavigation = (props) => {
	return (
		<>
			<div className={s.main_nav}>
				<div className="container">
				<div className={s.main_nav__content}>
					<div className={s.main_nav__title}>
						<p>
							Here you can learn more about our museum!
						</p>
					</div>
					<div className={s.main_nav__cards}>

						<NavLink to="/events" className={s.main_nav__events} >
							<div className={`${s.main_nav__events_wrapper} ${s.styleForCards}`}>
								<div className={`${s.main_nav__events_title_container} ${s.styleForTitleContainer}`}>
									<p className={`${s.main_nav__events_title_text} ${s.styleForTitleText}`}>
										Мероприятия
									</p>
								</div>
							</div>
						</NavLink>

							<NavLink to="/collections" className={`${s.main_nav__collections} ${s.styleForCards}`}>
								<div className={`${s.main_nav__collections_title_container} ${s.styleForTitleContainer}`}>
									<p className={`${s.main_nav__collections_title_text} ${s.styleForTitleText}`}>
										Коллекции
									</p>
								</div>
							</NavLink>

							<NavLink to="/about" className={`${s.main_nav__about} ${s.styleForCards}`}>
								<div className={`${s.main_nav__about_title_container} ${s.styleForTitleContainer}`}>
									<p className={`${s.main_nav__about_title_text} ${s.styleForTitleText}`}>
										О музее
									</p>
								</div>
							</NavLink>

							<NavLink to="/articles" className={`${s.main_nav__articles} ${s.styleForCards}`}>
								<div className={`${s.main_nav__articles_title_container} ${s.styleForTitleContainer}`}>
									<p className={`${s.main_nav__articles_title_text} ${s.styleForTitleText}`}>
										Статьи
									</p>
								</div>
							</NavLink>

							<a href="#map" className={`${s.main_nav__map} ${s.styleForCards}`}>
								<div className={`${s.main_nav__map_title_container} ${s.styleForTitleContainer}`}>
									<p className={`${s.main_nav__map_title_text} ${s.styleForTitleText}`}>
										Как нас найти?
									</p>
								</div>
							</a>

					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default MainNavigation;