import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";
import ProfileCreate from "./pages/profileCreate"
import Homepage from "./pages/homepage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/profilecreation" element={<ProfileCreate />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
