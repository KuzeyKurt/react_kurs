import './css/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './css/nullstyle.css';
import About from './routes/About/About';
import Header from './routes/Header/Header';
import Footer from './routes/Footer/Footer';
import AboutEvent from './routes/Events/AboutEvent/AboutEvent';
import Article from './routes/Articles/Article/Article';
import ChooseArticle from './routes/Articles/ChooseArticles/ChooseArticle';
import CollectionsContainer from './routes/Collections/CollectionsContainer';
import MainContainer from './routes/Main/MainContainer';
import ChooseEventContainer from './routes/Events/ChooseEvents/ChooseEventContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getEventsThunkCreator } from './redux/reducers/eventInfo-reducer';


function App(props) {
	const dispatch = useDispatch();
	let eventId = '';
	let clickedEventId = '';
	const state = useSelector(state => state)

	if (state.eventPage.choosedEventId) {
		eventId = `/event/${state.eventPage.choosedEventId}`
	} else if (!state.eventPage.choosedEventId) {
		if(window.location.pathname.split("/")[1] === 'event'){
			clickedEventId = window.location.pathname
		}
	}

	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(()=>{
		dispatch(getEventsThunkCreator(clickedEventId))
	}, [clickedEventId])


	useEffect(() => {
		if (Object.keys(state.eventPage.eventInfoData).length !== 0) {
			setDataLoaded(true);
		}
	}, [state.eventPage.eventInfoData]);

	useEffect(()=>{
		if (dataLoaded) {
		dispatch({type: 'SetOpenedEventData', newEventId: clickedEventId})
		}
	}, [dataLoaded])

	return (
		<>
			<BrowserRouter>
				<div className='wrapper'>
					<div className='content'>
						<Header />
						<Routes>
							<Route path='/' element={<MainContainer />} />
							<Route path='/events' element={<ChooseEventContainer />} />
							<Route path={eventId ? eventId : clickedEventId} element={<AboutEvent aboutEvent={state.eventPage.choosedEventData}/>} />
							<Route path='/collections' element={<CollectionsContainer />} />
							<Route path='/articles' element={<ChooseArticle aboutArticle={state.articlesPage.articles}/>} /> 
							<Route path={`/article/*`} element={<Article aboutArticle={state.articlesPage.choosedArticleData} />} />  {/* ${ state.articlesPage.clickedArticleId ?? ''}*/}
							<Route path='/about' element={<About />} />
						</Routes>
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
