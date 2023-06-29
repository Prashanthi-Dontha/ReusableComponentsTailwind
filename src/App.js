import { Route, Routes } from "react-router-dom";

// Pages
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Locations from "./Components/Locations";
import Categories from "./Components/Categories";
import Brands from "./Components/Brands";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Login from "./Components/Login";
import Main from "./Main";

function App() {
  return (
    <div className="h-full bg-gradient-to-t from-teal-300 to-pink-300 font-['Poppins'] dark:bg-black">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="locations" element={<Locations />} />
        <Route path="categories" element={<Categories />} />
        <Route path="brands" element={<Brands />} />
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
