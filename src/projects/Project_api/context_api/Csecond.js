import React, { useContext } from 'react'
import { DataSet } from './Cfirst'
import Cfourth from './Cfourth';
const Csecond = () => {
  const {loginInfo:subhum,myFun:dd} = useContext(DataSet);
  return (
    <div>
      Second Component {subhum.name}
      <button onClick={()=>dd("hi rahul roy")}>
        click karo na
      </button>
    <Cfourth />
    </div>
  )
}

export default Csecond