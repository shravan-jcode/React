import React from 'react'
import PropPrarent from './components/PropPrarent'
import Usestate from './components/Usestate'
import { Event } from './components/Event'
import ConditionalRendering from './components/ConditionalRendering'
import { List } from './components/List'
// import Crud from './components/Crud'
import FetchUseEffect from './components/FetchUseEffect'
import Fetch1 from './components/Fetch1'
import Axios1 from './components/Axios1'
import ApiIntegration from './components/ApiIntegration'
import LoadingandError from './components/LoadingandError'
import Parent from './Lifting State up/Parent'
import Custom from './Custom hook/Custom'
import CRUD_Task from './Project-Task/CRUD_Task'
import Crud from './CRUD/Crud'
import UserContext from './StateManagement/UserContext'
import Info from './StateManagement/Info'


// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from './Routing/Home'
// import About from './Routing/About'
// import Contact from './Routing/Contact'
// import Nav from './Routing/Nav'
// import DynamicRouting from './Routing/DynamicRouting'
// import NestedRoute from './Routing/NestedRoute'
// import Hello from './Routing/Hello'
// import Protected from './Routing/Protected'
// import NotFound from './Routing/NotFound'


const App = () => {
  const user ={name:"shravan",age:21}
  const color ="black"
  return (
    <div>
      {/* prop */}
      {/* <PropPrarent /> */}

      {/* useState */}
      {/* <Usestate /> */}

      {/* event */}
      {/* <Event/> */}

      {/* conditional redering */}
      {/* <ConditionalRendering /> */}

      {/* <List /> */}

      {/* crud */}
      {/* <Crud/> */}

      {/* useefect */}
      {/* <FetchUseEffect /> */}

      {/* Fetch */}
      {/* <Fetch1 /> */}

      {/* axios */}
      {/* <Axios1/> */}

      {/* Apiintegration */}
      {/* <ApiIntegration /> */}

      {/* Loading and error handling */}
      {/* <LoadingandError /> */}


      {/* Lifting stae up */}
      {/* <Parent /> */}

      {/* customhook */}
      {/* <Custom/> */}

      {/* crudTask1 */}
      {/* <CRUD_Task /> */}


      {/* <Crud /> */}


      {/* React Routing */}

      {/*
      <BrowserRouter>

        <Nav />

        <Routes>

         
          <Route path="/" element={<Home />} />

         
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

         
          <Route
            path="/user/:id"
            element={<DynamicRouting />}
          />

         
          <Route
            path="/parent"
            element={<NestedRoute />}
          >

            <Route
              path="child"
              element={
                <Protected>
                  <Hello />
                </Protected>
              }
            />

          </Route>

         
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </BrowserRouter>
      */}

      {/* stateManagement */}
      <UserContext.Provider value={{user,color}}>
        <Info />
      </UserContext.Provider>

    </div>
  )
}

export default App