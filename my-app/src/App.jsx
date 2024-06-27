import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Shop from "./pages/Shop/Shop"
import ProductDisplay from "./pages/Shop/Section2/ProductDisplay"
import Research from "./pages/Research/Research"
import Cart from "./pages/Cart/Cart"
function App() {


  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product/:productId" element={<ProductDisplay/>} />
          <Route path="/disablity" element ={<Research/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
