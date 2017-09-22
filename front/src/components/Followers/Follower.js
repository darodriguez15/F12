import React, {Component} from "react";
import PropTypes from "prop-types";

class Follower extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="col-sm-4">

                    <img className="fotoPerfil" src={this.props.follower.avatar_url} alt=""/>
                <br/>
                    <h3>Avatar: {this.props.follower.login}</h3>
                    <h3 href={this.props.follower.html_url}> Repositorio en github: {this.props.follower.html_url}</h3>


            </div>
        );
    }
}
Follower.PropTypes = {
    follower : PropTypes.object.isRequired
}

export default Follower;