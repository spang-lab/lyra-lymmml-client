import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { GlobalState, Modal } from 'lyra-library';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';


const App = () => (
    <BrowserRouter>
        <GlobalState>
            <Header />
            <Navigation />
            <Footer />
            <Modal />
        </GlobalState>
    </BrowserRouter>
);


export default hot(App);
