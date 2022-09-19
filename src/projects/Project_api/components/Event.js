import { logDOM } from "@testing-library/react";
import React, { Component } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";


export default class Event extends Component {

    constructor(props) {
        super(props)
        this.dd = this.dd.bind();
        this.handleInput = this.handleInput.bind()
        this.obj = { name: "", email: "jjjjj" }
        this.arr = [
            { name: "rahul Roy", age: 23, image: "./favicon.ico" },
            { name: "puru roy", age: 24, image: "./favicon.ico" },
            { name: "manish", age: 32, image: "./favicon.ico" }
        ]

    }
    display(id) {
        console.log("Function call hua bhai" + id)
        console.log(this.obj)
    }
    dd(id,data,i) {
        console.log("dd call hua " + id+ data+i)

    }

    ff = () => {
        console.log("ff call hua ")
        this.arr.push(this.obj)
        console.log(this.obj);
    }

    handleInput(event) {                                    //name
        this.obj= {...this.obj,[event.target.name]:event.target.value}
        console.log(this.obj)

    }

    handleInputt(event) {                                   //email
        this.obj = { ...this.obj, [event.target.name]: event.target.value }
        console.log(this.obj)
        

    }
    render() {
        return (
            <>
                <h1>Hello</h1>
                <h1>World</h1>
                <button onClick={() => this.display(1)}>display call hua</button>
                <button onClick={this.ff}>ff call hus</button>
                <button onClick={this.dd.bind(2,3,4)}>dd call hua</button>
                <input type="text" name="email" placeholder="Likho Bhai" onChange={(event) => this.handleInputt(event)} />
                <input type="text" name="name" placeholder="Likho Bhai" onChange={(event) => this.handleInputt(event)} />
                <table border={1}>
                    {
                        this.arr.map(value => {
                            return (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td><img src={value.image}></img></td>
                                </tr>
                            )
                        }
                        )
                    }
                </table>
            </>
        )
    }
}




export function Dd() {
    function ff(event) {

    }

    const gg = (event, id) => {

    }
    return (
        <>
            <button onClick={ff}>Click</button>
            <button onClick={(event) => gg(event, 2)}>Click</button>
            <input type="text" name="click me" onChange={(event) => { ff(event) }}></input>
        </>
    )
}