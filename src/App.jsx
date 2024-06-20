import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";
import ProfileCreate from "./pages/profileCreate"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/profilecreation" element={<ProfileCreate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
