import React, { useContext, useReducer, useState } from 'react'
import { DataSet } from './Cfirst'
const init = {
  counter:0,
  data:[
    {name:"nishant"}
  ]
}
function myReducer(state,action)
{
  if(action.type == "counter")
  {
      return {...state,['counter']:state.counter+1}
  }
  else if(action.type == "data")
  {
    return {...state,['data']:action.data}
  }
}
const Cthird = () => 
{
const {loginInfo,myFun} = useContext(DataSet);
const [state,reducer] = useReducer(myReducer,init);

      function callKarLe()
      {
          reducer({type:'counter'})
      }
      function updateName()
      {
        reducer({type:'data',data:[{name:"mukesh"}]})
      }
      return (
          <div>Third Component {loginInfo.name}
          <h1>{state.counter}</h1>
            <button onClick={callKarLe}>number Badha Lo</button>
            <button onClick={updateName}>datan Badha Lo</button>
            <p>{state.data[0].name}</p>
          </div>
  )
}

export default Cthird