import React from "react";
import { List, Avatar, Row, Col } from "antd";
import { connect } from "react-redux";
class AnimalsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            animalsList: [],
            listLoaded: false
         }
    }

    componentDidMount(){
        console.log('Animal List Mounted');
        this.getAnimalsList();
    }

    async getAnimalsList() {
        try {
          let response = await fetch(
            'https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json',
          );
          let responseJSON = await response.json();
          console.log(responseJSON);
          this.setState({animalsList: responseJSON}, ()=> this.setState({listLoaded: true}));
        } catch (error) {
          console.error(error);
        }
      }
    
    render() { 
        return ( 
            <Row type = "flex" justify = "center" align = "middle">
                <Col span = {16}>
                <div className = "listContainer">
            {this.state.listLoaded?
            (
                <List dataSource = {this.state.animalsList}
                    
                    renderItem={animal => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size = "large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={animal}
                />
                
              </List.Item>
            )}
            >
                </List>
            ) : 
            (
                <p>List Not Loaded</p>
            )}
               
            </div> )
                </Col>
            </Row>
        );    
    }
}
export default connect()(AnimalsList);
