import React from "react";
export default class SelectedAnimalsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log("SAL Mounted");
    }
    render() { 
        return ( <div>
            <p>Selected Animals List</p>
        </div> );
    }
}
 
