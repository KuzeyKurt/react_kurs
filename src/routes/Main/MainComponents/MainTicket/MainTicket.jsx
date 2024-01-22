import React from "react";
import s from "./MainTicket.module.css"
import "../../../../css/App.css"
import DateSelection from "./TicketDateSel";
import TimeSelection from "./TicketTimeSel";
import CategoryType from "./CategoryType";
import Form from "./TicketForm";

const MainTicket = (props) => {
	let dateSelection = props.dates.map(d => <DateSelection key={d.day} day={d.day} wday={d.wday} month={d.month} color={d.background}/>)
	let timeSelection = props.times.map(t => <TimeSelection key={t.t} time={t.t} color={t.background}/>)
	let categories = props.categories.map(c => <CategoryType key={c.title} title={c.title} cost={c.cost} quantity={c.quantity} sum={c.sum}/>)
	return (
		<>
			<div id="ticket" className={s.main_ticket}>
				<div className="container">
					<div className={s.main_ticket__content}>
						<div className={s.main_ticket__upper_text}>
							<div className={s.main_ticket__title_limit}>
								<div className={s.main_ticket__title}>
									<p>Входной билет в археологический музей Крыма</p>
								</div>
								<div className={s.main_ticket__age_limit}>
									<p>3+</p>
								</div>
							</div>
							<div className={s.main_ticket__subtitle}>
								<p>
									Приобретенный электронный билет необходимо обменять в кассе на музейный билет
								</p>
							</div>
						</div>
						<div className={s.main_ticket__dt_selection}>
							<div className={s.main_ticket__date_selection_wrapper}>
								{dateSelection}
							</div>
							<div className={s.main_ticket__time_selection_wrapper}>
								{timeSelection}
							</div>
						</div>
						<div className={s.main_ticket__categories}>
							<div className={s.main_ticket__categories_content}>
								<div className={s.main_ticket__categories_warning}>
									<p>Максимальное количество билетов в одном заказе на одного человека: 4</p>
								</div>
								<div className={s.main_ticket__categories_cat_selection}>
									<div className={s.main_ticket__categories_cat_titles}>
											<div className={s.main_ticket__categories_cat_category}>
											<p>
												Категория
											</p>
										</div>
										<div className={s.main_ticket__categories_cat_rests}>
											<p className={`${s.main_ticket__categories_cat_rest} ${s.price}`}>
												Цена, руб
											</p>
											<p className={`${s.main_ticket__categories_cat_rest} ${s.quant}`}>
												Количество
											</p>
											<p className={`${s.main_ticket__categories_cat_rest} ${s.sum}`}>
												Сумма, руб
											</p>
										</div>
									</div>
									{categories}
								</div>
								<div className={s.main_ticket__date_execution}>
									<div className={s.main_ticket__date_execution_date}>Дата: {props.dateOfBooking}</div>
									<div className={s.main_ticket__date_execution_time}>Время: {props.timeOfBooking}</div>
								</div>
								<div className={s.main_ticket__form}>
									<Form sum={props.bookInfo.sum} formError={props.formError} formSuccess={props.formSuccess}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainTicket;