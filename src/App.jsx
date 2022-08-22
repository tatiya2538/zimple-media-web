import "./App.less"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Mains from "./modules/main/Mains.jsx"
import { ApolloProvider } from "@apollo/client"
import { client } from "./configs/api.config.js"
import Profiles from "./modules/profiles/Profiles.jsx"
import FullLayout from "./layout/FullLayout"

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route element={<FullLayout />}>
          <Route path="/profiles" element={<Profiles />} />
        </Route>
        {/* <Route path="/login" element={<Mains />} />
        <Route path="/register" element={<Mains />} /> */}
        <Route path="">
          <Route path="" element={<Mains />} />
          <Route path="*" element={<Mains />} />
        </Route>
      </Routes>
    </ApolloProvider>
  )
}

export default App
