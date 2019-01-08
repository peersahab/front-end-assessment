import React, { Component } from 'react';
import { Route, Switch, Router} from "react-router-dom";
import AnimalsList from "./components/AnimalsList";
import SelectedAnimalsList from "./components/SelectedAnimalsList";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import {Button} from 'antd';

const history = createBrowserHistory();
class App extends Component {
  navigate(path){
    history.push(path);
  }
  render() {
    return (
        <Router history = {history}>
        <div>
          <div>
              <Button type="primary" size ="large" onClick = {()=>this.navigate('/SelectedAnimals')}>CONTINUE</Button>
          </div>
          <Switch>
          <Route path = "/" exact component = {AnimalsList} />
          <Route path = "/SelectedAnimals" exact component = {SelectedAnimalsList} />
          </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
