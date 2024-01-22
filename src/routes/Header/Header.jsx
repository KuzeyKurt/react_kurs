import React from "react";
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";
const Header = (props) => {

	return (
		<div className={s.header__wrapper}>
			<header className={s.header}>
				<NavLink to="/" className={s.header__logo}>Археологический <span>музей</span></NavLink>
				<nav className={s.header__nav}>
					<NavLink to="/">Главная</NavLink>
					<NavLink to="/events">Мероприятия</NavLink>
					<NavLink to="/collections">Коллекции</NavLink>
					<NavLink to="/articles">Статьи</NavLink>
					<NavLink to="/about">О музее</NavLink>
				</nav>
			</header>
		</div>
	)
}

export default Header;