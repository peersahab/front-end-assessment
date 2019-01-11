import React, { Component } from 'react';
import { Route, Switch, Router} from "react-router-dom";
import AnimalsList from "./components/AnimalsList";
import SelectedAnimalsList from "./components/SelectedAnimalsList";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import {Button, Affix} from 'antd';

const history = createBrowserHistory();
class App extends Component {
  constructor(props){
    super(props);
    this.state = {path: '/'}
  }
  navigate(path){
    history.push(path);
    this.setState({path: path});
  }
  render() {
    console.log(history.location);
    return (
      
        <Router history = {history}>
        <div>
          <div>
          {history.location.pathname === '/'?(
            <Affix style={{position:'absolute', bottom: '4%', right:'29%'}} offsetTop = {10}>
              <Button type="primary" size ="large" onClick = {()=>this.navigate('/SelectedAnimals')}>CONTINUE</Button>
            </Affix>
          ):(
            <Button type="primary" size ="large" onClick = {()=>this.navigate('/')}>BACK</Button>
 
          )}
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
