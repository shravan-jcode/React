import React, { useState } from 'react'
import CheckBoxComponent from './components/CheckBoxComponent'
import RadioBox from './components/RadioBox'
import Form from './components/Form'
import Dropdown from './components/Dropdown'
import Map from './components/Map'
import Clock from './components/Clock'
import NestedLooping from './components/NestedLooping'
import UseState from './components/UseState'
import LifeCycleDemo from './components/LifeCycleDemo'
import P1 from './Practice/P1'

const App = () => {

  const [color,setColor]=useState("green")
  return (
    <div>
      {/* <CheckBoxComponent/>
      <RadioBox/>
      <Form/> */}
      {/* <Dropdown/>
      <Map/> */}


      {/* <select onChange={(e)=>{setColor(e.target.value)}}>
        <option value={"red"}>red</option>
        <option value={"green"}>green</option>
      </select>
      <Clock color={color}/> */}


      {/* <NestedLooping/> */}

      {/* <LifeCycleDemo/> */}

      <P1/>
    </div>
  )
}

export default App