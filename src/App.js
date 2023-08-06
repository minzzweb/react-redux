import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//게시판 컴포넌트를 불러온다-> container
import BoardListContainer from "./containers/BoardListContainer";
import BoardModifyContainer from "./containers/BoardModifyContainer";
import BoardReadContainer from "./containers/BoardReadContainer";
import BoardRegisterContainer from "./containers/BoardRegisterContainer";

function App() {
  return (
    <Routes>
      <Route element={<BoardListContainer />} path="/" />
      <Route element={<BoardRegisterContainer />} path="/create" />
      <Route element={<BoardModifyContainer />} path="/edit/:boardNo" />
      <Route element={<BoardReadContainer />} path="/read/:boardNo" />
    </Routes>
  );
}

export default App;
