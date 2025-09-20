import FirstPage from './components/FirstPage';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Otp from './components/Otp';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Edit-profile/EditProfile';
import AddAddress from './components/Address/AddAddress';
import Booking from './components/Bookings/Booking';
import AddressCart from './components/AddressCart/AddressCart';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePage from './components/SinglePage/SinglePage'; 
import SearchPage from './components/searchPage/SearchPage';
import ManageAddress from './components/manageAddress/ManageAddress';
import Service from './components/Services/Service';
import LastBooking from './components/LastBooking/LastBooking';
import Booked from './components/PaymentSuccessfull/Booked';
import BookingDetails from './components/BookingDetails/BookingDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />        
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/addaddress" element={<AddAddress />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/addresscart" element={<AddressCart />} />
          <Route path="/single_page" element={<SinglePage />} /> 
          <Route path="/manageAddress" element={<ManageAddress />} />
          <Route path='/search_page' element={<SearchPage />} /> 
          <Route path="/service_booking" element={<LastBooking />} />
          <Route path="/booked" element={<Booked />} /> 
          <Route path="/bookingdetail" element={<BookingDetails />} />
        </Routes>
      </BrowserRouter>
    


    </div>
  );
}

export default App;
