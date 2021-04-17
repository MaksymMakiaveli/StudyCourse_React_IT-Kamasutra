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

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<div className='content-wrapper'>
					<div className='cont-nav'>
						<Navbar />
					</div>
					<div className='cont-content'>
						<Route path='/profile' component={Profile} />
						<Route path='/dialogs' component={Dialogs} />
						<Route path='/news' component={News} />
						<Route path='/music' component={Music} />
						<Route path='/settings' component={Settings} />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
