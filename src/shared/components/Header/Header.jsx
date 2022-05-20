import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import './Header.css';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={Home} />
                    <Route path="/shop" exact component={Home} />
                    <Route path="/contact" exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default Header;