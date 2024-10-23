import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Applications from './pages/Applications';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/applications" component={Applications} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;