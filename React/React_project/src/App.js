import React, { Component, Suspense, lazy } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './helpers/history';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const CoursesPage = lazy(() => import('./pages/CoursesPage/CoursesPage'));

class App extends Component {
    render () {
        return (
            <div>
                <Router history={ history }>
                    <Header />
                    <Suspense fallback={ <div>Loading...</div> }>
                        <Switch>          
                            <Route exact path="/" component={ HomePage } /> 
                            <Route path="/courses" component={ CoursesPage } />
                        </Switch>
                    </Suspense>
                    <Footer />
                </Router>
            </div>
        );
    };
}

export default App;
