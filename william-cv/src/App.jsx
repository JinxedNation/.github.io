import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import Project from './Project';
import Resume from './Resume';
import SelfLearning from './SelfLearning';

function App() 
{
    return(
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <AboutMe />
                    </Route>

                    <Route path="/education">
                        <Education />
                    </Route>

                    <Route path="/project">
                        <Project />
                    </Route>

                    <Route path="/resume">
                        <Resume />
                    </Route>

                    <Route path="/self-learning">
                        <SelfLearning />
                    </Route>
                    
                </Switch>
            </main>
        </Router>
    );
}

export default App;