import React, { Component } from 'react';


export default class Cell extends Component {


    constructor(props){
        super(props);
        this.state = {
            color: props.value
        }
    }

    handleOnClick = (event) => {
        this.setState({
            color: '#333'
        })
    }



    render(){
        return (
            <div className="cell" onClick={this.handleOnClick} style={{backgroundColor: `${this.state.color}`}}>
            </div>
        );
    }


}
