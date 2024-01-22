import React from "react";
import s from "./About.module.css"
import "../../css/App.css"
const About = (props) => {
	return(
		<>
		<div className={s.about}>
			<div className="container">
				<div className={s.about__content}>
					<div className={s.about__title}>
						<p>
						Подробнее о музее археологии
						</p>
					</div>
					<div className={s.about__texts}>
						<div className={s.about__texts_about}>
								<p>
								About Us
								</p>
								<p>
								The National Archaeological Museum is the largest museum in Greece and one of the most important in the world. Originally destined to receive all the 19th century excavations, mainly from Attica and other parts of the country, it gradually took the form of a central National Archaeological Museum and was enriched with finds from all parts of the Greek world. His rich collections, enumerating more than 11,000 exhibits, offer the visitor a panorama of ancient Greek culture from the prehistory to the late antiquity. The National Archaeological Museum is the largest museum in Greece and one of the most important in the world. Originally destined to receive all the 19th century excavations, mainly from Attica and other parts of the country, it gradually took the form of a central National Archaeological Museum and was enriched with finds from all parts of the Greek world. His rich collections, enumerating more than 11,000 exhibits, offer the visitor a panorama of ancient Greek culture from the prehistory to the late antiquity.
								</p>
						</div>
						<div className={s.about__texts_discover}>
							<p>
							Discover the Past
							</p>
							<p>
							Step into our museum and embark on a captivating journey back in time. Our extensive collection includes artifacts, relics, and archaeological finds from various periods, spanning from prehistoric times to more recent civilizations. These artifacts tell the stories of the people who once thrived in our region, shedding light on their daily lives, beliefs, and achievements.
							</p>
						</div>
						<div className={s.about__texts_mission}>
								<p>
								Our Mission
								</p>
								<p>
								At [Name of Museum], we are dedicated to preserving, studying, and showcasing the remarkable archaeological heritage of our region. Our mission is to provide a captivating and educational experience that brings the past to life, allowing visitors to connect with the diverse cultures that have shaped our world.
								</p>
						</div>
					</div>
					<div className={s.about__quote}>
						 <div className={s.about__quote_text}>
							<p>
							"Every artifact unearthed is a silent witness to the tapestry of human history, and through them, we connect the threads of the past to the present."
							</p>
						 </div>
						 <div className={s.about__quote_authorDate}>
								<p>
								ChatGPT
								</p>
								<p>
								22.10.2023
								</p>
						 </div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}
export default About;