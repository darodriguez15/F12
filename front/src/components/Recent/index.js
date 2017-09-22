import React, {Component} from "react";

class Recent extends  Component{
    constructor(props)
    {
        super(props);
        this.state = {
            recent:[]
        };


    }

    obtenerdatos()
    {

    }
    componentDidMount(){
        fetch("/getRecent", {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("rest en index");
                if(res.ok)
                    return res.json();
            })
            .then((fanZone) =>{
                this.setState({
                    recent : fanZone
                })
            })
    }

    renderFZ()
    {
        return this.state.recent.map((t)=> {
            return(<div className="col-sm-3 caja">
                <br/>
                <h3>Name: {t.nombre}</h3>
                <br/>



            </div>);
        });
    }

    render(){
        return(
            <div className="Drivers">
                <br/>
                <h1>Recent Searches</h1>
                <br/>
                <br/>
                <div className="row">

                    {this.renderFZ()}
                </div>
                <br/>
                <br/>


            </div>
        )
    }
}

export default Recent;