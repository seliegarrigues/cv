//src/app.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cv from "./page/Cv";
import Admin from "./page/Admin";
import Login from "./page/Login";
import Nopage from "./page/Nopage";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cv />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Nopage" element={<Nopage />}></Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
