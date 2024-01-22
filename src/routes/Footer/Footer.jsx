import React from "react";
import s from "./Footer.module.css"
import { NavLink } from "react-router-dom";
import "../../css/App.css"
const Footer = (props) => {
	return (
		<>
			<div className={s.footer}>
				<div className="container">
					<div className={s.footer__content}>
						<div className={s.footer__left}>
							<div className={s.footer__left_title}>
								<p>Археологический музей Крыма</p>
							</div>
							<div className={s.footer__left_adrcont}>
								<p className={s.footer__left_adrcont_adress}>
									Зубовский бульвар, 2
								</p>
								<p className={s.footer__left_adrcont_wtime}>
									Мы работаем со вторника по воскресенье с 11:00 до 21:00. Кассы работают до 20:00.
									<span>Понедельник — выходной.</span>
								</p>
								<p className={s.footer__left_adrcont_scheme}>
									Схема комплекса
								</p>
								<p className={s.footer__left_adrcont_contacts}>
									<span>Основной: +7 (495) 739-00-08</span>
									<br />
									<span>Экскурсии: +7 (495) 637-70-05</span>
									<br />
									<span>muzeimoskvi@culture.mos.ru</span>
								</p>
								<p className={s.footer__left_adrcont_additcontacts}>
									<span>Кинотеатр «Музейный» работает ежедневно с 10:00 до 22:00.</span>
									<span>Телефон: +7 (495) 687 76 17</span>
								</p>

							</div>
						</div>
						<div className={s.footer__right}>
							<div className={s.footer__rigth_nav}>
								<a href="#">Главная</a>
								<NavLink to="/events">Мероприятия</NavLink>
								<NavLink to="/collections">Коллекции</NavLink>
								<NavLink to="/articles">Статьи</NavLink>
								<NavLink to="/about">О музее</NavLink>
							</div>
							<div className={s.footer__right_logo}>
								<img src="/img/museum_logo_footer.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Footer;