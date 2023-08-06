import React from "react";
import BoardRegisterForm from "../components/BoardRegisterForm";
import { useNavigate } from "react-router-dom";
import { registerBoardApi } from "../lib/api";

// 등록 컨테이너 컴포넌트
const BoardRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (title, content, write) => {
    try {
      const response = await registerBoardApi(title, content, write);

      alert("등록되었습니다.");

      navigate("/read/" + response.data.boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  return <BoardRegisterForm onRegister={onRegister} />;
};

export default BoardRegisterContainer;
