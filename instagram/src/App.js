import {Route, Routes} from "react-router-dom"
import styled from "styled-components";
import { Home } from "./containers/home";
import { Like } from "./containers/Like";
import Login from "./containers/Login";
import LoginPage from "./containers/LoginPage";
import { Profil } from "./containers/Profil";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/you"  element={<Like />} />
        <Route path="/profile"  element={<Profil />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
`