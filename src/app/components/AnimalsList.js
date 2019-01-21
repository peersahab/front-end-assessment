import React from "react";
import { List, Avatar, Row, Col, Checkbox, Icon, Card} from "antd";
import { connect} from "react-redux";
import { storeList, selectAnimal, removeAnimal } from "../actions/animal-actions";
class AnimalsList extends React.Component {
    constructor(props) {
    
        super(props);
        this.state = { 
            listLoaded: false
         }
    }

    componentDidMount(){
        console.log('Animal List Mounted');
        console.log('Length --> ' + this.props.animalsList.allAnimals.length);
        if(this.props.animalsList.allAnimals.length == 0){
            this.getAnimalsList();
        }
        else{
            this.setState({listLoaded: true});
        }
        
    }
    async getAnimalsList() {
        try {
          let response = await fetch(
            'https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json',
          );
          let responseJSON = await response.json();
          //console.log(responseJSON);
          //this.setState({animalsList: responseJSON}, ()=> this.setState({listLoaded: true}));
        var list = [];
        list = responseJSON;
        this.props.dispatch(storeList(list));
        this.setState({listLoaded: true}) //, ()=>this.checkPrevSelected());
        } catch (error) {
          console.error(error);
        }
      }


      animalSelected = (e) => {
          console.log(e.target.value +', Selected --> ' + e.target.checked);
          if(e.target.checked)
        {  
            this.props.dispatch(selectAnimal(e.target.value));
        }
        else{
            this.props.dispatch(removeAnimal(e.target.value));
        }
        
          
          
      }
    
    render() { 
        console.group("props");
        console.log(this.props);
        console.groupEnd();
        return ( 
            
            <Row  type = "flex" justify = "center" align = "middle">
                <Col span = {10}>
                <Card title="SELECT SOME ANIMALS" hoverable = {true} loading = {!this.state.listLoaded}
                style= {{marginTop: '20%', backgroundColor: '#f5f5f5', boxShadow: '1px 2px 1px #9E9E9E', borderRadius: '20px'}}
                headStyle= {{borderBottom: '1px solid #c1c1c1'}}
                >
                <div style = {{height: window.innerHeight *.60, overflowY:'scroll'}}>

            {this.state.listLoaded?
            (
                <List dataSource = {this.props.animalsList.allAnimals}
                    renderItem={animal => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size="large" style={{ color: 'white', backgroundColor: 'rgba(24,144,255)' }}>{`${animal}`.substr(0,1)}</Avatar>}
                  title={animal}
                  
                />
                <Checkbox style = {{marginRight: '10%'}} defaultChecked = {this.props.animalsList.selectedAnimals.includes(animal)} value = {animal} onChange = {this.animalSelected}></Checkbox>
              </List.Item>
            )}
            >
                </List>
            ) : 
            (
                <div style = {{flex: 1, justifyContent:'center', alignItems:'center', padding: '40%'}}>
                <Icon type="loading" style={{fontSize: 50}} />
                <p>LOADING</p>
                </div>
            )}
          
            </div> 
            </Card>
                </Col>
            </Row>
          
        );    
    }
}

const mapstateToProps = (state) => {
    console.group("Map State To Props:");
    console.log(state);
    console.groupEnd();
    return(
      {
          animalsList: state.animals
        //animalsList: state.animalsList,
        //selectedAnimalsList: state.selectedAnimalsList
  });
   
  };

export default connect(mapstateToProps)(AnimalsList);