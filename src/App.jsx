import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
