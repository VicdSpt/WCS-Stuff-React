import { useState } from 'react'
import './App.css'

import RecipesDataBase from './RecipesDataBase'
import HeaderPage from "./components/HeaderPage"
import HomePage from "./components/Pages/HomePage"
import RecipesPage from './components/Pages/RecipesPage'
import FooterPage from "./components/FooterPage"

function App() {

  return (
    <>
      <HeaderPage />
      <HomePage />
      <RecipesPage recipes={RecipesDataBase}/>
      <FooterPage />
    </>
  )
}

export default App
