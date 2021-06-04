<<<<<<< HEAD
import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          <div className="cont-nav">
            <Navbar />
          </div>
          <div className="cont-content">
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
=======
import React, { Component } from 'react';

import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { LoginContainer } from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';

import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Preloader from './components/common/Preloader/Preloader';
import { initialize } from './Redux/app-reducer';
import { compose } from 'redux';

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    let { initialized } = this.props;
    if (!initialized) return <Preloader />;
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
            <Route path='/login' render={() => <LoginContainer />} />
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (state) => {
  let { initialized } = state.app;
  return { initialized };
};
export default compose(withRouter, connect(mapDispatchToProps, { initialize }))(App);
>>>>>>> lesson93Pagination
