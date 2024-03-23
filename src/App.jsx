import { Outlet } from 'react-router-dom'
import Header from './shared/Header'
import Carousel from './pages/Carousel'
import Footer from './shared/Footer'
import { useEffect } from 'react'

function App() {
  // useEffect(() => {
  //   // fetch('https://chef-recipe-hunter-server-dcgzsflj9-armans-projects-cd84b623.vercel.app')
  //   fetch('https://chef-recipe-hunter-server-puce-seven.vercel.app/')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Carousel /> */}
    </>
  )
}

export default App
