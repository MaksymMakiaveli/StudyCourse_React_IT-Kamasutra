import React from 'react';
import { Route } from 'react-router';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='content-wrapper'>
				<div className='cont-nav'>
					<NavbarContainer store={props.store} />
				</div>
				<div className='cont-content'>
					<Route path='/profile' render={() => <Profile store={props.store} />} />
					<Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>{' '}
			</div>{' '}
		</div>
	);
};

export default App;
