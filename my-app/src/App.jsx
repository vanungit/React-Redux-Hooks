import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import  { Route, Switch} from "react-router-dom";
import WiewInfo from "./Components/WiewInfo/WiewInfo";
import {ListComponent} from "./Components/List/ListIpContainer";

const App= () => {
    return (
        <div className='App'>
            <header>
                <Navbar />
            </header>
            <div className="app-wrapper-content">
            <Switch>
                <Route path='/List' render={() => <ListComponent/>}/>
                <Route exact path='/WiewInfo/:userId?' render={()=><WiewInfo/>}/>
                <Route path='/*' render={() => <ListComponent/>}/>
            </Switch>
            </div>
        </div>
    );
}
export default App


