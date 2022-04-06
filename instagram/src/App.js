import {Route, Routes} from "react-router-dom"
import styled from "styled-components";
import { Home } from "./containers/home";
import Login from "./containers/Login";
import LoginPage from "./containers/LoginPage";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
`