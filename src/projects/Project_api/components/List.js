import React from "react";

export default class List extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {nameList:[],name:""}
    }

    handleChange(event)
    {
            this.setState({name:event.target.value})
            console.log(this.state)
    }

    addList()
    {
        const list = this.state.nameList;
        const nameObj = {}
        nameObj.name = this.state.name
        list.push(nameObj)
        this.setState({nameList:list})
    }

    render()
    {
        return (
            <>
            <input type="text" onChange = {(event) =>this.handleChange(event)}/>
            <input type="button" value="Add Name" onClick={()=>this.addList()}/>
            <ul>
            {
                this.state.nameList.map((v,i)=>
                    <li key={i}>{v.name}</li>
            )
            }
            </ul>
            </>
        )
    }
}