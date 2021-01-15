import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Nav, Home, Order, About, FAQ, Footer} from './all'
// import {stylishDesign} from './imgs'
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import './App.scss'
  
library.add(fab)

class App extends React.Component{

    

    render(){


        return (
            <div className="all-mat">
                <Router>
                <Nav />


                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Order" component={Order}/>
                    <Route path="/About" component={About}/>
                    <Route path="/FAQ" component={FAQ}/>
                    <Route path="/" render={() => <h1 style={{fontSize:"500px", color:"red"}}>ERROR 404</h1>}/>
                </Switch>


                <Footer />
                </Router>
            </div>
        )
    }
}

export default App