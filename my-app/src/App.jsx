import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Shop from "./pages/Shop/Shop"
import ProductDisplay from "./pages/Shop/Section2/ProductDisplay"
import Research from "./pages/Research/Research"
import Cart from "./pages/Cart/Cart"
import DisablityDesc from "./pages/Research/Disablity-Desc/DisablityDesc"
import Contact from "./pages/Contact/Contact"
import Volunteer from "./pages/Volunteer/Volunteer"
import VolunteerDis from "./pages/Volunteer/Section2/VolunteerDis/VolunteerDis"
import CareTaker from "./pages/Care Taker/CareTaker"
function App() {


  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/disablity" element ={<Research/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/volunteer" element={<Volunteer/>} />
          <Route path="/caretaker" element={<CareTaker/>} />
          <Route path="/product/:productId" element={<ProductDisplay/>} />
          <Route path="/disablity/:disablityId" element={<DisablityDesc/>} />
          <Route path="/volunteer/:volunteerId" element={<VolunteerDis/>}  />
        </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
