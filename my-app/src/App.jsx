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
import HireDog from "./pages/Care Taker/HireDog/HireDog"
import CareTakerDis from "./pages/Care Taker/CareTakerDis/CareTakerDis"
import Jobs from "./pages/Jobs/Jobs"
import JobApply from "./pages/Jobs/JobApply/JobApply"
import JobCate from "./pages/Jobs/JobCategory/JobCate"
import Motivate from "./pages/Motivate/Motivate"
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
          <Route path="/hiredog" element={<HireDog/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/motivate" element={<Motivate/>} />


          <Route path="/product/:productId" element={<ProductDisplay/>} />
          <Route path="/disablity/:disablityId" element={<DisablityDesc/>} />
          <Route path="/volunteer/:volunteerId" element={<VolunteerDis/>}  />
          <Route path="/hiredog/:hiredogId" element={<CareTakerDis/>} />
          <Route path="/jobs/:jobId" element={<JobApply/>} />
          <Route path="/jobs/jobCategory/:jobCateId" element={<JobCate/>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
