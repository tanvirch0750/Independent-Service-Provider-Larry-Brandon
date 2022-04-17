import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Authentication/Login/Login";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import Signup from "./Authentication/Signup/Signup";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import WorkWithMe from "./pages/WorkWithMe/WorkWithMe";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/work-with-me" element={<WorkWithMe />}></Route>
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
