import {Route, Routes} from "react-router-dom"
import styled from "styled-components";
import Login from "./containers/Login";
import LoginPage from "./containers/LoginPage";
import Videos from "./containers/Videos";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/videos" element={<Videos />}/>
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  height: 812px;
  background-color: white;
`