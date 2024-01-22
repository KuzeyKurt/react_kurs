import React from "react";
import s from "./MainWelcome.module.css"

const MainWelcome = (props) => {
	return (
		<>
			<div className={s.main_welcome}>

				<div className={s.main_welcome__content}>
					<div className={s.main_welcome__title_wrapper}>
						<div className={s.main_welcome__title}>
							<p>Welcome</p>
						</div>
					</div>

					<div className={s.main_welcome__ticket}>
						<a href="#ticket"  className={s.main_welcome__button_wrapper}>
							<div className={s.main_welcome__button_text}>
								<p>Купить билет</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	)

}

export default MainWelcome;