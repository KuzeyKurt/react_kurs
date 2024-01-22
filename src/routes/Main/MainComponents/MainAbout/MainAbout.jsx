import React from "react";
import s from "./MainAbout.module.css"
import "../../../../css/App.css"
const MainAbout = (props) => {
	return (
		<>
			<div className={s.main_about}>
				<div className="container">
					<div className={s.main_about__content}>

						<div className={s.main_about__text}>
							<div className={s.main_about__text_title}>
								<p>Welcome to the website of the National Archaeological Museum</p>
							</div>
							<div className={s.main_about__text_descr}>
								<p>
									The National Archaeological Museum of Athens is the largest archaeological museum in Greece and one of the most important museums in the world devoted to ancient Greek art. It was founded at the end of the 19th century to house and protect antiquities from all over Greece, thus displaying their historical, cultural and artistic value.
								</p>
							</div>
						</div>
						<div className={s.main_about__image}>
							<img src="/img/about.jpg" alt="image" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainAbout;