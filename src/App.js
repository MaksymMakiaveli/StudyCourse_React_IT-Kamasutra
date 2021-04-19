import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { logDOM } from '@testing-library/dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<div className='content-wrapper'>
					<div className='cont-nav'>
						<Navbar state={props.state.siteBar} />
					</div>
					<div className='cont-content'>
						<Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
						<Route path='/dialogs' render={() => <Dialogs state={props.state.messagePage} />} />
						<Route path='/news' render={() => <News />} />
						<Route path='/music' render={() => <Music />} />
						<Route path='/settings' render={() => <Settings />} />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
