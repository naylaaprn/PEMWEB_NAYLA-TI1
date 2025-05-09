import React, {Component} from "react";

class Images extends Component{
    render(){
        return(
            <img src={this.props.linkGambar}
            width='200' height='100' alt="Food1"/>
        );
    }
}
export default Images;