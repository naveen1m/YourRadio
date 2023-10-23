import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, SearchPage, Podcast, Notification, Profile } from './screens'
import Horzontalnavbar from './Horzontalnavbar';

function WebNavigation() {
    return (
        <Router>
            <Horzontalnavbar />

            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/search' Component={SearchPage} />
                <Route path='/podcast' Component={Podcast} />
                <Route path='/notification' Component={Notification} />

            </Routes>
        </Router>
    )
}

export default WebNavigation
