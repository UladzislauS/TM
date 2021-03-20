import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Map from './features/Map';
import Header from './core/Header';
import LeftSidebar from './features/LeftSidebar';

import './App.css';

function App() {
    return (
        <>
            <CssBaseline />
            <div className="App">
                <Header />
                <Map />
                <LeftSidebar />
            </div>
        </>
    );
}

export default App;
