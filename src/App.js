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
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='content-wrapper'>
				<div className='cont-nav'>
					<NavbarContainer />
				</div>
				<div className='cont-content'>
					<Route path='/profile' render={() => <Profile />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
			</div>
		</div>
	);
};

export default App;
