import { useState } from 'react'
import React from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import Contact from './component/contact'
import "./NavLinkTest.css";
import Products from './component/Products'
import ProductDetail from './component/ProductDetail'
import Dashboard from './component/Dashboard'
import Profile from './component/Profile'
import Settings from './component/Settings'


const products = [
  {id : 1, name : "Laptop", price : 1200, image : "/image/laptop.jpeg"},
  {id : 2, name : "Keyboard", price : 800, image : "/image/Keyboard.jpeg"},
  {id : 3, name : "Mouse", price : 500, image : "/image/Mouse.png"}
]

const Home = () => <h2>Welcome to my Home </h2>
function About(){
  return(
    <h2>This is About Page</h2>
  )
}

function App() {


  return (
    <>
    <BrowserRouter>
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/productlist">Product List</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

    </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/productlist" element={<Products list = {products} />}></Route>
       <Route path="/productlist/:id" element={<ProductDetail list = {products} />}></Route>
       <Route path ="/dashboard" element={<Dashboard />}>
       <Route path ="profile" element={<Profile />}/>
       <Route path ="settings" element={<Settings />}/>

       </Route>
       
    </Routes>
    </BrowserRouter>
     
           
    </>
  )
}

export default App