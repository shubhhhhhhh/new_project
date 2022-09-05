import React, { useContext } from 'react'
import { DataSet } from './Cfirst'
const Cfourth = () => {
  const {loginInfo,dd} = useContext(DataSet);
  return (
    <div>
      Fourth Componet {loginInfo.name}
    </div>
  )
}

export default Cfourth