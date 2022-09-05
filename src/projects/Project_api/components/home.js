import React, { Component } from "react";

class Home extends Component{       /*or React.component*/ 

    constructor(props){
        super(props)
        this.a=90;
        this.hi();
    }

    hi(){
        console.log(this.a);
    }

    render(){
        return(
            
                <h1>home hai  bhai   {this.a}</h1>
                
        )
    }
}

export default Home;