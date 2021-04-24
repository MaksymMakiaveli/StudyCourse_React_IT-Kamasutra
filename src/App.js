import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='content-wrapper'>
				<div className='cont-nav'>
					<Navbar siteBar={props.state.siteBar} />
				</div>
				<div className='cont-content'>
					<Route
						path='/profile'
						render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
					/>
					<Route
						path='/dialogs'
						render={() => <Dialogs messagePage={props.state.messagePage} dispatch={props.dispatch} />}
					/>
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>{' '}
			</div>{' '}
		</div>
	);
};

export default App;
