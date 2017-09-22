import React, {Component} from "react";

class Home extends  Component{
    render(){
        return(
            <div className="FanZone">

                <div className="row">
                    <div className="col-sm-12">
                        <img className="imageHomePage" src="https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt=""/>
                    </div>
                </div>
                <br/>
                <br/>

                    <br/>
                    





                <h1>Welcome to github followers</h1>

                <br/><br/>
                <div className="row">
                    <div className="col-sm-12">
                        <iframe width="90%" height="500px" src="https://www.youtube.com/embed/w3jLJU7DT5E" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="row">

                    <br/><br/><br/>

                    <div className="col-sm-6">
                        <img className="uniandes" src="https://serea2017.uniandes.edu.co/images/Logo.png" alt=""/>
                    </div>

                    <div className="col-sm-6">
                       <h3 className="descripcion">
                           This is a tool that allows you to see all followers who have a specific github account
                       </h3>
                    </div>

                </div>
                <br/><br/>
            </div>
        )
    }
}

export default Home;