import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Nav, Home, Order, About, FAQ, Footer} from './all'
import {stylishDesign} from './imgs'
  
class App extends React.Component{

    

    render(){


        return (
            <div className="all-mat">
                <Nav />
                <Router>


                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Order" component={Order}/>
                    <Route path="/About" component={About}/>
                    <Route path="/FAQ" component={FAQ}/>
                    <Route path="/" render={() => <h1 style={{fontSize:"500px", color:"red"}}>ERROR 404</h1>}/>
                </Switch>


                </Router>
                <Footer />
            </div>
        )
    }
}

export default App