import React from "react";
import { Row, Col, List, Card, Avatar } from "antd";
import { connect} from "react-redux";

class SelectedAnimalsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log("SAL Mounted");
    }
    render() {
        
        const count = this.props.animalsList.allAnimals.length;
        return (
            <Row type = "flex" justify = "center" align = "middle">
            <Col span = {10}>
            <Card title = {count > 1 ? "SELECTED ANIMALS" : "SELECTED ANIMAL"} hoverable = {true}
                style= {{marginTop: '20%', backgroundColor: '#f5f5f5', boxShadow: '1px 2px 1px #9E9E9E', borderRadius: '20px'}}
                headStyle= {{borderBottom: '1px solid #c1c1c1'}}
                >
                <div style = {{height: window.innerHeight *.60, overflowY:'scroll'}}>
        
            <List dataSource = {this.props.animalsList.selectedAnimals}
                
            renderItem={animal => (
                
                    <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar size="large" style={{ color: 'white', backgroundColor: 'rgba(24,144,255)' }}>{`${animal}`.substr(0,1)}</Avatar>}
                    title={animal}
                    />
                
                </List.Item>
                
               
            )}
        >
            </List>
           
        </div> 
        </Card>
            </Col>
        </Row>
        );
    }
}
const mapStateToProps = (state) => {
    return(
      {
        animalsList: state.animals
  });
   
  };
 
export default connect(mapStateToProps)(SelectedAnimalsList);