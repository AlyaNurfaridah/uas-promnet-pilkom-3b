import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListInventory from './components/ListInventory';
import CreateInventory from './components/CreateInventory';
import ViewInventory from './components/ViewInventory';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './components/style.css';

function App() {
  return (
    <>
    <div>
        <Router>
              <Navbar />
                <div className="konten">
                    <Switch> 
                          <Route path = "/" exact component =
                              {Home}></Route>
                          <Route path = "/inventory" component = 
                              {ListInventory}></Route>
                          <Route path = "/tambahpinjambuku/:id" component = 
                              {CreateInventory}></Route>
                          <Route path = "/detailpinjambuku/:id" component = 
                              {ViewInventory}></Route>
                         </Switch>
                </div>
        </Router>
    </div>
    </>
  );
}

export default App;
