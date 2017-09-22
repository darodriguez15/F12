import React, {Component} from "react";

import FollowersList from "./FollowersList.js";

import SearchBox from "../SearchBox/SearchBox"

class Followers extends  Component{

    constructor(props)
    {
        super(props);

        this.state={
            user : "",
            followers:[ ]

        };
    }


    componentDidMount(){
        fetch("/getfollowers/"+this.state.user, {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("entro al mount")
                console.log("Debajo mio va el user")
                console.log(this.state.user);
                console.log("rest en index");
                console.log("no se totea       aun." );
                if(res.ok)
                    return res.json();
            })
            .then((followers) =>{
                this.setState({
                    followers : followers.data
                })
            })
    }

   /*componentDidUpdate(){
        fetch("/getfollowers/"+this.state.user, {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("entro al update")
                console.log("Debajo mio va el user")
                console.log(this.state.user);
                console.log("rest en index");
                console.log("no se totea       aun." );
                if(res.ok)
                    return res.json();
            })
            .then((followers) =>{
                this.setState({
                    followers : followers.data
                })
            })

    }*/

    search(text) {
        this.setState({
            user: text
        });


        fetch("/getfollowers/"+this.state.user, {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("entro al mount")
                console.log("Debajo mio va el user")
                console.log(this.state.user);
                console.log("rest en index");
                console.log("no se totea       aun." );
                if(res.ok)
                    return res.json();
            })
            .then((followers) =>{
                this.setState({
                    followers : followers.data
                })
            })



    }

    a()
    {
        fetch("/getfollowers/"+this.state.user, {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("entro al mount")
                console.log("Debajo mio va el user")
                console.log(this.state.user);
                console.log("rest en index");
                console.log("no se totea       aun." );
                if(res.ok)
                    return res.json();
            })
            .then((followers) =>{
                this.setState({
                    followers : followers.data
                })
            })
    }
    render() {
        console.log(this.state);
        return(
            <div>
                <header>
                    <h1>Followers Tracker</h1>
                    <label>User: </label><SearchBox search={this.search.bind(this)}/>
                    <br/>
                    <br/>
                    <h3>hit enter twice</h3>
                </header>
                <h2>Your Followers</h2>
                <div className="row">
                     <FollowersList followers={this.state.followers} />
                    </div>
                </div>

        );

    }
}

export default Followers;