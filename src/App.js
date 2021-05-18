import React from 'react';
import { Route } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='content-wrapper'>
        <div className='cont-nav'>
          <NavbarContainer />
        </div>
        <div className='cont-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
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
